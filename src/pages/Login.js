import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const { isAuthenticated, setToken } = useAuthContext();

  const navigate = useNavigate();
  const [{ email, password }, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3100/user/login', {
        email,
        password,
      });
      localStorage.setItem('token', data);
      setToken(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (isAuthenticated) return <Navigate to='/' />;
  else
    return (
      <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center justify-between dark:bg-slate-600 pt-4 bg-slate-100 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 md:w-1/3 transition-all'
        >
          <h1 className='mt-2 mb-8 lg:mb-16 text-xl font-semibold dark:text-white'>
            Login
          </h1>
          <div className='flex flex-col items-center justify-around h-1/2 w-full'>
            <input
              type='text'
              placeholder='E-mail'
              name='email'
              value={email}
              onChange={handleChange}
              className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
              className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
            />
          </div>
          <br />
          <div className='flex w-full'>
            <button
              onClick={() => navigate('/register')}
              className='w-1/2 bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 p-1'
            >
              Register
            </button>
            <button
              type='submit'
              className='w-1/2 bg-orange-500 hover:bg-orange-600 p-1'
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    );
};

export default Login;
