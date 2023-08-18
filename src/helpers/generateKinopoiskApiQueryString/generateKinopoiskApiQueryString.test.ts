import {SearchForm} from '@/components/SearchFields/SearchFields.types';
import {generateKinopoiskApiQueryString} from './generateKinopoiskApiQueryString';
import dayjs from 'dayjs';

const fullData: SearchForm = {
  name: 'человек паук',
  date: [dayjs('2020', 'YYYY'), dayjs('2023', 'YYYY')],
  rating: [1, 7],
  type: 'movie',
  isSeries: true,
};

const emptyData: SearchForm = {
  name: undefined,
  date: undefined,
  rating: undefined,
  type: undefined,
  isSeries: undefined,
};

const thirdCase: SearchForm = {
  name: 'человек паук',
  date: undefined,
  rating: undefined,
  type: undefined,
  isSeries: false,
};

describe('Генерация строки запроса из данных формы', () => {
  test('Все поля заполнены', () => {
    expect(generateKinopoiskApiQueryString(fullData)).toBe(
      '&field=name&search=человек паук&field=year&search=2020-2023&field=rating.kp&search=1-7&field=type&search=movie@field=isSeries&search=true'
    );
  });
  test('Все поля пустые', () => {
    expect(generateKinopoiskApiQueryString(emptyData)).toBe('');
  });
  test('Заполнено имя, чекбокс false', () => {
    expect(generateKinopoiskApiQueryString(thirdCase)).toBe('&field=name&search=человек паук');
  });
});
