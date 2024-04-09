import Section from '@/components/Section';
import Milestone from './MilestoneExperience';
import MilestoneEducation from './MilestoneEducation';

const SectionEducation = () => (
  <Section title="Education">
    <MilestoneEducation
      date="2023"
      role={{
        title: 'Meta Front-End Developer',
        subtitle: 'Professional Certificate',
      }}
      description="Learned the basics."
    />
    <MilestoneEducation
      date="2022 – 2023"
      role={{
        title: 'NN/g UX Certification',
        subtitle: 'UX Management Specialty',
      }}
      description="Learned the basics."
    />
    <MilestoneEducation
      date="2014 – 2015"
      role={{
        title: 'MA Interaction Design',
        subtitle: 'HAWK Hildesheim',
      }}
      description="Learned the basics."
    />
    <MilestoneEducation
      date="2010 – 2014"
      role={{
        title: 'BA Interaction Design, Bachelor of Arts',
        subtitle: 'HAWK Hildesheim',
      }}
      description="Learned the basics."
    />
    <MilestoneEducation
      date="2007 – 2010"
      role={{
        title: 'Apprenticeship as a Media Designer for Digital and Print',
        subtitle: 'IHK Hannover',
      }}
      description="Learned the basics."
    />
  </Section>
);

export default SectionEducation;
