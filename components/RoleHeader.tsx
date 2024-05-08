import { cn } from '@/utils/cn';

const RoleHeader = ({
  date,
  role,
  className,
}: {
  date?: string;
  role: string;
  className?: string;
}) => (
  <div className={cn('flex flex-row gap-x-2 md:gap-x-4 text-sm', className)}>
    <h4 className="text-stone-600 dark:stone-text-400">{role}</h4>
    {date && (
      <p className="text-stone-400 dark:stone-text-600 font-mono">{date}</p>
    )}
  </div>
);

export default RoleHeader;
