import SectionContact from '@/components/SectionContact';
import SectionEducation from '@/components/SectionEducation';
import SectionExperience from '@/components/SectionExperience';
import SectionIntro from '@/components/SectionIntro';
import Header from '@/components/Header';
import SectionAbout from '@/components/SectionAbout';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col gap-2 md:gap-4">
        <SectionIntro />
        <SectionExperience />
        <SectionEducation />
        <SectionContact />
        <SectionAbout />
      </main>
    </>
  );
}
