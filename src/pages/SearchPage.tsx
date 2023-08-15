import {Col, Row} from 'antd';
import SearchFields from '@/components/SearchFields/SearchFields';
import SearchFilmList from '@/components/SearchFilmList/SearchFilmList';
import {useLazyGetSearchFilmsQuery} from '@/services/kinopoiskApi';

const SearchPage = () => {
  const [getSearchFilms, {data: searchResult, isLoading}] = useLazyGetSearchFilmsQuery();

  return (
    <div className="layout-container">
      <Row gutter={[20, 0]}>
        <Col span={6}>
          <SearchFields getSearchFilms={getSearchFilms} isLoading={isLoading} />
        </Col>
        <Col span={18}>
          <SearchFilmList searchResult={searchResult} isLoading={isLoading} />
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
