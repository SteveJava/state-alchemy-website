import { useState } from "react";
import { RELEASES } from "../constants/data";
import { motion } from "framer-motion";
import { MediaCard } from "../components/Mediacard";

const filters = ["All", "Album", "EP", "Single", "Compilation"] as const;
type Filter = typeof filters[number];

export default function ReleasesPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredReleases =
    filter === "All"
      ? [...RELEASES]
      : RELEASES.filter((r) => r.type === filter);

  const sortedReleases = filteredReleases.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen pt-28 px-6 md:px-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Releases</h1>

      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === f
                ? "bg-brand-primary text-black border-brand-primary"
                : "border-white/20 text-white hover:border-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedReleases.map((release, idx) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <MediaCard
              image={release.cover}
              title={release.title}
              subtitle={release.artist}
              metaLeft={release.type}
              metaRight={release.date}
              link={`/releases/${release.slug}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}