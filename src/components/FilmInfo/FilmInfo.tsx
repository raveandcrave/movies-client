import {FC} from 'react';
import {Row, Col} from 'antd';
import dayjs from 'dayjs';

import {SingleMovieType} from '@/types/kinopoisk';

interface FilmInfoProps {
  film: SingleMovieType;
}

const FilmInfo: FC<FilmInfoProps> = ({film}) => {
  const {year, genres, slogan, budget, fees, premiere, movieLength} = film;

  console.log('film', film);

  return (
    <>
      <Row>
        <Col span={8}>Год производства</Col>
        <Col span={16}>{year}</Col>
      </Row>
      <Row>
        <Col span={8}>Жанр</Col>
        <Col span={16}>{genres.map(({name}) => name).join(', ')}</Col>
      </Row>
      <Row>
        <Col span={8}>Слоган</Col>
        <Col span={16}>{slogan ?? '-'}</Col>
      </Row>
      <Row>
        <Col span={8}>Бюджет</Col>
        <Col span={16}>{budget.value ? budget.currency + budget.value : '-'}</Col>
      </Row>
      <Row>
        <Col span={8}>Сборы в мире</Col>
        <Col span={16}>{fees.world.currency + fees.world.value}</Col>
      </Row>
      <Row>
        <Col span={8}>Сборы в России</Col>
        <Col span={16}>{fees.russia ? fees.russia?.currency + fees.russia?.value : '-'}</Col>
      </Row>
      <Row>
        <Col span={8}>Премьера в мире</Col>
        <Col span={16}>{premiere.world ? dayjs(premiere.world).format('DD MMM YYYY') : '-'}</Col>
      </Row>
      <Row>
        <Col span={8}>Премьера в России</Col>
        <Col span={16}>{premiere.russia ? dayjs(premiere.russia).format('DD MMM YYYY') : '-'}</Col>
      </Row>
      <Row>
        <Col span={8}>Время</Col>
        <Col span={16}>{movieLength} мин.</Col>
      </Row>
    </>
  );
};

export default FilmInfo;
