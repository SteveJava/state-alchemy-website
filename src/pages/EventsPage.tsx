import { EVENTS } from "../constants/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventsPage() {
  const sortedEvents = [...EVENTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen pt-28 px-6 md:px-10 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      <p className="text-brand-text-muted mb-10">
        Explore upcoming and past State Alchemy events.
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
              className="group"
            >
              <Link to={`/events/${event.slug}`}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-semibold group-hover:text-brand-primary transition">
                      {event.title}
                    </h2>

                    <p className="text-sm text-brand-text-muted mt-2">
                      {event.date}
                    </p>

                    <p className="text-sm text-brand-text-muted">
                      {event.venue}, {event.location}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}