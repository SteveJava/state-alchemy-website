import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card } from "./ui/Base";
import { SkeletonImage } from "./ui/SkeletonImage";

interface MediaCardProps {
  image: string;
  title: string;
  subtitle?: string;
  metaLeft?: string;
  metaRight?: string;
  link?: string;
  footer?: ReactNode;
  imageAspect?: string;
}

export const MediaCard = ({
  image,
  title,
  subtitle,
  metaLeft,
  metaRight,
  link,
  footer,
  imageAspect = "aspect-square",
}: MediaCardProps) => {
  const content = (
    <Card className="group h-full flex flex-col overflow-hidden">
      <div className={`${imageAspect} relative overflow-hidden flex-shrink-0 bg-white/5`}>
        <SkeletonImage
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-1 flex-col justify-between">
        <div>
          {(metaLeft || metaRight) && (
            <div className="mb-2 flex items-start justify-between gap-2">
              {metaLeft && (
                <span className="rounded border border-brand-primary/30 px-2 py-1 text-[10px] uppercase tracking-widest text-brand-primary">
                  {metaLeft}
                </span>
              )}
              {metaRight && (
                <span className="text-xs text-brand-text-muted">
                  {metaRight}
                </span>
              )}
            </div>
          )}

          <h3 className="mb-1 text-xl font-bold transition-colors group-hover:text-brand-primary">
            {title}
          </h3>

          {subtitle && (
            <p className="text-sm text-brand-text-muted">{subtitle}</p>
          )}
        </div>

        {footer && <div className="mt-4 flex gap-3">{footer}</div>}
      </div>
    </Card>
  );

  if (link && link.trim() !== "" && link !== "#") {
    return (
      <Link to={link} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};