import { useParams } from "react-router-dom";
import { EVENTS } from "../constants/data";
import { Calendar, MapPin } from "lucide-react";

export default function EventPage() {
  const { slug } = useParams();
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-6xl mx-auto text-white">
        <p className="text-xl">Event not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-6xl mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={event.image}
            alt={event.title}
            className="w-full max-w-xl rounded-xl mb-6"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-brand-primary mb-2">
            Ritual
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
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
            <p className="text-brand-text-muted leading-relaxed mb-6">
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
  );
}