import { ReactNode } from 'react';
import { Link2Icon } from '@radix-ui/react-icons';

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

const Milestone: React.FC<MilestoneEnhancedProps> = ({
  employer,
  roles,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row pb-8 border-b-[1px] last:border-b-0 border-stone-200 dark:border-stone-800">
      <div className="flex flex-col md:max-w-[16rem] w-full mb-4 md:mb-0">
        {employer && employer.date && (
          <p className="text-stone-600 dark:text-stone-400 font-mono">
            {employer.date}
          </p>
        )}
        {employer && employer.title && (
          <div className="group flex items-center gap-x-2 mr-8 max-w-[16rem] w-full hover:cursor-pointer">
            <p className="text-stone-400 dark:text-stone-600">
              {employer.title}
            </p>
            <LinkEmployer href="/" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-4">
        {roles.map((entry, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <p className="text-stone-600 dark:text-stone-400">
                {entry.title}
              </p>
              {entry.date && (
                <div className="text-stone-400 dark:text-stone-600 font-mono">
                  {entry.date}
                </div>
              )}
            </div>
          );
        })}

        {description && (
          <p className="text-stone-600 dark:text-stone-400">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Milestone;

const LinkEmployer = ({ href }: { href: string }) => {
  return (
    <div className="h-6 w-6 flex items-center justify-around">
      <div className="transition-all duration-150 ease-in-out p-1 group-hover:p-1.5 hover:ring-stone-400 hover:dark:ring-stone-600 ring-1 ring-stone-200 dark:ring-stone-800 rounded-full text-stone-400 dark:text-stone-600 flex items-center justify-around">
        <Link2Icon className="h-3 w-3" />
      </div>
    </div>
  );
};
