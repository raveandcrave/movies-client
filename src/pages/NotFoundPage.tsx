import {FC} from 'react';
import {Layout, Row} from 'antd';

import NotFound from '@/components/NotFound';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <NotFound />
      </Row>
    </Layout>
  );
};

export default NotFoundPage;
