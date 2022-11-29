import { useEffect, useState } from 'react';
import './App.css';
import { User } from './components/User';
import { getUsers } from './service/getUsers';
import { UserI } from './types/user';
import { formatUserName } from './utils/utils';

function App() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserI[]>([]);

  useEffect(() => {
    setLoading(true);
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUsers])
  

  return (
    <div className="container">
      {loading ? <><h1>Loading...</h1></> : <>
        {users.map(({id, name, email}) => (
            <li key={id}>
            <span>{email}</span> (<span>{formatUserName(name)}</span>)
          </li>
          ))}
      </>}
    </div>
  );
}

export default App;
