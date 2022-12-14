import { useState } from 'react';

const AddDuck = () => {
  const [{ name, photo }, setDuck] = useState({ name: '', photo: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDuck((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-between dark:bg-slate-600 pt-4 bg-slate-100 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 transition-all'>
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
            name='photo'
            value={photo}
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
      </div>
    </div>
  );
};

export default AddDuck;
