import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Home,
  Login,
  Register,
  AddDuck,
  DebuggingDuck,
  ShowShibas,
  VerifyAuth,
} from './pages';
import { NavBar, Footer } from './components';
import axios from 'axios';

const App = () => {
  const [ducks, setDucks] = useState([]);

  const getDucks = async () => {
    const { data } = await axios('http://localhost:3100/duck/');
    setDucks(data);
  };

  useEffect(() => {
    getDucks();
  }, []);

  return (
    <div className='dark:bg-slate-700 h-screen'>
      <NavBar />
      <Routes>
        <Route index element={<Home ducks={ducks} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='auth' element={<VerifyAuth />}>
          <Route path='addduck' element={<AddDuck setDucks={setDucks} />} />
        </Route>
        <Route path='/showshibas' element={<ShowShibas />} />
        <Route path='/duck/:id' element={<DebuggingDuck ducks={ducks} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
