import Image from 'next/image';

const Picture = ({
  imageSrc,
  altText,
}: {
  imageSrc: string;
  altText: string;
}) => (
  <div className="w-full aspect-video relative rounded-lg overflow-hidden">
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
