import {FC} from 'react';
import {Layout} from 'antd';

import NewFilms from '@/components/NewFilms';

import './style.scss';

const HomePage: FC = () => {
  // const [users, setUsers] = useState<User[]>([]);

  // const getUsers = () => {
  //   $authHost.get<User[]>('/users').then((res) => setUsers(res.data));
  // };

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
