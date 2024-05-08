import { cn } from '@/utils/cn';

const StatusPill = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'flex items-center py-0.5 pl-2 pr-2.5 w-fit gap-x-2 rounded-full bg-teal-300 dark:bg-teal-800 text-teal-800 dark:text-teal-300 z-20 text-[11px]',
      className
    )}
  >
    <p className="leading-[18px]">open for work</p>
    <div className="relative h-1.5 w-1.5 rounded-full bg-teal-400 dark:bg-teal-400">
      <div className="absolute left-[1px] top-[1px] h-1 w-1 rounded-full bg-teal-600 dark:bg-teal-400"></div>
    </div>
  </div>
);

export default StatusPill;
