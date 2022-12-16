import { RubberDuck } from '../components';
import { useAuthContext } from '../context/AuthContext';

const Home = ({ ducks }) => {
  const { user } = useAuthContext();
  return (
    <>
      <div className='w-full flex flex-col items-center mt-[-1px] dark:bg-slate-700 h-fit'>
        <div className='w-fit mt-28 p-4 flex flex-col items-center'>
          <h1 className='text-3xl font-semibold mb-8'>Rubber Duck Selector</h1>
          <h3 className='text-lg font-thin mb-12'>
            Here's a selection of Rubber Ducks, gathered in one place by all our
            users. May they assist you in your debugging journey.
          </h3>
          <hr className='w-1/3' />
          <div className='w-fit my-4 p-4 rounded flex flex-wrap justify-center'>
            {ducks.length ? (
              ducks.map((duck) => (
                <RubberDuck key={duck._id} {...user} {...duck} />
              ))
            ) : (
              <div className='text-xl font-thin'>
                No ducks to display yet. Where could they be?
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
