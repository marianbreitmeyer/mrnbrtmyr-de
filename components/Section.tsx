import { ReactNode } from 'react';
import VisualGrid from '@/components/VisualGrid';
import Word from '@/components/Word';

const Section = ({
  title,
  children,
  bottomLine,
}: {
  title: string;
  children: ReactNode;
  bottomLine?: boolean;
}) => (
  <section className="w-full h-auto bg-stone-200/20">
    <div className="text-sm flex flex-col gap-y-10 wrapper">
      <h3 className="relative font-semibold text-stone-400 dark:text-stone-600 before:absolute before:h-full before:bg-gradient-to-r before:to-transparent before:from-stone-200 before:dark:from-stone-800 before:w-8 before:md:w-16 before:left-0 px-20 md:px-24">
        {title}
      </h3>
      {children}
      <Word content={title} />
    </div>
  </section>
);

export default Section;
