import {Col, Row} from 'antd';
import SearchFields from '@/components/SearchFields/SearchFields';
import SearchFilmList from '@/components/SearchFilmList/SearchFilmList';
import {useLazyGetSearchFilmsQuery} from '@/services/kinopoiskApi';

const SearchPage = () => {
  const [getSearchFilms, {data: searchResult, isFetching}, lastArg] = useLazyGetSearchFilmsQuery();

  return (
    <div className="layout-container">
      <Row gutter={[20, 0]}>
        <Col span={24} md={6}>
          <SearchFields getSearchFilms={getSearchFilms} isFetching={isFetching} />
        </Col>
        <Col span={24} md={18}>
          <SearchFilmList
            searchResult={searchResult}
            getSearchFilms={getSearchFilms}
            isFetching={isFetching}
            lastQuery={lastArg.lastArg.query}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
