'use client';

import { cn } from '@/utils/cn';
import * as Avatar from '@radix-ui/react-avatar';

const MyAvatar = ({ className }: { className?: string }) => (
  <div className="flex flex-col">
    <Avatar.Root
      className={cn(
        'bg-stone-950 inline-flex h-10 w-10 md:h-12 md:w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle',
        className
      )}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="avatar.jpg"
        alt="Marian Breitmeyer"
      />
      <Avatar.Fallback
        className="text-stone-800 leading-1 flex h-full w-full items-center justify-center bg-stone-200"
        delayMs={600}
      >
        MB
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default MyAvatar;
