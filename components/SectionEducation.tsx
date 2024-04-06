import Section from '@/components/Section';
import Milestone from './Milestone';

const SectionEducation = () => (
  <Section title="Education">
    <Milestone
      employer={{ date: '2023', title: '' }}
      roles={[
        {
          title: 'Meta Front-End Developer',
          date: 'Professional Certificate',
        },
      ]}
      description="Learned the basics."
    />
    <Milestone
      employer={{ date: '2022 – 2023', title: '' }}
      roles={[
        {
          title: 'NN/g UX Certification',
          date: 'UX Management Specialty',
        },
      ]}
      description="Learned the basics."
    />
    <Milestone
      employer={{ date: '2014 – 2015', title: '' }}
      roles={[
        {
          title: 'MA Interaction Design',
          date: 'HAWK Hildesheim',
        },
      ]}
      description="Learned the basics."
    />
    <Milestone
      employer={{ date: '2010 – 2014', title: '' }}
      roles={[
        {
          title: 'BA Interaction Design, Bachelor of Arts',
          date: 'HAWK Hildesheim',
        },
      ]}
      description="Learned the basics."
    />
    <Milestone
      employer={{ date: '2007 – 2010', title: '' }}
      roles={[
        {
          title:
            'Apprenticeship as a Media Designer for Digital and Print, IHK Hannover',
          date: 'Technical specialization',
        },
      ]}
      description="Learned the basics."
    />
  </Section>
);

export default SectionEducation;
