import { ReactNode } from 'react';

type MilestoneEnhancedProps = {
  date: string;
  role: MilestoneProps;
  description?: string;
  children?: ReactNode;
};

type MilestoneProps = {
  title: string;
  subtitle: string;
};

const MilestoneEducation: React.FC<MilestoneEnhancedProps> = ({
  date,
  role,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row pb-8 border-b-subtle relative">
      {date && (
        <p className="md:max-w-[16rem] w-full mb-4 md:mb-0 text-moderate font-mono">
          {date}
        </p>
      )}

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <p className="text-moderate">{role.title}</p>
          <div className="text-subtle">{role.subtitle}</div>
        </div>

        {description && <p className="text-moderate">{description}</p>}
        {children}
      </div>
      <div className="bg-gradient-subtle w-full h-full min-h-full m-auto absolute -z-10"></div>
    </div>
  );
};

export default MilestoneEducation;
