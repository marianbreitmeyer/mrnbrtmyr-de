import { cn } from '@/utils/cn';

const Status = ({ className }: { className: string }) => (
  <div
    className={cn(
      'flex items-center py-0.5 pl-1.5 pr-2 w-fit gap-x-2 rounded-full bg-teal-200 dark:bg-teal-800 text-teal-600 dark:text-teal-200 text-[10px]',
      className
    )}
  >
    <p>Open for work</p>
    <div className="h-1 w-1 rounded-full bg-teal-600 dark:bg-teal-400 shadow-sm dark:shadow-teal-400 shadow-teal-600"></div>
  </div>
);

export default Status;
