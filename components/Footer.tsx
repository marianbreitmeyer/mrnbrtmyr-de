import ThemeSwitch from '@/components/ThemeSwitch';

const Footer = () => (
  <footer className="flex items-center justify-between mt-12">
    <p className="text-xs text-subtle">This a lil footer.</p>
    <ThemeSwitch />
  </footer>
);

export default Footer;
