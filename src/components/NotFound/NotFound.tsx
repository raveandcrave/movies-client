import './style.scss';

import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Result, Button} from 'antd';
import {RouteNames} from '@/routes/index';

const NotFound: FC = () => {
  return (
    <Result
      status="404"
      title={<h2 className="notfound-title">404 Страница не найдена</h2>}
      extra={
        <Link to={RouteNames.HOME}>
          <Button type="primary">На главную</Button>
        </Link>
      }
    />
  );
};

export default NotFound;
