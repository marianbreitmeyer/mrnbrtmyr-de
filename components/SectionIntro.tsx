import VisualGrid from '@/components/VisualGrid';

const SectionIntro = () => (
  <section className="my-14">
    <div className="wrapper bg-white/40 h-padding">
      <h1 className="text-5xl leading-[3.25rem] font-serif">
        Crafting polished & <i>human-centered</i> software, mobile apps, and web
        experiences for more than a decade.
      </h1>
      <VisualGrid bottomLine={true} />
    </div>
  </section>
);

export default SectionIntro;
