import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const bodyClassList = document.body.classList;

    enabled ? bodyClassList.add('dark') : bodyClassList.remove('dark');
  }, [enabled]);

  const toggleTheme = () => {
    setEnabled((prev) => !prev);
  };

  return [enabled ? 'dark' : 'light', toggleTheme];
};

export default useDarkMode;
