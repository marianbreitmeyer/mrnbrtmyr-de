import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type HStackProps = {
  children: ReactNode;
  styling?: string;
};

const HStack: React.FC<HStackProps> = ({ children, styling }) => {
  return <div className={cn('flex flex-row', styling)}>{children}</div>;
};

export default HStackProps;
