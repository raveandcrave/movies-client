import {Row, Col, Skeleton} from 'antd';

const FilmSkeleton = () => {
  return (
    <div className="layout-container">
      <Row gutter={20}>
        <Col span={6}>
          <Skeleton.Image active />
        </Col>
        <Col span={18}>
          <Skeleton active title />
          <Skeleton active paragraph={{rows: 8}} />
        </Col>
      </Row>
      <Skeleton active title />
    </div>
  );
};

export default FilmSkeleton;
