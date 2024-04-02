'use client';

import { useState } from 'react';
import useInterval from '@/hooks/useIntervall';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  let [role, setRole] = useState(false);

  useInterval(() => {
    setRole(!role);
  }, 5000);

  return (
    <>
      <h3 className="text-base text-stone-800 dark:text-stone-200">
        Marian Breitmeyer
      </h3>
      <p className="text-base text-stone-400 dark:text-stone-400 h-8">
        <AnimatePresence>
          {role ? (
            <motion.span
              className="absolute"
              exit={'exit'}
              animate={'animate'}
              initial={'initial'}
              variants={variants}
              key="designer"
            >
              Digital Product Designer
            </motion.span>
          ) : (
            <motion.span
              className="absolute"
              exit={'exit'}
              animate={'animate'}
              initial={'initial'}
              variants={variants}
              key="engineer"
            >
              Design Engineer
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </>
  );
};

export default Header;

const variants = {
  exit: {
    scaleY: 0,
    opacity: 0,
    filter: 'blur(4px)',
    transition: { transition: 'spring', duration: 0.75 },
  },
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', duration: 0.35, delay: 0.25 },
  },
};
