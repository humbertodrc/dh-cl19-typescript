import { useEffect, useState } from 'react';
import './App.css';
import { User } from './components/User';
import { getUsers } from './service/getUsers';
import { UserI } from './types/user';

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
          <User key={id} name={name} email={email} />
          ))}
      </>}
    </div>
  );
}

export default App;
