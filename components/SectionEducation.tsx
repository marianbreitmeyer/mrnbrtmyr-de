import Section from '@/components/Section';
import Milestone from './Milestone';

const SectionEducation = () => (
  <Section title="Education">
    <Milestone
      employer={{ date: '2023', title: '' }}
      roles={[
        {
          title: 'Meta Front-End Developer ',
          date: 'Professional Certificate',
        },
      ]}
      description="Learned the basics."
    />
  </Section>
);

export default SectionEducation;
