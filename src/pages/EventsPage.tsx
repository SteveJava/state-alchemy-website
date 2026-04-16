import { EVENTS } from "../constants/data";
import { motion } from "framer-motion";
import { MediaCard } from "../components/Mediacard";
import { PageContainer } from "../components/layout/PageContainer";

export default function EventsPage() {
  const sortedEvents = [...EVENTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageContainer>
      <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
      <p className="text-brand-text-muted mt-4 mb-10">
        Explore upcoming and past State Alchemy rituals.
      </p>

      {sortedEvents.length === 0 ? (
        <p className="text-brand-text-muted">No events available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="h-full"
            >
              <MediaCard
                image={event.image}
                title={event.title}
                subtitle={`${event.venue}, ${event.location}`}
                metaLeft="Event"
                metaRight={new Date(event.date).toLocaleDateString("en-ZA", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
                link={`/events/${event.slug}`}
                imageAspect="aspect-[4/3]"
              />
            </motion.div>
          ))}
        </div>
      )}
    </PageContainer>
  );
}