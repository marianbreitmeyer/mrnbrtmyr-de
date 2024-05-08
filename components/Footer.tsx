import ThemeSwitch from '@/components/ThemeSwitch';
import Link from 'next/link';
import GradientStrip from './GradientStrip';

const Footer = () => (
  <footer className="w-full h-auto bg-stone-800 dark:bg-stone-950 relative">
    <div className="wrapper-no-p flex flex-row items-center justify-between text-sm py-20 md:py-24 px-6 md:px-10">
      <p className="text-stone-200 dark:text-stone-400">
        Tiredness is a lifestyle feature.
      </p>
      <div className="flex flex-row items-center gap-x-6 md:gap-x-10 text-stone-600 dark:text-stone-600">
        <Link href="/imprint">Imprint</Link>
        <p>{`© 2024`}</p>
        <ThemeSwitch />
      </div>
    </div>
    <GradientStrip isOnTop />
  </footer>
);

export default Footer;
