import { useState } from "react";
import { ARTISTS } from "../constants/artists";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { SkeletonImage } from "../components/ui/SkeletonImage";

const filters = ["All", "Live", "DJ"] as const;
type Filter = (typeof filters)[number];

export default function Artists() {
  const [filter, setFilter] = useState<Filter>("All");

  const sortedArtists = [...ARTISTS].sort((a, b) => a.name.localeCompare(b.name));
  const filteredArtists =
    filter === "All" ? sortedArtists : sortedArtists.filter((a) => a.category === filter);

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
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-primary/80">
            The Alchemists
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            Our Artists
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-brand-text-muted leading-relaxed">
            The sonic architects behind State Alchemy — live acts and selectors pushing the
            boundaries of the underground.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-brand-primary text-black"
                  : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredArtists.map((artist, idx) => (
              <motion.div
                key={artist.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.04, duration: 0.25 }}
              >
                <Link to={`/artists/${artist.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                    <SkeletonImage
                      src={artist.image}
                      alt={artist.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                      <p className="text-2xl font-bold text-white">{artist.name}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-sm text-brand-text-muted"
        >
          {filteredArtists.length}{" "}
          {filter === "All" ? "artists" : filter === "Live" ? "live acts" : "DJs"}
        </motion.p>
      </PageContainer>
    </div>
  );
}
