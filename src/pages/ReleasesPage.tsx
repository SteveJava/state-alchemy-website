import { useState } from "react";
import { RELEASES } from "../constants/data";
import { motion } from "framer-motion";
import { MediaCard } from "../components/Mediacard";
import { PageContainer } from "../components/layout/PageContainer";

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
    <PageContainer>
      <h1 className="text-4xl md:text-5xl font-bold">Releases</h1>
      <p className="text-brand-text-muted mt-4 mb-10">
        Explore the latest sonic artifacts from State Alchemy.
      </p>

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
    </PageContainer>
  );
}