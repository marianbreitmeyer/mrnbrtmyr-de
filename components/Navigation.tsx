import { cn } from '@/utils/cn';
import Link from 'next/link';

const Navigation = ({ className }: { className: string }) => (
  <nav className={cn('text-sm text-stone-600 dark:text-stone-400', className)}>
    <ul className="flex flex-row gap-x-3 md:gap-x-6">
      <li>
        <Link
          href="/#experience"
          className="hover:opacity-60 transition-all duration-150 ease-in-out"
        >
          Work Experience
        </Link>
      </li>
      <li>
        <Link
          href="/#education"
          className="hover:opacity-60 transition-all duration-150 ease-in-out"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          className="hover:opacity-60 transition-all duration-150 ease-in-out"
        >{`About & Contact`}</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
