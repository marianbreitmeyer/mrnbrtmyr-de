import { cn } from '@/utils/cn';
import Image from 'next/image';

const Picture = ({
  imageSrc,
  altText,
  className,
}: {
  imageSrc: string;
  altText: string;
  className?: string;
}) => (
  <div
    className={cn(
      'w-full aspect-video relative rounded-lg overflow-hidden -z-10',
      className
    )}
  >
    <Image
      fill
      src={imageSrc}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt={altText}
      style={{ objectFit: 'cover' }}
    />
  </div>
);

export default Picture;
