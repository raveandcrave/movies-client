import auth from './auth';
import {kinopoiskApi} from '../../services/kinopoiskApi';

const reducers = {
  auth,
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
};

export default reducers;
