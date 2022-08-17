import {useState} from 'react';
import {$authHost} from '../services/http';
import {User} from '../types';

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

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
