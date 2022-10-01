import {useState, FC} from 'react';
import {Layout} from 'antd';

import {$authHost} from '../services/http';
import {User} from '../types';

import {useGetFilmByIdQuery} from '../services/kinopoiskApi';
import NewFilms from '../components/NewFilms';

import './style.scss';

const HomePage: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const {data: film, isFetching, isLoading, isSuccess, isError, error} = useGetFilmByIdQuery(326);

  const getUsers = () => {
    $authHost.get<User[]>('/users').then((res) => setUsers(res.data));
  };

  return (
    <Layout>
      {/* <button onClick={() => getUsers()}>get users</button>
      {users.map((user) => {
        return <div key={user.email}>{user.email}</div>;
      })} */}
      <div className="homepage">
        <NewFilms />
      </div>
    </Layout>
  );
};

export default HomePage;
