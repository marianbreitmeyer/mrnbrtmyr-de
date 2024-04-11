import { ReactNode } from 'react';
import { Link2Icon } from '@radix-ui/react-icons';
import Modal from '@/components/Modal';

type MilestoneEnhancedProps = {
  employer?: MilestoneProps;
  roles: MilestoneProps[];
  description?: string;
  children?: ReactNode;
};

type MilestoneProps = {
  date?: string;
  title: string;
};

const MilestoneExperience: React.FC<MilestoneEnhancedProps> = ({
  employer,
  roles,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row pb-8 border-subtle relative">
      <div className="flex flex-col md:max-w-[16rem] w-full mb-4 md:mb-0">
        {employer && employer.date && (
          <p className="text-moderate font-mono">{employer.date}</p>
        )}
        {employer && employer.title && (
          <div className="group flex items-center gap-x-2 hover:cursor-pointer">
            <p className="text-subtle">{employer.title}</p>
            <LinkEmployer href="/" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-4">
        {roles.map((entry, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <p className="text-moderate">{entry.title}</p>
              {entry.date && (
                <div className="text-subtle font-mono">{entry.date}</div>
              )}
            </div>
          );
        })}
        {/* <Modal /> */}
        {description && <p className="text-moderate">{description}</p>}
        {children}
      </div>
      <div className="bg-gradient-subtle w-full h-full min-h-full m-auto absolute -z-10"></div>
    </div>
  );
};

export default MilestoneExperience;

const LinkEmployer = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="transition-all duration-150 ease-in-out p-1 group-hover:scale-[120%] hover:ring-stone-400 hover:dark:ring-stone-600 ring-1 ring-stone-200 dark:ring-stone-800 rounded-full text-stone-400 dark:text-stone-600 flex items-center justify-around"
    >
      <Link2Icon className="h-3 w-3" />
    </a>
  );
};
