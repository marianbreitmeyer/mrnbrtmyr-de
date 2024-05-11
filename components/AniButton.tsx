'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';

const AniButton = () => {
  let [copied, setCopied] = useState(false);
  let [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyToClipboard = ({ textToCopy }: { textToCopy: string }) => {
    if (isButtonDisabled) return;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        if (!copied) setCopied(true);
        setIsButtonDisabled(true);
        console.log('copied', copied);
        timerRef.current = setTimeout(() => {
          setCopied(false);
        }, 2500);
      })
      .catch((error) => {
        setCopied(false);
        setIsButtonDisabled(false);
      });
  };

  return (
    <button
      aria-label="Copy E-Mail adress"
      onClick={() => copyToClipboard({ textToCopy: 'hi@marianbreitmeyer.de' })}
      className="text-sm text-stone-600 dark:text-stone-400"
      disabled={isButtonDisabled}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="wrapper-a"
            className="flex flex-row gap-x-1 items-center text-start"
          >
            <motion.span
              key="copy"
              variants={variantsTextCheck}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {' '}
              Copied to clipboard.
            </motion.span>
            <motion.span
              key="check"
              variants={variantsIconCheck}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-teal-400"
            >
              <Icon variant="success" />
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="wrapper-b"
            className="flex flex-row gap-x-1 items-center text-start hover:opacity-60 transition-all duration-150 ease-in-out"
          >
            <motion.span
              key="mail"
              variants={variantsTextCopy}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {' '}
              hi@marianbreitmeyer.de
            </motion.span>
            <motion.span
              key="clipboard"
              variants={variantsIconCopy}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onAnimationComplete={(definition) => {
                if (definition === 'visible') setIsButtonDisabled(false);
              }}
            >
              <Icon variant="clipboard" />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AniButton;

const variantsIconCopy = {
  hidden: {
    opacity: 0,
    transition: { type: 'spring', duration: 0.4, bounce: 0 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', duration: 0.25, bounce: 0 },
  },
};
const variantsIconCheck = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: { type: 'spring', duration: 0.15, bounce: 0 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', duration: 0.4, bounce: 0.75, delay: 0.15 },
  },
};
const variantsTextCopy = {
  hidden: {
    opacity: 0,
    transition: { type: 'spring', duration: 0.4, bounce: 0 },
  },
  visible: {
    opacity: 1,
    transition: { type: 'spring', duration: 0.25, bounce: 0 },
  },
};

const variantsTextCheck = {
  hidden: {
    opacity: 0,
    transition: { type: 'spring', duration: 0.15, bounce: 0 },
  },
  visible: {
    opacity: 1,
    transition: { type: 'spring', duration: 0.4, bounce: 0 },
  },
};
