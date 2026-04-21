import { useParams, Link } from "react-router-dom";
import { ARTISTS } from "../constants/artists";
import { RELEASES } from "../constants/releases";
import { Instagram, Music, ArrowLeft } from "lucide-react";
import { PageContainer } from "../components/layout/PageContainer";
import { SkeletonImage } from "../components/ui/SkeletonImage";
import { motion } from "framer-motion";

export default function ArtistPage() {
  const { slug } = useParams();
  const artist = ARTISTS.find((a) => a.slug === slug);
  const discography = artist
    ? [...RELEASES]
        .filter((r) => r.artist.toLowerCase().includes(artist.name.toLowerCase()))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : [];

  if (!artist) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p className="text-6xl mb-6">404</p>
          <h1 className="text-2xl font-bold mb-3">Artist not found</h1>
          <p className="text-brand-text-muted mb-8">
            The artist you're looking for doesn't exist or may have been removed.
          </p>
        </div>
      </PageContainer>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.7),rgba(0,0,0,0.95))]" />
      </div>

      <PageContainer>
        <div className="mb-8">
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 text-sm text-brand-text-muted transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Artists
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center max-w-lg mx-auto"
        >
          {/* Avatar */}
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-white/10 mb-6">
            <SkeletonImage
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Category pill */}
          <span className="mb-3 inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-primary">
            {artist.category}
          </span>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-4">
            {artist.name}
          </h1>

          {/* Genres */}
          <p className="text-sm text-brand-text-muted tracking-widest uppercase mb-6">
            {artist.genres.join(" · ")}
          </p>

          {/* Socials */}
          <div className="flex gap-4 mb-6">
            {artist.socials.instagram && artist.socials.instagram !== "#" && (
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`${artist.name} on Instagram`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-brand-text-muted hover:text-white hover:border-white/25 transition-all"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            )}
            {artist.socials.soundcloud && artist.socials.soundcloud !== "#" && (
              <a
                href={artist.socials.soundcloud}
                target="_blank"
                rel="noreferrer"
                aria-label={`${artist.name} on SoundCloud`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-brand-text-muted hover:text-white hover:border-white/25 transition-all"
              >
                <Music className="w-4 h-4" />
                SoundCloud
              </a>
            )}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-white/10 mb-6" />

          {/* Bio */}
          <p className="text-base md:text-lg text-brand-text-muted leading-relaxed mb-8 whitespace-pre-line">
            {artist.bio}
          </p>
        </motion.div>

        {discography.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pb-16"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Discography</h2>
              <p className="text-sm text-brand-text-muted">
                {discography.length} release{discography.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {discography.map((release, idx) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.04, duration: 0.25 }}
                >
                  <Link to={`/releases/${release.slug}`} className="group block h-full">
                    <article className="relative overflow-hidden rounded-md">
                      <div className="relative aspect-square overflow-hidden">
                        <SkeletonImage
                          src={release.cover}
                          alt={release.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                          <p className="text-sm font-bold text-white">{release.title}</p>
                          <p className="mt-0.5 text-xs text-white/60">{release.type}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </PageContainer>
    </div>
  );
}
