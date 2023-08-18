import {SearchForm} from '@/components/SearchFields/SearchFields.types';

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
