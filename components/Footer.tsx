import ThemeSwitch from '@/components/ThemeSwitch';
import Word from '@/components/Word';

const Footer = () => (
  <footer className="mt-12 relative px-4 md:px-8">
    <div className="wrapper flex items-center justify-between">
      <p className="text-sm text-white">Tiredness is a lifestyle feature.</p>
      <ThemeSwitch />
    </div>
    <Word
      content={'Marian Breitmeyer'}
      bg={false}
      bottom={true}
      themed={false}
    />

    <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-teal-200 to-teal-600 -z-40"></div>
  </footer>
);

export default Footer;
