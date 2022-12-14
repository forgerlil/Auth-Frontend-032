import { useState, useEffect } from 'react';
import axios from 'axios';

const ShowShibas = () => {
  const [shibas, setShibas] = useState();

  const getShibas = async () => {
    const { data } = await axios(
      'https://shibe.online/api/shibes?count=6&urls=true'
    );
    setShibas(data);
  };

  useEffect(() => {
    getShibas();
  }, []);

  return shibas ? (
    <div className='w-full h-screen flex flex-col items-center mt-[-1px]'>
      <p className='mt-20 text-3xl'>Relax and enjoy some Shibas</p>
      <div className='mt-12 p-8 bg-slate-100 dark:bg-slate-600 rounded grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {shibas.map((url, index) => (
          <img
            key={`shiba-${index}`}
            src={url}
            alt='A random Shiba Inu, or not'
            className='rounded w-60 h-60 object-cover'
          />
        ))}
      </div>
    </div>
  ) : (
    <div className='my-12 text-3xl'>Getting some Shibas...</div>
  );
};

export default ShowShibas;
