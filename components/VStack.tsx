import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type VStackProps = {
  children: ReactNode;
  styling?: string;
};

const VStack: React.FC<VStackProps> = ({ children, styling }) => {
  return <div className={cn('fixed styling', styling)}>{children}</div>;
};

export default VStackProps;
