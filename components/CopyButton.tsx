'use client';
import Action from '@/components/Action';
import * as Toast from '@radix-ui/react-toast';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Icon from '@/components/Icon';

const CopyButton = () => {
  let [toasts, setToasts] = useState<
    { id: string; message: string; success: boolean }[]
  >([]);

  const copyToClipboard = async ({
    textToCopy,
    toastMessage,
  }: {
    textToCopy: string;
    toastMessage: string;
  }) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setToasts([
        ...toasts,
        {
          id: window.crypto.randomUUID(),
          message: toastMessage,
          success: true,
        },
      ]);
    } catch (error) {
      setToasts([
        ...toasts,
        {
          id: window.crypto.randomUUID(),
          message: 'Failed to copy.',
          success: false,
        },
      ]);
    }
  };

  return (
    <>
      <Action
        as="button"
        onClick={() =>
          copyToClipboard({
            textToCopy: 'hi@marianbreitmeyer.de',
            toastMessage: 'E-Mail copied to clipboard.',
          })
        }
        icon={{ variant: 'clipboard' }}
      >{`hi@marianbreitmeyer.de`}</Action>

      <Toast.Provider>
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <Toast.Root
              key={toast.id}
              duration={5000}
              onOpenChange={() => {
                setToasts(toasts.filter((t) => t.id !== toast.id));
              }}
              asChild
              forceMount
            >
              <motion.li
                className="bg-stone-800 ring-1 ring-stone-600 rounded py-2 px-4 text-stone-200 text-sm font-medium flex gap-x-2 items-center"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{
                  opacity: 0,
                  zIndex: -1,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                layout
              >
                <Toast.Title />
                <Toast.Description>{toast.message}</Toast.Description>
                {toast.success ? (
                  <Icon variant="success" />
                ) : (
                  <Icon variant="error" />
                )}
              </motion.li>
            </Toast.Root>
          ))}
        </AnimatePresence>
        <Toast.Viewport className="fixed bottom-4 md:bottom-8 right-4 md:right-8 flex flex-col gap-y-2 z-50" />
      </Toast.Provider>
    </>
  );
};

export default CopyButton;
