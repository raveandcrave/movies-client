import {useState, FC} from 'react';
import {$authHost} from '../services/http';
import {User} from '../types';

import {useGetFilmByIdQuery} from '../services/kinopoiskApi';

const HomePage: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const {data: film, isFetching, isLoading, isSuccess, isError, error} = useGetFilmByIdQuery(326);

  const getUsers = () => {
    $authHost.get<User[]>('/users').then((res) => setUsers(res.data));
  };

  return (
    <>
      <button onClick={() => getUsers()}>get users</button>
      {users.map((user) => {
        return <div key={user.email}>{user.email}</div>;
      })}
    </>
  );
};

export default HomePage;
