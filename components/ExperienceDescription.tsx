'use client';

import * as Collapsible from '@radix-ui/react-collapsible';
import { ReactNode, useState } from 'react';
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';

type ExperienceDescriptionProps = {
  children?: ReactNode;
};

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible.Root className="w-[300px]" open={open} onOpenChange={setOpen}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          className="text-violet11 text-[15px] leading-[25px]"
          style={{ color: 'white' }}
        >
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black text-black">
            {open ? <CaretUpIcon /> : <CaretDownIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute"
            exit={'exit'}
            animate={'animate'}
            initial={'initial'}
            variants={variants}
            key="content"
          >
            <Collapsible.Content forceMount>
              <p>
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </Collapsible.Content>
          </motion.div>
        )}
      </AnimatePresence>
    </Collapsible.Root>
  );
};

export default ExperienceDescription;

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

const ContentLichtblick = () => {
  return (
    <>
      <p>LichtBlick Content goes here.</p>
    </>
  );
};

const ContentMutabor = () => {
  return (
    <>
      <p>Mutabor Content goes here.</p>
    </>
  );
};

const ContentDeepblue = () => {
  return (
    <>
      <p>Deepblue networks Content goes here.</p>
    </>
  );
};

const ContentConvoy = () => {
  return (
    <>
      <p>Convoy interactive Content goes here.</p>
    </>
  );
};
