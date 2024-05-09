import Logo from '@/components/Logo';

export type LogoStripProps = {
  variant: 'mutabor' | 'deepblue';
};

const LogoStrip: React.FC<LogoStripProps> = ({ variant }) => {
  switch (variant) {
    case 'mutabor':
      return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-2 md:gap-x-4 w-full h-fit">
          <Logo variant={'vda'} />
          <Logo variant={'vodafone'} />
          <Logo variant={'merck'} />
          <Logo variant={'dfl'} />
          <Logo variant={'baywa'} />
        </div>
      );
    case 'deepblue':
      return (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-x-2 md:gap-x-4 w-full h-fit">
          <Logo variant={'bosch'} />
          <Logo variant={'ernstings'} />
          <Logo variant={'migros'} />
          <Logo variant={'adc'} />
        </div>
      );
    default:
      return null;
  }
};

export default LogoStrip;
