import {FC} from 'react';
import {useParams} from 'react-router-dom';

import Film from '@/components/Film';

const FilmPage: FC = () => {
  const {filmId} = useParams();
  if (!filmId) return null;

  return <Film filmId={filmId} />;
};

export default FilmPage;
