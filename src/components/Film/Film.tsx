import {FC} from 'react';
import {Row, Col, Typography} from 'antd';
import {useGetFilmByIdQuery} from '@/services/kinopoiskApi';

import FilmInfo from '@/components/FilmInfo';
import Sequels from '@/components/Sequels';
import SimilarMovies from '@/components/SimilarMovies';
import FilmSkeleton from './FilmSkeleton';

interface FilmProps {
  filmId: string;
}

const Film: FC<FilmProps> = ({filmId}) => {
  const {data: film, isLoading, isFetching} = useGetFilmByIdQuery(+filmId);

  if (isLoading || isFetching) {
    return <FilmSkeleton />;
  }

  if (!film) return null;

  return (
    <div className="layout-container">
      <Row gutter={20}>
        <Col span={6}>
          <img src={film.poster?.url} alt={film.name}></img>
        </Col>
        <Col span={18}>
          <Typography.Title level={1}>
            {film.name} ({film.year})
          </Typography.Title>
          <p>{film.alternativeName}</p>
          {/* <div className="buttons">
            <Button>буду смотреть</Button>
          </div> */}
          <Typography.Title level={2}>О фильме</Typography.Title>
          <FilmInfo film={film} />
        </Col>
      </Row>
      <Typography.Title level={2}>Описание</Typography.Title>
      <Typography.Text>{film.description}</Typography.Text>
      {!!film.sequelsAndPrequels?.length && <Sequels sequels={film.sequelsAndPrequels} />}
      {!!film.similarMovies?.length && <SimilarMovies similarMovies={film.similarMovies} />}
    </div>
  );
};

export default Film;
