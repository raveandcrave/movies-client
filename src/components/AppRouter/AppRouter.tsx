import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {privateRoutes} from '../../routes';
import {publicRoutes} from '../../routes';

const AppRouter = () => {
  const auth = true;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route
        path="*"
        element={
          <main style={{padding: '1rem'}}>
            <p>Такой страницы не существует</p>
          </main>
        }
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route
        path="*"
        element={
          <main style={{padding: '1rem'}}>
            <p>Такой страницы не существует</p>
          </main>
        }
      />
    </Routes>
  );
};

export default AppRouter;
