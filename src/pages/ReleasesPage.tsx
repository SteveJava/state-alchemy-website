import { useState } from "react";
import { RELEASES } from "../constants/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const filters = ["All", "Album", "EP", "Single", "Compilation"] as const;

type Filter = typeof filters[number];

export default function ReleasesPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredReleases =
    filter === "All"
      ? RELEASES
      : RELEASES.filter((r) => r.type === filter);

  return (
    <div className="min-h-screen pt-28 px-10">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Releases</h1>

      {/* Filter Buttons */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReleases.map((release, idx) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link to={'/releases/${release.id}'}>
              <div className="group cursor-pointer">
                
                {/* Cover */}
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={release.cover}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3 className="text-lg font-bold group-hover:text-brand-primary transition">
                    {release.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted">
                    {release.artist}
                  </p>
                  <p className="text-xs text-brand-text-muted mt-1">
                    {release.type} • {release.date}
                  </p>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
