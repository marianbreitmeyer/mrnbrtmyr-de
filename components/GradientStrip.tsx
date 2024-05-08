import { cn } from '@/utils/cn';

const GradientStrip = ({ isOnTop }: { isOnTop?: boolean }) => (
  <div
    className={cn(
      'absolute left-0 w-full h-2 pointer-events-none z-10',
      isOnTop ? '-top-2' : 'top-0'
    )}
  >
    <div className="wrapper-no-p grid grid-cols-8 w-full h-full">
      <div className="col-span-1 h-full bg-teal-800"></div>
      <div className="col-span-1 h-full bg-teal-700"></div>
      <div className="col-span-1 h-full bg-teal-600"></div>
      <div className="col-span-1 h-full bg-teal-500"></div>
      <div className="col-span-1 h-full bg-teal-400"></div>
      <div className="col-span-1 h-full bg-teal-300"></div>
      <div className="col-span-1 h-full bg-teal-200"></div>
      <div className="col-span-1 h-full bg-teal-100"></div>
    </div>
  </div>
);

export default GradientStrip;
