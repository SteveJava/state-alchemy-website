import { EVENTS } from "../constants/data";
import { motion } from "framer-motion";
import { MediaCard } from "../components/Mediacard";
import { PageContainer } from "../components/layout/PageContainer";

export default function EventsPage() {
  const sortedEvents = [...EVENTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[180px]" />
        <div className="absolute top-[18%] left-[8%] h-96 w-96 rounded-full bg-brand-primary/12 blur-[140px]" />
        <div className="absolute top-[28%] right-[6%] h-[28rem] w-[28rem] rounded-full bg-white/6 blur-[160px]" />
        <div className="absolute bottom-[18%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-brand-primary/10 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[12%] h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65),rgba(0,0,0,0.9))]" />
      </div>
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
    </div>
  );
}