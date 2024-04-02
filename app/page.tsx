import SectionContact from '@/components/SectionContact';
import SectionEducation from '@/components/SectionEducation';
import SectionExperience from '@/components/SectionExperience';
import SectionIntro from '@/components/SectionIntro';
import Header from '@/components/Header';
import SectionAbout from '@/components/SectionAbout';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <SectionIntro />
      <SectionExperience />
      <SectionEducation />
      <SectionContact />
      <SectionAbout />
    </main>
  );
}
