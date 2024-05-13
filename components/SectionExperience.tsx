import TextBlock from '@/components/TextBlock';
import JobHeader from '@/components/JobHeader';
import RoleHeader from '@/components/RoleHeader';
import LogoStrip from '@/components/LogoStrip';
import Picture from '@/components/Picture';
import Carousel from '@/components/Carousel';

const SectionExperience = () => (
  <>
    <PartLichtblick />
    <PartMutabor />
    <PartDeepblue />
    <PartConvoy />
  </>
);
export default SectionExperience;

const PartLichtblick = () => (
  <section className="w-full h-auto">
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 sticky top-0 md:block p-6 md:p-10 min-h-full bg-stone-100 dark:bg-stone-900 md:bg-transparent md:dark:bg-transparent">
        <JobHeader
          date={'2020 – Present'}
          employer="LichtBlick SE"
          href="https://www.lichtblick.de"
        />
      </div>
      <div className="col-span-8 md:col-span-5  gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <RoleHeader
            date={'since 2022'}
            role={'Senior Manager Digital Product Design'}
          />
          <RoleHeader
            date={'2020 – 2022'}
            role={'Senior User Interface Designer'}
          />
        </div>
        <TextBlock
          copy={`LichtBlick SE is the largest independent green energy supplier in Germany, renowned for its commitment to sustainable practices. The company specializes in offering eco-friendly electricity, solar, and gas solutions to a diverse range of private and corporate customers. They also offer a range of digital touchpoints, such as e-commerce websites, web customer portals, customer mobile apps, an app for solar installers, and more.
          
          I began my journey at LichtBlick as the first internal UI Design hire and swiftly transitioned into a Design Manager role, which remained partially hands-on. My responsibilities spanned from Design Operations to leading digital design and mentoring other team members.`}
        />
        <TextBlock
          title={'Design Operations'}
          subtitle={
            'Establishing Design Excellence and Cross-Functional Collaboration'
          }
          copy={`I worked on establishing a culture of design excellence and cross-functional collaboration within the organization. This included influencing the organizational structure to facilitate collaboration across product teams. Introducing rituals, meetings, and fostering a community of practice for digital product design. Also Advocacy for human-centered design was a key aspect of my role, which involved promoting User Research & Testing in collaboration with the Customer Insights Team.`}
        />
        <Picture altText="placeholder image" imageSrc="/placeholder.jpg" />

        <TextBlock
          title={'Laid the foundation for design'}
          copy={`In terms of foundational design framework, I developed guiding principles in partnership with the Product and Agile teams. Playbooks and rules were defined to streamline design processes, and a cohesive toolset, including custom Figma plugins by me, was implemented to support our design system. I also contributed to enhancing the LichtBlick Photon Design System for consistency and scalability.`}
        />
        <Picture altText="placeholder image" imageSrc="/placeholder.jpg" />

        <div className="flex flex-col gap-y-4 md:gap-y-6">
          <TextBlock
            title={'User Experience Design'}
            subtitle={'Hands-on Projects'}
            copy={`I participated in multiple ramp-up and MVP projects for both B2C and B2B sectors. I jumped into newly formed teams and assisted them in getting set up. Establishing the foundational structure and refining processes and onboarded new design interns, before I gradually faded back into my more overarching role.`}
          />
          <ol className="list-disc text-sm text-stone-600 dark:text-stone-400">
            <li>Redesigning the power to heat section and funnel</li>
            <li className="mt-2">
              Vision Building for the new B2B Customer Portal & ecosystem
            </li>
            <li className="mt-2">
              Conducting Department-spanning discoveries to improve customer
              support
            </li>
            <li className="mt-2">
              Laying the foundation for our energy as a service ecosystem
              including the “strom wallet”
            </li>
          </ol>
        </div>
        <Picture altText="placeholder image" imageSrc="/placeholder.jpg" />
      </div>
    </div>
  </section>
);

const PartMutabor = () => (
  <section className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700">
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 sticky top-0 md:block p-6 md:p-10 min-h-full bg-stone-100 dark:bg-stone-900 md:bg-transparent md:dark:bg-transparent">
        <JobHeader
          date={'2018 – 2020'}
          employer="Mutabor"
          href="https://www.mutabor.com"
        />
      </div>
      <div className="col-span-8 md:col-span-5  gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <RoleHeader
          role={'Senior Art Director Digital / Digital Product Designer'}
        />
        <TextBlock
          copy={`Mutabor is Germany's largest independent 360° design agency and brand consultancy, specializing in developing strategies to achieve a brand's target image. They provide services in design, technology, content, and brand development, supporting brands and companies in reaching the next level.

          Being one of the first designers in the new digital unit, I immersed myself in a variety of projects, actively contributing to the team's expansion. I leveraged a diverse skill set, spanning from UX/UI design to website programming and crafting custom tools like Sketch & Figma plugins. Working across diverse sectors including HealthTech, Sports, and Automotive, I collaborated with esteemed clients such as DFL, HealthAG, Migros, BayWa, Merck, VDA, and ADC. These projects varied from initial MVP developments to continuous platform enhancement and the creation of tailored standalone solutions, offering me a rapid accumulation of valuable experience.`}
        />
        <LogoStrip variant="mutabor" />
      </div>
      <Carousel>
        <Picture
          imageSrc="/mutabor/vodafone.png"
          altText="Vodafone App Design"
          className="rounded-lg bg-stone-200 dark:bg-stone-600"
        />
        <Picture
          imageSrc="/mutabor/adc.png"
          altText="ADC App & Website Design"
          className="rounded-lg bg-stone-200 dark:bg-stone-600"
        />
        <Picture
          imageSrc="/mutabor/migros-insieme.png"
          altText="Migros Insieme Webplatform Design"
          className="rounded-lg bg-stone-200 dark:bg-stone-600"
        />
        <Picture
          imageSrc="/mutabor/merck.png"
          altText="Merck Asset Generator Webapp Design"
          className="rounded-lg bg-stone-200 dark:bg-stone-600"
        />
        <Picture
          imageSrc="/mutabor/health-ag.png"
          altText="Health AG Webapp Design"
          className="rounded-lg bg-stone-200 dark:bg-stone-600"
        />
      </Carousel>
    </div>
  </section>
);

const PartDeepblue = () => (
  <section className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700">
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 sticky top-0 md:block p-6 md:p-10 min-h-full bg-stone-100 dark:bg-stone-900 md:bg-transparent md:dark:bg-transparent">
        <JobHeader
          date={'2016 – 2018'}
          employer="deepblue networks"
          href="https://www.db-n.com"
        />
      </div>
      <div className="col-span-8 md:col-span-5  gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <RoleHeader
            date={'2017 – 2018'}
            role={'Senior Art Director Digital / Interaction Designer'}
          />
          <RoleHeader
            date={'2016 – 2017'}
            role={'Art Director Digital / Interaction Designer'}
          />
        </div>
        <TextBlock
          copy={`Deepblue networks AG is a leading digital agency based in Germany, offering a wide range of services in digital marketing, branding, and communication. With a focus on innovation and creativity, Deepblue Networks AG helps clients navigate the digital landscape to enhance their online presence and reach their target audiences effectively.

          Throughout my time at deepblue, my main focus was on enhancing my skills in User Experience Design and broadening my knowledge in this domain. This pursuit led me to progress to Senior and Lead roles, where I managed native app projects for clients such as Migros, Ernsting's Family, Bosch, and ADC within integrated cross-functional product teams, overseeing feature development and maintenance tasks.`}
        />
        <LogoStrip variant="deepblue" />
        <Picture altText="placeholder image" imageSrc="/placeholder.jpg" />
      </div>
    </div>
  </section>
);

const PartConvoy = () => (
  <section
    className="w-full h-auto border-t-[1px] border-stone-200 dark:border-stone-700"
    id="experience"
  >
    <div className="wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8">
      <div className="col-span-8 md:col-span-3 sticky top-0 md:block p-6 md:p-10 min-h-full bg-stone-100 dark:bg-stone-900 md:bg-transparent md:dark:bg-transparent">
        <JobHeader
          date={'2015 – 2016'}
          employer="convoy interactive"
          href="http://convoyinteractive.com/"
        />
      </div>
      <div className="col-span-8 md:col-span-5  gap-y-6 md:gap-y-10 flex flex-col p-6 md:p-10">
        <RoleHeader role={'Design Engineer'} />{' '}
        <TextBlock
          copy={`Convoy Interactive is a dynamic digital agency known for its expertise in creating engaging and interactive digital experiences. With a strong focus on innovation and user-centric design, Convoy Interactive collaborates with clients to develop cutting-edge solutions that drive engagement and deliver impactful results.

          This marked my initial professional experience in the digital sector. I held a hybrid role as a Design Engineer, which involved designing the user interface and developing the actual implementation for projects whose scope allowed for it. These were mostly corporate sites, custom landing pages, and small web apps. Since then, I have maintained a keen interest in software experimentation, even during phases when it played a lesser role in my job duties.`}
        />
      </div>
    </div>
  </section>
);
