import {Typography} from 'antd';
import {FC} from 'react';
import {SimilarMovy} from '@/types/kinopoisk';
import FilmCards from '@/components/FilmCards';

interface SimilarMoviesProps {
  similarMovies: SimilarMovy[];
}

const SimilarMovies: FC<SimilarMoviesProps> = ({similarMovies}) => {
  return (
    <>
      <Typography.Title level={2}>Похожее</Typography.Title>
      <FilmCards films={similarMovies} />
    </>
  );
};

export default SimilarMovies;
