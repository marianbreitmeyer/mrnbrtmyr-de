import { ReactNode } from 'react';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="my-14 text-sm">
    <h3 className="mb-6 font-semibold text-stone-400 dark:text-stone-600">
      {title}
    </h3>
    {children}
  </section>
);

export default Section;
