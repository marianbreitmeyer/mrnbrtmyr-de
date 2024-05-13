import { cn } from '@/utils/cn';

const LoopVideo = ({
  vidSrc,
  className,
}: {
  vidSrc: string;
  className?: string;
}) => (
  <div
    className={cn(
      'w-full aspect-video relative overflow-hidden -z-10',
      className
    )}
  >
    <video
      width="100%"
      height="auto"
      controls={false}
      preload="auto"
      loop
      autoPlay
      playsInline
      muted
      className="rounded-lg"
    >
      <source src={vidSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default LoopVideo;
