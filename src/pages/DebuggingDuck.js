import { useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const DebuggingDuck = ({ ducks }) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const { name, image } = ducks.length && ducks.find((duck) => duck._id === id);

  return (
    <div className='w-full h-screen mt-[-1px] overflow-hidden flex flex-col items-center justify-center'>
      <div className='mt-4 mb-8 p-4 bg-slate-100 dark:bg-slate-600 rounded flex flex-col items-center transition-all duration-300'>
        <p className='mb-4 text-2xl font-semibold'>
          Hello {user?.firstName ? user.firstName : 'there'}!
        </p>
        <p className='mb-1 font-thin'>
          I am {name}, and I will assist you with your debugging for this
          session.
        </p>
        <p className='mb-1 font-thin'>
          Please explain me your code in an engaging manner, and it's ok to get
          passionate.
        </p>
      </div>
      <div className='p-12 pb-8 bg-slate-100 dark:bg-slate-600 rounded flex flex-col items-center transition-all duration-300'>
        <img
          className='w-80 h-80 object-cover rounded'
          src={image}
          alt='duck'
        />
        <p className='mt-8 text-xl font-thin'>Whenever you are ready!</p>
      </div>
      <div className='flex '>
        <button
          className='rounded mx-12 bg-slate-200 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400 p-2 mt-8 transition-all duration-300 justify-self-end'
          onClick={() => navigate('/')}
        >
          Select another duck
        </button>
        <button
          className='rounded mx-12 bg-slate-200 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400 p-2 mt-8 transition-all duration-300 justify-self-end'
          onClick={() => navigate('/showshibas')}
        >
          I need a break! Help me relax.
        </button>
      </div>
    </div>
  );
};

export default DebuggingDuck;
