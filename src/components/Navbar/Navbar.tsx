import {FC} from 'react';
import {Layout, Row, Col, Menu, MenuProps} from 'antd';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {SearchOutlined} from '@ant-design/icons';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';

import {logoutUser} from '@/store/reducers/auth/actionCreators';

import {RouteNames} from '../../routes';

import './style.scss';

const Navbar: FC = () => {
  const {isAuth, user} = useAppSelector(({auth}) => auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/registration';

  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      label: isAuth ? (
        <div className="menu__user">
          <div>{user?.username}</div>
          <div
            onClick={() =>
              dispatch(logoutUser())
                .unwrap()
                .then(() => navigate('/'))
            }>
            Выйти
          </div>
        </div>
      ) : (
        <Link className="navbar__link" to={RouteNames.LOGIN}>
          Войти
        </Link>
      ),
    },
  ];

  if (isAuthPage) return null;

  return (
    <Layout.Header>
      <Row justify="center">
        <Col span={8}>
          <Link className="navbar__link" to={RouteNames.HOME}>
            На главную
          </Link>
        </Col>
        <Col span={8}>
          <Row justify={'center'}>
            <Link className="navbar__link" to={RouteNames.SEARCH}>
              <SearchOutlined />
              Поиск
            </Link>
          </Row>
        </Col>
        <Col span={8}>
          <Menu className="menu" theme="dark" mode="horizontal" items={menuItems} selectable={false} />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
