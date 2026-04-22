import { useParams, Link, useLocation } from "react-router-dom";
import { EVENTS } from "../constants/events";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { PageContainer } from "../components/layout/PageContainer";
import { SkeletonImage } from "../components/ui/SkeletonImage";

export default function EventPage() {
  const { slug } = useParams();
  const { state: navState } = useLocation();
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p className="text-6xl mb-6">404</p>
          <h1 className="text-2xl font-bold mb-3">Event not found</h1>
          <p className="text-brand-text-muted mb-8">
            The event you're looking for doesn't exist or may have been removed.
          </p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-8">
        <Link
          to={navState?.from === "home" ? "/" : "/events"}
          className="inline-flex items-center gap-2 text-sm text-brand-text-muted transition hover:text-white"
        >
          <ArrowLeft size={16} />
          {navState?.from === "home" ? "Back to Home" : "Back to Events"}
        </Link>
      </div>

      <div className="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="relative w-full max-w-xl overflow-hidden rounded-md mb-6">
              <SkeletonImage
                src={event.image}
                alt={event.title}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-brand-primary mb-2">
              Ritual
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {event.title}
            </h1>

            <div className="flex flex-col gap-3 text-brand-text-muted text-sm mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-primary" />
                {event.date}
              </span>

              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary" />
                {event.venue}, {event.location}
              </span>
            </div>

            {event.description && (
              <p className="text-base md:text-lg text-brand-text-muted leading-relaxed mb-6">
                {event.description}
              </p>
            )}

            {event.link && event.link !== "#" && (
              <a
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-brand-primary/30 bg-white/[0.03] px-6 py-3 text-sm font-medium text-brand-text transition-all duration-300 hover:border-brand-primary/60 hover:bg-brand-primary/10 hover:text-brand-primary"
              >
                Get tickets
              </a>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}