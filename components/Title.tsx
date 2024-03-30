'use client';

import { useState } from 'react';
import useInterval from '@/hooks/useIntervall';

const Title = () => {
  let [role, setRole] = useState(false);

  useInterval(() => {
    setRole(!role);
  }, 5000);

  return (
    <>
      <h3 className="text-base text-stone-800 dark:text-stone-200">
        Marian Breitmeyer
      </h3>
      <p className="text-base text-stone-400 dark:text-stone-400">
        {role ? '5 seconds has passed!' : 'The timer is running…'}
      </p>
    </>
  );
};

export default Title;
