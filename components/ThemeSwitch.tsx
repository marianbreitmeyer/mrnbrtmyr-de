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
        className="transition-all duration-150 ease-in-out p-4 hover:bg-stone-600/20 bg-stone-600/0 rounded-md text-stone-600 hover:text-stone-400 flex items-center justify-around"
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
