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
    // How to sync the toggle with system pref?
    // Styling for a more stylish toggle -> className="ring-1 ring-stone-400/25 rounded-md p-2 flex items-center justify-center"
    <>
      <Toggle.Root
        aria-label="Toggle DarkMode"
        // className="group hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA4 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black text-black"
        className="w-8 h-8 bg-stone-50 dark:bg-stone-950 flex items-center justify-center rounded hover:bg-stone-200 dark:hover:bg-stone-800"
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
