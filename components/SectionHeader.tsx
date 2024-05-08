import Corners from '@/components/Corners';

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <section className="w-full h-auto border-t-[1px] border-b-[1px] border-stone-200 dark:border-stone-700 z-10">
    <div className="wrapper-no-p text-lg text-stone-400 border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 py-20 md:py-24 px-6 md:px-10">
      <h2 className="inline-block font-semibold">{title}</h2>
      <h3 className="inline-block">{`\u00A0 ${subtitle}`}</h3>
      <div className="gradient-mask-r-50 text-[10rem] leading-[10rem] whitespace-nowrap -z-20 font-serif font-semibold absolute left-10 w-fit translate-x-6 text-white dark:text-stone-950 top-1/2 -translate-y-2/4">
        {title}
      </div>
      <Corners />
    </div>
  </section>
);

export default SectionHeader;
