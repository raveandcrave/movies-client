import {FC, useEffect} from 'react';
import {Layout} from 'antd';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import useAppDispatch from './hooks/useAppDispatch';

import {checkAuth} from './store/reducers/auth/actionCreators';

import './App.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
