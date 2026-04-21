import { useState } from "react";

interface SkeletonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const SkeletonImage = ({ src, alt, className = "" }: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 to-white/10" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};
