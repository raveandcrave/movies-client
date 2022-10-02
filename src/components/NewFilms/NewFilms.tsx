import {FC, useState} from 'react';
import {Button, List, Row} from 'antd';

import {useGetNewFilmsQuery} from '../../services/kinopoiskApi';

import FilmCard from '../FilmCard';

import './style.scss';

const NewFilms: FC = () => {
  const [limit, setLimit] = useState(10);

  const {data: newFilms, isLoading, isFetching, isSuccess, isError} = useGetNewFilmsQuery(limit);

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
      {newFilms && (
        <List
          grid={{gutter: 16, xs: 2, sm: 3, md: 4, lg: 4, xl: 5, xxl: 5}}
          dataSource={newFilms.docs}
          className="new-films__list"
          renderItem={(movie) => (
            <List.Item>
              <FilmCard film={movie} />
            </List.Item>
          )}
        />
      )}

      <Row justify="center">
        <Button
          type="primary"
          size="large"
          loading={isLoading || isFetching}
          onClick={() => setLimit((prev) => prev + 10)}>
          Показать еще
        </Button>
      </Row>
    </div>
  );
};

export default NewFilms;
