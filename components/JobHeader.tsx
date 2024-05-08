import { cn } from '@/utils/cn';
import Action from '@/components/Action';

const JobHeader = ({
  date,
  employer,
  href,
  className,
}: {
  date: string;
  employer: string;
  href: string;
  className?: string;
}) => (
  <div
    className={cn(
      'flex flex-row gap-x-2 md:gap-x-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400 sticky top-8',
      className
    )}
  >
    <p className="text-stone-400 dark:stone-text-600 font-mono">{date}</p>
    <Action
      as="external"
      href={href}
      icon={{ variant: 'arrow-right-top' }}
      className="text-stone-600 dark:stone-text-400"
    >
      {employer}
    </Action>
  </div>
);

export default JobHeader;
