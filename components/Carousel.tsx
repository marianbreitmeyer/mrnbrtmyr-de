'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

let images = [
  '/placeholder.jpg',
  '/mb.jpg',
  '/placeholder.jpg',
  '/mb.jpg',
  '/placeholder.jpg',
  '/mb.jpg',
];

const Carousel = () => {
  let [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.7 }}>
      <div className="h-full bg-black">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex"
              drag="x"
              dragConstraints={{
                left: ref.current?.clientWidth ? -ref.current.clientWidth : 0,
                right: 0,
              }}
              dragElastic={0.2}
              dragTransition={{ bounceDamping: 18 }}
              ref={ref}
            >
              {images.map((image) => (
                <img
                  key={image}
                  src={image}
                  className="aspect-[3/2] min-w-full object-cover pointer-events-none"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: 'none' }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index - 1)}
                >
                  {/* <ChevronLeftIcon className="h-6 w-6" /> */}
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: 'none' }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  {/* <ChevronRightIcon className="h-6 w-6" /> */}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Carousel;
