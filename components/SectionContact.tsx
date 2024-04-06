import Section from '@/components/Section';
import Milestone from '@/components/Milestone';

const SectionContact = () => (
  <Section title="Contact">
    <Milestone
      employer={{ date: 'Twitter', title: '' }}
      roles={[
        {
          title: '@marianbreitmeyer',
        },
      ]}
    />
    <Milestone
      employer={{ date: 'LinkedIn', title: '' }}
      roles={[
        {
          title: 'marianbreitmeyer',
        },
      ]}
    />
    <Milestone
      employer={{ date: 'E-Mail', title: '' }}
      roles={[
        {
          title: 'info@marianbreitmeyer.de',
        },
      ]}
    />
    <Milestone
      employer={{ date: 'GitHub', title: '' }}
      roles={[
        {
          title: 'marianbreitmeyer',
        },
      ]}
    />
  </Section>
);

export default SectionContact;
