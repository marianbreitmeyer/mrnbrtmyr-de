import SectionContact from '@/components/SectionContact';
import SectionEducation from '@/components/SectionEducation';
import SectionExperience from '@/components/SectionExperience';
import SectionIntro from '@/components/SectionIntro';
import Header from '@/components/Header';
import SectionAbout from '@/components/SectionAbout';
import MyAvatar from '@/components/MyAvatar';

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-8 md:gap-16">
      <Header />
      <MyAvatar />
      <SectionIntro />
      <SectionExperience />
      <SectionEducation />
      <SectionContact />
      <SectionAbout />
    </main>
  );
}
