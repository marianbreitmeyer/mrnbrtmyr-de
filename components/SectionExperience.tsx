import Milestone from '@/components/MilestoneExperience';
import Section from '@/components/Section';

const SectionExperience = () => (
  <Section title="Work Experience">
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
      description="Did a lot of shit."
    />
    <Milestone
      employer={{ date: '2018 – 2020', title: 'Mutabor' }}
      roles={[
        {
          title: 'Senior Art Director Digital / Digital Product Designer',
        },
      ]}
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
      description="Learned the basics."
    />
    <Milestone
      employer={{ date: '2015 – 2016', title: 'convoy interactive' }}
      roles={[
        {
          title: 'Design Engineer',
        },
      ]}
      description="Learned the basics."
    />
  </Section>
);

export default SectionExperience;
