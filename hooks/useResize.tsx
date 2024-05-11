import { useEffect, useState } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const debounce = (func: () => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 200); // Adjust debounce delay as needed

    const getSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    getSize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [width, height];
};

export default useResize;
