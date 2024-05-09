import { cn } from '@/utils/cn';
import Action from '@/components/Action';

const EducationEntry = ({
  date,
  title,
  subtitle,
  href,
  className,
}: {
  date: string;
  title: string;
  subtitle?: string;
  href?: string;
  className?: string;
}) => (
  <div
    className={cn(
      'flex flex-col md:flex-row gap-x-2 md:gap-x-4 text-sm',
      className
    )}
  >
    <p className="text-stone-400 dark:stone-text-600 font-mono md:min-w-32">
      {date}
    </p>
    <div className="flex flex-col gap-y-1">
      {href ? (
        <Action
          as="external"
          href={href}
          icon={{ variant: 'arrow-right-top' }}
          className="text-stone-600 dark:stone-text-400"
        >
          {title}
        </Action>
      ) : (
        <h4 className="text-stone-600 dark:stone-text-400">{title}</h4>
      )}
      {subtitle && (
        <p className="text-stone-400 dark:stone-text-600">{subtitle}</p>
      )}
    </div>
  </div>
);

export default EducationEntry;
