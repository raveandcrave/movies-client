import {FC} from 'react';
import {Row, Col, Button, Typography, Rate} from 'antd';
import {useGetFilmByIdQuery} from '@/services/kinopoiskApi';

import FilmInfo from '@/components/FilmInfo';

interface FilmProps {
  filmId: string;
}

const Film: FC<FilmProps> = ({filmId}) => {
  const {data, isError, isLoading} = useGetFilmByIdQuery(+filmId);

  if (!data?.docs[0]) return null;

  const film = data.docs[0];

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
          <div className="buttons">
            <Button>буду смотреть</Button>
          </div>
          <Typography.Title level={2}>О фильме</Typography.Title>
          <FilmInfo film={film} />
        </Col>
      </Row>
      <Typography.Title level={2}>Описание</Typography.Title>
      <Typography.Text>{film.description}</Typography.Text>
      <Typography.Title level={2}>Рейтинг фильма</Typography.Title>
      <Rate
        disabled
        count={10}
        allowHalf
        defaultValue={film.rating.kp}
        character={() => {
          return <div>33</div>;
        }}
      />
    </div>
  );
};

export default Film;
