'use client';
import { cn } from '@/utils/cn';
import * as Avatar from '@radix-ui/react-avatar';
import Status from '@/components/Status';

const MyAvatar = ({ className }: { className: string }) => (
  <div className="flex flex-col">
    <Status className="ml-6 -mb-2 z-40" />

    <Avatar.Root
      className={cn(
        'bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle',
        className
      )}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="avatar.jpg"
        alt="Marian Breitmeyer"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        MB
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default MyAvatar;
