import TextBlock from '@/components/TextBlock';
import Action from '@/components/Action';
import Picture from '@/components/Picture';
import StatusPill from '@/components/StatusPill';
import AniButton from '@/components//AniButton';

const SectionAbout = () => (
  <>
    <PartAbout />
    <PartInterests />
    <PartNow />
  </>
);

export default SectionAbout;

const PartAbout = () => (
  <section
    className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700 overflow-x-hidden"
    id="experience"
  >
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <h5 className="text-stone-400 dark:stone-text-600 ">Who I am.</h5>
      </div>
      <div className="col-span-8 md:col-span-5 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <TextBlock
          copy={`I’ve been crafting human-centered software, mobile apps and web experiences for over a decade. I am dedicated to simplifying complexity and designing intuitive systems. 
          
          I consider myself a designer, but I've found code to be the best tool for translating my ideas into reality. Therefore I excel at bridging the gap between design and development, ensuring the creation of delightful and ethical solutions to provide value to both users and businesses.

I've designed user interfaces and experiences, mapped out and implemented roadmaps and features, led cross-functional teams, mentored other designers, and fostered the growth of design teams. All within agency and internal corporate environments.`}
        />
        <TextBlock
          title={`Currently seeking new opportunities, so if you believe we would be a good fit, please reach out!`}
        />
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 md:gap-x-6">
          <Action
            as="external"
            href={'https://read.cv/marianbreitmeyer'}
            icon={{ variant: 'arrow-right-top' }}
          >
            read.cv
          </Action>
          <AniButton className="w-44" />
          <div className="flex flex-row gap-x-6 md:gap-x-10 mt-2 md:mt-0">
            <Action
              as="external"
              href={'https://www.linkedin.com/in/marian-breitmeyer-62001b262/'}
              icon={{ variant: 'linkedIn' }}
            />
            <Action
              as="external"
              href={'https://twitter.com/m_breitmeyer'}
              icon={{ variant: 'twitter' }}
            />
            <Action
              as="external"
              href={'https://github.com/marianbreitmeyer'}
              icon={{ variant: 'github' }}
            />
          </div>
        </div>
        <div className="relative">
          <Picture altText="Portrait of Marian" imageSrc="/mb.jpg" />
          <StatusPill className="absolute right-4 top-4" />
        </div>
      </div>
    </div>
  </section>
);

const PartInterests = () => {
  return (
    <section className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700">
      <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
        <div className="col-span-8 md:col-span-3 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
          <h5 className="text-stone-400 dark:stone-text-600 ">
            What i’m interested in.
          </h5>
        </div>
        <div className="col-span-8 md:col-span-5 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
          <ol className="list-disc text-sm text-stone-600 dark:text-stone-400">
            <li>
              {`I’m really into watching "Making of" documentaries for any creative endeavor, like `}{' '}
              <Action
                as="external"
                href="https://www.https://arstechnica.com/video/series/war-stories.com"
                icon={{ variant: 'arrow-right-top' }}
                className="text-stone-600 dark:stone-text-400 w-fit border-b-[1px] border-stone-600 dark:border-stone-400"
              >
                Ars Technica War Stories.
              </Action>
              {`The whole idea of constraints sparking creativity always keeps me hooked`}
            </li>
            <li className="mt-2">{`Exploring new things around the theme of motion is my jam. I've started learning some wizard skating moves and gravel-bike my way around hamburg`}</li>
            <li className="mt-2">{`Fascinated by systems of any kind, and being a dad, I love building awesome Lego worlds with my kids`}</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

const PartNow = () => (
  <section
    className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700"
    id="experience"
  >
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <h5 className="text-stone-400 dark:stone-text-600 ">Now</h5>
      </div>
      <div className="col-span-8 md:col-span-5 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <TextBlock
          copy={`At the moment, I am focused on expanding my knowledge of web development to build my ideas independently. Narrowing the design execution gap to become more of a builder. 
            Tinkering around with software to solve my own problems is really satisfying, although sometimes frustrating ;)`}
        />
      </div>
    </div>
  </section>
);
