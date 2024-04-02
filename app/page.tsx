import ExperienceDescription from '@/components/ExperienceDescription';
import ExperienceEntry from '@/components/ExperienceEntry';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="w-full">
      <Title />
      <section className="my-14">
        <h1 className="text-2xl font-serif max-w-xl">
          Crafting <i>human-centered</i> software, mobile apps, and web
          experiences for more than a decade.
        </h1>
      </section>
      <section className="my-14 text-sm">
        <h3 className="mb-6 font-semibold text-stone-400 dark:text-stone-600">
          Experience
        </h3>
        <div className="flex flex-col gap-y-10">
          <ExperienceEntry
            employer={{ date: '2020 – Present', title: 'LichtBlick SE' }}
            roles={[
              {
                date: 'since 2022',
                title: 'Senior Manager Digital Product Design',
              },
              {
                date: '2020 - 2022',
                title: 'Senior UI Designer',
              },
            ]}
            logo="lichtblick"
            description="Did a lot of shit."
          />
          <ExperienceEntry
            employer={{ date: '2018 – 2020', title: 'Mutabor' }}
            roles={[
              {
                // date: '2018 - 2020',
                title: 'Senior Art Director Digital / Digital Product Designer',
              },
            ]}
            logo="mutabor"
            description="Did a lot more shit. Lorem ipsum dolor sit amet consecteuer und DesignOps."
          />
          <ExperienceEntry
            employer={{ date: '2016 – 2018', title: 'deepblue networks' }}
            roles={[
              {
                date: '2017 - 2018',
                title: 'Senior Art Director Digital / Interaction Designer',
              },
              {
                date: '2016 - 2017',
                title: 'Art Director Digital / Interaction Designer',
              },
            ]}
            logo="dbn"
            description="Learned the basics."
          />
          <ExperienceEntry
            employer={{ date: '2016 – 2017', title: 'convoy interactive' }}
            roles={[
              {
                // date: '2016 - 2017',
                title: 'Design Engineer',
              },
            ]}
            logo="convoy"
            description="Learned the basics."
          />
        </div>
      </section>
      <ExperienceDescription />
    </main>
  );
}
