import EducationEntry from './EducationEntry';

const SectionEducation = () => (
  <section
    className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700"
    id="experience"
  >
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-4 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <EducationEntry
          date="2023"
          title="Meta Front-End Developer"
          subtitle="Professional Certificate"
          href="https://www.coursera.org/account/accomplishments/professional-cert/ZZN3FBUDRX8Y"
        />
        <EducationEntry
          date="2022 – 2023"
          title="NN/g UX Certification"
          subtitle="UX Management Specialty"
          href="https://www.nngroup.com/ux-certification/people/"
        />
      </div>
      <div className="col-span-8 md:col-span-4 gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <EducationEntry
          date="2014 – 2015"
          title="MA Interaction Design"
          subtitle="HAWK Hildesheim"
        />
        <EducationEntry
          date="2010 – 2014"
          title="BA Gestlatung, Bachelor of Arts"
          subtitle="HAWK Hildesheim"
        />
        <EducationEntry
          date="2007 – 2010"
          title="Apprenticeship as a Media Designer for Digital and Print, Technical Specialization"
          subtitle="IHK Hannover"
        />
      </div>
    </div>
  </section>
);

export default SectionEducation;
