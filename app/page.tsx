import ExperienceDescription from '@/components/ExperienceDescription';
import ExperienceEntry from '@/components/ExperienceEntry';

export default function Home() {
  return (
    <main className="w-full">
      <section className="my-14 text-sm">
        <h1 className="text-2xl font-serif">
          Crafting <i>human-centered</i> software, mobile apps, and web
          experiences for more than a decade.
        </h1>
      </section>
      <section className="my-14 text-sm">
        <h3 className="mb-6 font-semibold">Experience</h3>
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
            description="Learned the basics."
          />
        </div>
      </section>
      <ExperienceDescription />
    </main>
  );
}
