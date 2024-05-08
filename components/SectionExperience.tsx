import SectionHeader from '@/components/SectionHeader';
import TextBlock from '@/components/TextBlock';
import JobHeader from './JobHeader';

const SectionExperience = () => (
  <section className="w-full h-auto" id="experience">
    <SectionHeader title="Work Experience." subtitle="What I've done so far." />
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 py-6 md:py-10 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 sticky top-0 md:block p-6 md:p-10 min-h-full bg-stone-100 dark:bg-stone-900 md:bg-transparent md:dark:bg-transparent">
        <JobHeader
          date={'2020 – Present'}
          employer="LichtBlick SE"
          href="https://www.lichtblick.de"
        />
      </div>
      <div className="col-span-8 md:col-span-5  gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <TextBlock
          copy={`LichtBlick SE is the largest independent green energy supplier in Germany, renowned for its commitment to sustainable practices. The company specializes in offering eco-friendly electricity, solar, and gas solutions to a diverse range of private and corporate customers. They also offer a range of digital touchpoints, such as e-commerce websites, web customer portals, customer mobile apps, an app for solar installers, and more.
          
          I began my journey at LichtBlick as the first internal UI Design hire and swiftly transitioned into a Design Manager role, which remained partially hands-on. My responsibilities spanned from Design Operations to leading design, encompassing a role where I led and mentored the design team at LichtBlick.`}
        />
        <TextBlock
          title={'Design Operations'}
          subtitle={
            'Establishing Design Excellence and Cross-Functional Collaboration'
          }
          copy={`I worked on establishing a culture of design excellence and cross-functional collaboration within the organization. This included influencing the organizational structure to facilitate collaboration across product teams. Introducing rituals, meetings, and fostering a community of practice for digital product design. Also Advocacy for human-centered design was a key aspect of my role, which involved promoting User Research & Testing in collaboration with the Customer Insights Team.`}
        />
        <TextBlock
          title={'Laid the foundation for design'}
          copy={`In terms of foundational design framework, I developed guiding principles in partnership with the Product and Agile teams. Playbooks and rules were defined to streamline design processes, and a cohesive toolset, including custom Figma plugins by me, was implemented to support our design system. I also contributed to enhancing the LichtBlick Photon Design System for consistency and scalability.`}
        />
        <TextBlock
          title={'User Experience Design'}
          subtitle={'Hands-on Projects'}
          copy={`I participated in multiple ramp-up and MVP projects for both B2C and B2B sectors. I jumped into newly formed teams and assisted them in getting set up. Establishing the foundational structure and refining processes and onboarded new design interns, before I gradually faded back into my more overarching role.`}
        />
      </div>
    </div>
  </section>
);

export default SectionExperience;
