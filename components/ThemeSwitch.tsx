'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import * as Toggle from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (resolvedTheme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Toggle.Root
        aria-label="Toggle DarkMode"
        // className="group hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA4 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black text-black"
        className="transition-all duration-150 ease-in-out p-4 group-hover:scale-[120%] hover:ring-stone-400 hover:dark:ring-stone-600 ring-1 ring-stone-200 dark:ring-stone-800 rounded-md text-stone-400 dark:text-stone-600 flex items-center justify-around"
        onPressedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <AnimatePresence>
          {theme !== 'dark' ? (
            <motion.div
              className="absolute"
              exit={'exit'}
              animate={'animate'}
              initial={'initial'}
              variants={variants}
              key="sun"
            >
              <SunIcon />
            </motion.div>
          ) : (
            <motion.div
              className="absolute"
              exit={'exit'}
              animate={'animate'}
              initial={'initial'}
              variants={variants}
              key="moon"
            >
              <MoonIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </Toggle.Root>
    </>
  );
};

export default ThemeSwitch;

const variants = {
  exit: {
    opacity: 0,
    filter: 'blur(4px)',
    transition: { transition: 'spring', duration: 0.2 },
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', duration: 0.175, delay: 0.05 },
  },
};
