import { useState } from "react";
import { ARTISTS } from "../constants/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const filters = ["All", "Live", "DJ"] as const;
type Filter = typeof filters[number];

export default function Artists() {
  const [filter, setFilter] = useState<Filter>("All");

  const sortedArtists = [...ARTISTS].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredArtists =
    filter === "All"
      ? sortedArtists
      : sortedArtists.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen pt-28 px-10">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Artists</h1>

      <p className="text-brand-text-muted mb-6">
        The State Alchemy roster.
      </p>

      {/* Filter Buttons (MATCH RELEASES STYLE) */}
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
        {filteredArtists.map((artist, idx) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link to={`/artists/${artist.slug}`}>

              <div className="group cursor-pointer">

                {/* Image */}
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3 className="text-lg font-bold group-hover:text-brand-primary transition">
                    {artist.name}
                  </h3>

                  <p className="text-sm text-brand-text-muted">
                    {artist.category}
                  </p>

                  <p className="text-xs text-brand-text-muted mt-1">
                    {artist.genres.join(", ")}
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
