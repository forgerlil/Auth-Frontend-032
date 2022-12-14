import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

const Footer = () => {
  const [mode, toggleMode] = useDarkMode();

  return (
    <div className='fixed bottom-0 w-full text-center bg-slate-200 dark:bg-slate-800 py-4'>
      2022 © The Rubber Duck Coalition
      <button
        type='button'
        onClick={toggleMode}
        className='fixed z-10 bottom-0 right-0 px-5 py-5 rounded-l-full bg-slate-300 dark:text-white dark:bg-slate-900'
      >
        {mode === 'dark' ? <BsFillSunFill /> : <BsMoon />}
      </button>
    </div>
  );
};

export default Footer;
