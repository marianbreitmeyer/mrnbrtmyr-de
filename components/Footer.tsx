import ThemeSwitch from '@/components/ThemeSwitch';

const Footer = () => (
  <footer className="flex items-center justify-between mt-12">
    <p className="text-xs text-subtle">Tiredness is a lifestyle feature.</p>
    <ThemeSwitch />
  </footer>
);

export default Footer;
