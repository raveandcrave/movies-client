import dayjs from 'dayjs';
import {parseSearchParamsToFormValues} from './parseSearchParamsToFormValues';

const fullData = new URLSearchParams('name=человек+паук&type=movie&isSeries=true&date=2020-2023&rating=1-10');
const onlyName = new URLSearchParams('name=человек+паук');
const randomParam = new URLSearchParams('random=random');

describe('Парсинг URLSearchParams в данные формы', () => {
  test('Все поля заполнены', () => {
    expect(parseSearchParamsToFormValues(fullData)).toStrictEqual({
      name: 'человек паук',
      date: [dayjs('2020', 'YYYY'), dayjs('2023', 'YYYY')],
      rating: [1, 10],
      type: 'movie',
      isSeries: true,
    });
  });
  test('Только name', () => {
    expect(parseSearchParamsToFormValues(onlyName)).toStrictEqual({
      name: 'человек паук',
    });
  });
  test('Есть параметры которых нет в форме', () => {
    expect(parseSearchParamsToFormValues(randomParam)).toStrictEqual({
      random: 'random',
    });
  });
});
