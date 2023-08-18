import {SearchForm} from '@/components/SearchFields/SearchFields.types';
import dayjs from 'dayjs';

export const parseSearchParamsToFormValues = (urlSearchParams: URLSearchParams) => {
  const searchParamsObj = {} as SearchForm;

  for (let [key, value] of urlSearchParams.entries() as IterableIterator<[keyof SearchForm, string]>) {
    switch (key) {
      case 'isSeries':
        searchParamsObj[key] = !!value;
        break;
      case 'date':
        const dateArray = value.split('-').map((item) => dayjs(item, 'YYYY'));

        searchParamsObj[key] = [dateArray[0], dateArray[1]];
        break;
      case 'rating':
        const ratingArray = value.split('-').map((item) => +item);

        searchParamsObj[key] = [ratingArray[0], ratingArray[1]];
        break;
      default:
        searchParamsObj[key] = value;
    }
  }

  return searchParamsObj;
};
