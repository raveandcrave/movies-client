import {MovieDto, MovieTypeEnum} from '@/types/kinopoisk';
import {Col, Row, Typography, Image} from 'antd';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import noImage from '@/assets/images/image-placeholder.png';

interface SearchFilmListProps {
  isLoading: boolean;
  searchResult?: MovieDto[];
}

const {Title, Paragraph} = Typography;

const SearchFilmList: FC<SearchFilmListProps> = ({searchResult, isLoading}) => {
  if (!searchResult) {
    return <h3>Тут ничего нет</h3>;
  }

  return (
    <Row gutter={[0, 20]}>
      {searchResult.map((movie) => (
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
      ))}
    </Row>
  );
};

export default SearchFilmList;
