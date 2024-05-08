import Link from 'next/link';

const Navigation = () => (
  <nav className="text-sm text-stone-600 dark:text-stone-400">
    <ul className="flex flex-row gap-x-3 md:gap-x-6">
      <li>
        <Link href="#experience">Work Experience</Link>
      </li>
      <li>
        <Link href="#education">Education</Link>
      </li>
      <li>
        <Link href="#about">{`About & Contact`}</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
