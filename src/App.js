import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Register,
  AddDuck,
  DebuggingDuck,
  ShowShibas,
} from './pages';
import { NavBar, Footer } from './components';

const user = {
  firstName: 'Lilian',
  lastName: 'Forger',
  email: '',
  password: '',
};

const ducks = [
  {
    id: 1,
    name: 'Dixie',
    image:
      'https://i0.wp.com/www.travelweek.ca/wp-content/uploads/2017/05/05.30_RubberDucks-1.jpg?w=673&ssl=1',
  },
  {
    id: 2,
    name: 'Albert',
    image:
      'https://www.tradeinn.com/f/13921/139213799/numskul%E2%80%A6-zukunft-doctor-brown-tubbz-rubber-duck-figur.jpg',
  },
];

const App = () => {
  return (
    <div className='dark:bg-slate-700 h-screen'>
      <NavBar />
      <Routes>
        <Route index element={<Home user={user} ducks={ducks} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addduck' element={<AddDuck />} />
        <Route path='/showshibas' element={<ShowShibas />} />
        <Route
          path='/rubber-duck/:id'
          element={<DebuggingDuck user={user} ducks={ducks} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
