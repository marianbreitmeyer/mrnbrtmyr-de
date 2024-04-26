import { ReactNode } from 'react';
import VisualGrid from '@/components/VisualGrid';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="my-12 text-sm flex flex-col gap-y-10 wrapper">
    <h3 className="relative font-semibold text-stone-400 dark:text-stone-600 before:absolute before:h-full before:bg-gradient-to-r before:to-transparent before:from-stone-200 before:dark:from-stone-800 before:w-4 before:md:w-8 before:-left-12 md:before:-left-16">
      {title}
    </h3>
    {children}
    <VisualGrid />
  </section>
);

export default Section;
