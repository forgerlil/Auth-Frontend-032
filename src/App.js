import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Home,
  Login,
  Register,
  AddDuck,
  DebuggingDuck,
  ShowShibas,
} from './pages';
import { NavBar, Footer } from './components';
import axios from 'axios';

// const user = {
//   firstName: 'Lilian',
//   lastName: 'Forger',
//   email: '',
//   password: '',
// };

const App = () => {
  const [ducks, setDucks] = useState([]);

  const getDucks = async () => {
    const { data } = await axios('http://localhost:3100/duck/');
    setDucks(data);
  };

  useEffect(() => {
    getDucks();
  }, []);

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const verifyToken = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:3100/user/auth',
        {},
        { headers: { Authorization: token } }
      );
      setIsAuthenticated(true);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    token && verifyToken();
  }, [token]);

  return (
    <div className='dark:bg-slate-700 h-screen'>
      <NavBar />
      <Routes>
        <Route index element={<Home ducks={ducks} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/addduck' element={<AddDuck />} />
        <Route path='/showshibas' element={<ShowShibas />} />
        <Route path='/duck/:id' element={<DebuggingDuck ducks={ducks} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
