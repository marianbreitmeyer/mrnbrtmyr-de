import Action from '@/components/Action';
import AniButton from '@/components/AniButton';

const SectionIntro = () => (
  <section className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700 overflow-x-hidden">
    <div className="grid grid-cols-8 wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 py-12 md:py-24 px-6 md:px-10">
      <div className="col-span-8 col-start-1 md:col-span-6 md:col-start-2  flex flex-col gap-y-6 md:gap-y-10">
        <h1 className="text-4xl leading-narrow md:text-[2.75rem] md:leading-[3.25rem] font-serif text-stone-800 dark:text-stone-200">
          Crafting human-centered digital solutions for over a decade. Dedicated
          to simplifying complexity and designing intuitive systems.
        </h1>
        <h2 className="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-normal">
          {`I consider myself a designer, but I've found code to be the best tool for translating my ideas into reality. Therefore I excel at bridging the gap
          between design and development, ensuring the creation of delightful
          and ethical solutions to provide value to both users and businesses.`}
        </h2>
        <div className="flex flex-row gap-x-3 md:gap-x-6">
          <Action
            as="external"
            href={'https://www.linkedin.com/in/marian-breitmeyer-62001b262/'}
            icon={{ variant: 'arrow-right-top' }}
          >
            LinkedIn
          </Action>
          <Action
            as="external"
            href={'https://read.cv/marianbreitmeyer'}
            icon={{ variant: 'arrow-right-top' }}
          >
            read.cv
          </Action>
          <AniButton />
        </div>
      </div>
    </div>
  </section>
);

export default SectionIntro;
