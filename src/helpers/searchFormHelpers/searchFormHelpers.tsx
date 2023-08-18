import {SearchForm} from '@/components/SearchFields/SearchFields.types';
import dayjs from 'dayjs';

export const generateKinopoiskApiQueryString = ({name, date, rating, type, isSeries}: SearchForm): string => {
  const queryName = name ? `&field=name&search=${name}` : '';
  const queryDate = date ? `&field=year&search=${date[0].year()}-${date[1].year()}` : '';
  const queryRating = rating ? `&field=rating.kp&search=${rating[0]}-${rating[1]}` : '';
  const queryType = type ? `&field=type&search=${type}` : '';
  const queryIsSerires = isSeries ? '@field=isSeries&search=true' : '';

  const queryString = queryName + queryDate + queryRating + queryType + queryIsSerires;

  return queryString;
};

export const generateFilterQueryParams = ({name, date, rating, type, isSeries}: SearchForm): [string, string][] => {
  const queryParams = {
    name: name ? name.trim() : undefined,
    type,
    isSeries: isSeries ? isSeries.toString() : undefined,
    date: date && `${date[0].year()}-${date[1].year()}`,
    rating: rating && `${rating[0]}-${rating[1]}`,
  };

  const queryParamsArray = Object.entries(queryParams).filter(([key, value]) => typeof value === 'string') as [
    string,
    string
  ][];

  return queryParamsArray;
};

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
