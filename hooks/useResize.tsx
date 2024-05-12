import { useEffect, useState } from 'react';

const useResize = () => {
  const isClient = typeof window === 'object'; // Check if window object is available

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

  const debounce = (func: () => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  useEffect(() => {
    if (!isClient) return; // Exit early if running on the server

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
  }, [isClient]);

  return [width, height];
};

export default useResize;
