import { useState } from "react";
import { ARTISTS } from "../constants/data";
import { motion } from "framer-motion";
import { MediaCard } from "../components/Mediacard";
import { Instagram, Music } from "lucide-react";
import { PageContainer } from "../components/layout/PageContainer";

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
      <h1 className="text-4xl md:text-5xl font-bold">Artists</h1>
      <p className="text-brand-text-muted mt-4 mb-10">
        Explore the artists behind State Alchemy.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist, idx) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <MediaCard
              image={artist.image}
              title={artist.name}
              subtitle={artist.genres.join(", ")}
              metaLeft={artist.category}
              link={`/artists/${artist.slug}`}
              footer={
                <>
                  {artist.socials.instagram &&
                    artist.socials.instagram !== "#" && (
                      <a
                        href={artist.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-brand-primary transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}

                  {artist.socials.soundcloud &&
                    artist.socials.soundcloud !== "#" && (
                      <a
                        href={artist.socials.soundcloud}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-brand-primary transition-colors"
                      >
                        <Music className="w-4 h-4" />
                      </a>
                    )}
                </>
              }
            />
          </motion.div>
        ))}
      </div>
    </PageContainer>
    </div>
  );
}