import {FC} from 'react';
import {Button, List, Row} from 'antd';

import FilmCard from '../FilmCard';

import './style.scss';

const NewFilms: FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="new-films">
      <div className="new-films__header">
        <h2 className="new-films__title">Новые фильмы</h2>
        <div className="new-films__btn">
          <Button type="primary" size="large">
            Смотреть все
          </Button>
        </div>
      </div>
      <List
        grid={{gutter: 16, xs: 2, sm: 3, md: 4, lg: 4, xl: 5, xxl: 5}}
        dataSource={data}
        className="new-films__list"
        renderItem={(item) => (
          <List.Item>
            <FilmCard />
          </List.Item>
        )}
      />
      <Row justify="center">
        <Button type="primary" size="large">
          Покзать еще
        </Button>
      </Row>
    </div>
  );
};

export default NewFilms;
