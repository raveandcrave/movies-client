import './style.scss';

import {MovieDto, MovieTypeEnum, DataType} from '@/types/kinopoisk';
import {Col, Row, Typography, Image, List} from 'antd';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import noImage from '@/assets/images/image-placeholder.png';
import {PaginationConfig} from 'antd/lib/pagination';

interface SearchFilmListProps {
  isFetching: boolean;
  searchResult?: DataType<MovieDto>;
  getSearchFilms: (arg: {query: string; page: number}, preferCacheValue?: boolean) => void;
  lastQuery: string;
}

const {Title, Paragraph} = Typography;

const SearchFilmList: FC<SearchFilmListProps> = ({searchResult, isFetching, getSearchFilms, lastQuery}) => {
  if (!searchResult?.docs) {
    return (
      <Row align={'middle'} justify={'center'}>
        <Title className="search-film__empty-message" level={4}>
          Воспользуйтесь поиском
        </Title>
      </Row>
    );
  }

  const paginationOptions: PaginationConfig = {
    responsive: true,
    showSizeChanger: false,
    hideOnSinglePage: true,
    disabled: isFetching,
    position: 'top',
    align: 'center',
    pageSize: searchResult.limit,
    current: searchResult.page,
    total: searchResult.total,
    onChange: (page, pageSize) => {
      getSearchFilms({query: lastQuery, page: page}, true);
    },
  };

  return (
    <Row gutter={[0, 20]}>
      <List
        locale={{
          emptyText: (
            <Row align={'middle'} justify={'center'}>
              <Title className="search-film__empty-message" level={4}>
                По вашему запросу ничего не найдено
              </Title>
            </Row>
          ),
        }}
        loading={isFetching}
        pagination={paginationOptions}
        dataSource={searchResult.docs}
        renderItem={(movie) => (
          <List.Item>
            <Col span={24}>
              <Row gutter={[20, 0]}>
                <Col span={4}>
                  <Link to={`/film/${movie.id}`}>
                    <Image placeholder preview={false} src={movie.poster?.url} fallback={noImage} />
                  </Link>
                </Col>
                <Col span={20}>
                  <Link to={`/film/${movie.id}`}>
                    <Title className="search-film__title" level={5}>
                      {movie.name} {movie.year}
                    </Title>
                  </Link>
                  <Paragraph>
                    {movie.alternativeName} {movie.movieLength ? movie.movieLength + ' мин' : ''}
                  </Paragraph>
                  <Paragraph>{MovieTypeEnum[movie.type]}</Paragraph>
                  <Paragraph>
                    {movie.persons?.reduce((acc, item) => {
                      return acc + `, ${item.name}`;
                    }, '')}
                  </Paragraph>
                </Col>
              </Row>
            </Col>
          </List.Item>
        )}
      />
    </Row>
  );
};

export default SearchFilmList;
