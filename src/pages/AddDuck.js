import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const AddDuck = ({ setDucks }) => {
  const {
    user: { firstName, lastName },
  } = useAuthContext();
  const navigate = useNavigate();
  const [{ name, image }, setDuck] = useState({ name: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDuck((prev) => ({ ...prev, [name]: value }));
  };

  const createDuck = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3100/duck', {
        name,
        image,
        owner: { firstName, lastName },
      });
      setDucks(data);
      navigate('../../');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <form
        onSubmit={createDuck}
        className='flex flex-col items-center justify-between dark:bg-slate-600 pt-4 bg-slate-100 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 transition-all'
      >
        <h1 className='mt-2 mb-8 lg:mb-16 text-xl font-semibold text-center p-2 sm:p-4 lg:p-8'>
          Another duck rises to the debugging call? Please list it here:
        </h1>
        <div className='flex flex-col items-center justify-around h-1/2 w-2/3 mb-8'>
          <input
            type='text'
            placeholder="Duck's Name"
            name='name'
            value={name}
            onChange={handleChange}
            className='w-4/5 mb-8 p-2 outline-none focus:border-b border-slate-400 focus:border-slate-800 dark:bg-slate-500 dark:border-slate-100 dark:text-white rounded transition-all'
          />
          <input
            type='text'
            placeholder='Duck photo URL'
            name='image'
            value={image}
            onChange={handleChange}
            className='w-4/5 mb-8 p-2 outline-none focus:border-b border-slate-400 focus:border-slate-800 dark:bg-slate-500 dark:border-slate-100 dark:text-white rounded transition-all'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-orange-500 hover:bg-orange-600 p-1'
        >
          Join the fray
        </button>
      </form>
    </div>
  );
};

export default AddDuck;
