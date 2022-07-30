import React, {FC} from 'react';
import {Layout, Row, Col, Menu, MenuProps} from 'antd';
import {Link} from 'react-router-dom';
import {RouteNames} from '../../routes';

import './style.scss';

const Navbar: FC = () => {
  const auth = true;

  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      label: auth ? (
        <div className="menu__user">
          <div>Username</div>
          <div onClick={() => console.log('Выйти')}>Выйти</div>
        </div>
      ) : (
        <Link to={RouteNames.LOGIN}>Войти</Link>
      ),
    },
  ];

  return (
    <Layout.Header>
      <Row justify="end">
        <Col span={8}>
          <div className="logo"></div>
        </Col>
        <Col span={8}>
          <Menu className="menu" theme="dark" mode="horizontal" items={menuItems} selectable={false} />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
