import clsx from 'clsx';

type WordProps = {
  content: string;
  themed?: boolean;
  bg?: boolean;
  bottom?: boolean;
};

const Word: React.FC<WordProps> = ({
  content,
  bg = true,
  bottom = false,
  themed = true,
}) => (
  <div
    className={clsx(
      bottom ? 'bottom-0' : 'top-0',
      'absolute left-0 w-full h-full pointer-events-none overflow-hidden'
    )}
  >
    {' '}
    <p
      className={clsx(
        'text-[10rem] leading-[10rem] whitespace-nowrap -z-20 font-serif font-semibold absolute left-0 w-fit -translate-x-4',
        themed ? 'text-white dark:text-stone-950' : 'text-white/10',
        bottom ? 'bottom-0 translate-y-8' : 'top-0 -translate-y-6',
        bg &&
          'before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-r before:from-stone-100/80 via-transparent before:to-transparent before:dark:from-stone-900'
      )}
    >
      {content}
    </p>
  </div>
);

export default Word;
