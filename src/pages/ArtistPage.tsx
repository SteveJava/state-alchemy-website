import { useParams, Link } from "react-router-dom";
import { ARTISTS } from "../constants/data";
import { Instagram, Music, ArrowLeft } from "lucide-react";
import { PageContainer } from "../components/layout/PageContainer";
import { motion } from "framer-motion";

export default function ArtistPage() {
  const { slug } = useParams();
  const artist = ARTISTS.find((a) => a.slug === slug);

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
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-white/10 mb-6">
            <img
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

          {/* Divider */}
          <div className="w-12 h-px bg-white/10 mb-6" />

          {/* Bio */}
          <p className="text-base md:text-lg text-brand-text-muted leading-relaxed mb-8">
            {artist.bio}
          </p>

          {/* Socials */}
          <div className="flex gap-4">
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
        </motion.div>
      </PageContainer>
    </div>
  );
}
