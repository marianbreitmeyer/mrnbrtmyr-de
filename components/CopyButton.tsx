'use client';
import Action from '@/components/Action';
import * as Toast from '@radix-ui/react-toast';
import { useState } from 'react';

const CopyButton = () => {
  let [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);

  return (
    <>
      <Action
        as="button"
        onClick={() =>
          setToasts([
            ...toasts,
            { id: window.crypto.randomUUID(), message: 'All set and done!' },
          ])
        }
        icon={{ variant: 'clipboard' }}
      >{`hi@marianbreitmeyer.de`}</Action>

      <Toast.Provider>
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            duration={3000}
            className="bg-stone-800 ring-1 ring-stone-600 rounded py-2 px-4 text-stone-200 text-sm font-medium"
            asChild
          >
            <li>
              <Toast.Title />
              <Toast.Description>{toast.message}</Toast.Description>
              <Toast.Close>X</Toast.Close>
            </li>
          </Toast.Root>
        ))}
        <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col-reverse gap-y-4" />
      </Toast.Provider>
    </>
  );
};

export default CopyButton;
