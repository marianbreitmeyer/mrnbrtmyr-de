import VisualGrid from '@/components/VisualGrid';

const SectionIntro = () => (
  <section className="my-14">
    <div className="wrapper bg-white/40 dark:bg-stone-950/60 h-padding">
      <h1 className="text-5xl leading-[3.25rem] font-serif font-semibold">
        Crafting polished & human-centered software, mobile apps, and web
        experiences for more than a decade.
      </h1>
      <VisualGrid bottomLine={true} />
    </div>
  </section>
);

export default SectionIntro;
