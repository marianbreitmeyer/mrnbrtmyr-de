const SectionIntro = () => (
  <section className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-600">
    <div className="grid grid-cols-8 wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-600 py-20 md:py-24 px-6 md:px-10">
      <div className="col-span-6 col-start-2  flex flex-col gap-y-6 md:gap-y-10">
        <h1 className="text-[2.5rem] leading-[3.25rem] font-serif text-stone-800 dark:text-stone-600">
          Crafting human-centered digital solutions for over a decade. Dedicated
          to simplifying complexity and designing intuitive systems.
        </h1>
        <h2 className="text-lg text-stone-600 dark:text-stone-400">
          Even though I consider myself a designer, I have found code to be the
          best tool for translating my ideas into reality. I excel at bridging
          the gap between design and development, ensuring the creation of
          delightful and ethical solutions to provide value to both users and
          businesses.
        </h2>
      </div>
    </div>
  </section>
);

export default SectionIntro;
