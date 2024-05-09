import { cn } from '@/utils/cn';

const TextBlock = ({
  className,
  title,
  subtitle,
  copy,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  copy?: string;
}) => (
  <div
    className={cn(
      'flex flex-col gap-y-3 md:gap-y-6 text-sm leading-relaxed text-stone-600 dark:text-stone-400 pr-6 md:pr-12',
      className
    )}
  >
    {(title || subtitle) && (
      <div className="flex flex-col gap-y-1 md:gap-y-2">
        {title && <h3 className="font-semibold">{title}</h3>}
        {subtitle && <h4 className="">{subtitle}</h4>}
      </div>
    )}

   {copy && <p className="whitespace-pre-line">{copy}</p>}
  </div>
);

export default TextBlock;
