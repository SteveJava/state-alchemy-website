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
  );
}