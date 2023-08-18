import {SearchForm} from '@/components/SearchFields/SearchFields.types';

export const generateKinopoiskApiQueryString = ({name, date, rating, type, isSeries}: SearchForm): string => {
  const queryName = name ? `&field=name&search=${name}` : '';
  const queryDate = date ? `&field=year&search=${date[0].year()}-${date[1].year()}` : '';
  const queryRating = rating ? `&field=rating.kp&search=${rating[0]}-${rating[1]}` : '';
  const queryType = type ? `&field=type&search=${type}` : '';
  const queryIsSerires = isSeries ? '@field=isSeries&search=true' : '';

  const queryString = queryName + queryDate + queryRating + queryType + queryIsSerires;

  return queryString;
};
