'use client';

import { useState } from 'react';
import useInterval from '@/hooks/useIntervall';
import { motion, AnimatePresence } from 'framer-motion';
import MyAvatar from '@/components/MyAvatar';
import StatusPill from '@/components/StatusPill';
import Navigation from '@/components/Navigation';

const Header = () => {
  let [role, setRole] = useState(false);

  useInterval(() => {
    setRole(!role);
  }, 5000);

  return (
    <header className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-600 py-20 md:py-24 px-6 md:px-10 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-x-3">
        <MyAvatar />
        <div className="flex flex-col">
          <h3 className="text-base text-stone-800 dark:text-stone-200 relative">
            Marian Breitmeyer
            <StatusPill className="absolute top-0 -translate-y-2/4 -right-1 translate-x-full" />
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
        </div>
      </div>
      <Navigation />
    </header>
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
