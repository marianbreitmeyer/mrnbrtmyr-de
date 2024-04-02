import Milestone from '@/components/Milestone';
import Section from '@/components/Section';

const SectionExperience = () => (
  <Section title="Experience">
    <div className="flex flex-col gap-y-10">
      <Milestone
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
      <Milestone
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
      <Milestone
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
      <Milestone
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
  </Section>
);

export default SectionExperience;
