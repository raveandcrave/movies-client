import {Routes, Route} from 'react-router-dom';
import {privateRoutes} from '../../routes';
import {publicRoutes} from '../../routes';
import useAppSelector from '../../hooks/useAppSelector';

import NotFound from '../../pages/NotFoundPage';

const AppRouter = () => {
  const {isAuth} = useAppSelector(({auth}) => auth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
