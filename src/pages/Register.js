import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [{ firstName, lastName, email, password }, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <form className='flex flex-col items-center justify-between dark:bg-slate-600 pt-4 bg-slate-100 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 lg:w-1/3 transition-all'>
        <h1 className='mt-2 mb-8 lg:mb-16 text-xl font-semibold dark:text-white'>
          Register
        </h1>
        <div className='flex flex-col items-center justify-around h-2/3 w-full'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={handleChange}
            className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={handleChange}
            className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
          />
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
            onClick={() => navigate('/login')}
            className='w-1/2 bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 p-1'
          >
            Log in
          </button>
          <button className='w-1/2 bg-orange-500 hover:bg-orange-600 p-1'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
