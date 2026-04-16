import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card } from "./ui/Base";

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
      <div className={`${imageAspect} overflow-hidden relative flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {(metaLeft || metaRight) && (
            <div className="flex justify-between items-start mb-2 gap-2">
              {metaLeft && (
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-brand-primary/30 rounded text-brand-primary">
                  {metaLeft}
                </span>
              )}
              {metaRight && (
                <span className="text-xs text-brand-text-muted">{metaRight}</span>
              )}
            </div>
          )}

          <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">
            {title}
          </h3>

          {subtitle && (
            <p className="text-brand-text-muted text-sm">{subtitle}</p>
          )}
        </div>

        {footer && <div className="flex gap-3 mt-4">{footer}</div>}
      </div>
    </Card>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};