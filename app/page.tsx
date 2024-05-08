import SectionContact from '@/components/SectionContact';
import SectionEducation from '@/components/SectionEducation';
import SectionExperience from '@/components/SectionExperience';
import SectionIntro from '@/components/SectionIntro';
import Header from '@/components/Header';
import SectionAbout from '@/components/SectionAbout';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col">
        <SectionIntro />
        <SectionHeader
          title="Work Experience."
          subtitle="What I've done so far."
        />
        <SectionExperience />
        {/* <SectionEducation /> */}
        {/* <SectionContact /> */}
        {/* <SectionAbout /> */}
      </main>
    </>
  );
}
