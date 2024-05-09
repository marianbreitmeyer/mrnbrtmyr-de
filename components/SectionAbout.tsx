const SectionAbout = () => (
  <section
    className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700"
    id="experience"
  >
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-4 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <h5>Who I am</h5>
      </div>
      <div className="col-span-8 md:col-span-4 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <p>{`I’ve been crafting human-centered software, mobile apps and web experiences for over a decade. I am dedicated to simplifying complexity and designing intuitive systems. Even though I consider myself a designer, I have found code to be the best tool for translating my ideas into reality. I excel on bridging the gap between design and development, ensuring the creation of delightful and ethical solutions to provide value to both users and businesses.

I have designed user interfaces and experiences, mapped out and implemented roadmaps and features, led cross-functional teams, mentored other designers, and fostered the growth of design teams. All within agency and internal corporate environments.

I am currently seeking new opportunities, so if you believe we would be a good fit, please reach out!`}</p>
      </div>
    </div>
  </section>
);

export default SectionAbout;
