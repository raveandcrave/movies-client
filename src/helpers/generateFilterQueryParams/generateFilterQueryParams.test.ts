import {SearchForm} from '@/components/SearchFields/SearchFields.types';
import {generateFilterQueryParams} from './generateFilterQueryParams';
import dayjs from 'dayjs';

const fullData: SearchForm = {
  name: ' человек паук   ',
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

describe('Генерация массива query параметров', () => {
  test('Все поля заполнены', () => {
    expect(generateFilterQueryParams(fullData)).toStrictEqual([
      ['name', 'человек паук'],
      ['type', 'movie'],
      ['isSeries', 'true'],
      ['date', '2020-2023'],
      ['rating', '1-7'],
    ]);
  });
  test('Все поля пустые', () => {
    expect(generateFilterQueryParams(emptyData)).toStrictEqual([]);
  });
  test('Заполнено имя, чекбокс false', () => {
    expect(generateFilterQueryParams(thirdCase)).toStrictEqual([['name', 'человек паук']]);
  });
});
