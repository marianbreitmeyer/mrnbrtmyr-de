'use client';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, Link2Icon } from '@radix-ui/react-icons';

const Modal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="w-fit transition-all duration-150 ease-in-out py-1 px-4 group-hover:scale-[120%] hover:ring-stone-400 hover:dark:ring-stone-600 ring-1 ring-stone-200 dark:ring-stone-800 rounded-full text-stone-400 dark:text-stone-600 flex items-center gap-x-2 text-xs">
        More
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-full max-w-full h-[80vh] w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-strong">More Information</Dialog.Title>
        <Dialog.Description className="text-moderate">
          Make changes to your profile here. Click save when you are done.
        </Dialog.Description>
        <p className="text-subtle"></p>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="text-moderate">Close</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="text-moderate" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
