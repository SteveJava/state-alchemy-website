import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { RELEASES, ARTISTS } from "../constants/data";
import { PageContainer } from "../components/layout/PageContainer";
import { ArrowLeft, Calendar, Disc3, Play, Pause } from "lucide-react";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { motion } from "framer-motion";

export default function ReleasePage() {
  const { slug } = useParams();

  const release = useMemo(
    () => RELEASES.find((r) => r.slug === slug),
    [slug]
  );

  const { currentTrack, isPlaying, playTrack, togglePlayPause } =
    useAudioPlayer();

  const artistSlug = useMemo(
    () => release && ARTISTS.find((a) => a.name === release.artist)?.slug,
    [release]
  );

  if (!release) {
    return (
      <PageContainer>
        <div className="flex min-h-[60vh] flex-col items-start justify-center">
          <Link
            to="/releases"
            className="mb-6 inline-flex items-center gap-2 text-sm text-brand-text-muted transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Releases
          </Link>
          <p className="text-2xl font-semibold text-white">Release not found</p>
          <p className="mt-3 max-w-xl text-brand-text-muted">
            This release does not exist, or its slug is missing from your data.
          </p>
        </div>
      </PageContainer>
    );
  }

  const tracks = release.tracks ?? [];

  const playerQueue = tracks.map((track) => ({
    title: track.title,
    audioSrc: track.audioSrc,
    artist: release.artist,
    cover: release.cover,
    slug: release.slug,
  }));

  const handleTrackClick = (track: { title: string; audioSrc: string }) => {
    if (!track.audioSrc) return;
    if (currentTrack?.audioSrc === track.audioSrc) {
      togglePlayPause();
    } else {
      playTrack(
        {
          title: track.title,
          audioSrc: track.audioSrc,
          artist: release.artist,
          cover: release.cover,
          slug: release.slug,
        },
        playerQueue
      );
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={release.cover}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[140px] scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.85),rgba(0,0,0,1))]" />
      </div>

      <PageContainer>
        <div className="mb-8">
          <Link
            to="/releases"
            className="inline-flex items-center gap-2 text-sm text-brand-text-muted transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Releases
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Cover */}
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-md overflow-hidden shadow-[0_12px_80px_rgba(0,0,0,0.8)] mb-8">
            <img
              src={release.cover}
              alt={`${release.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Type pill */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-primary">
            <Disc3 size={12} />
            {release.type}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-4">
            {release.title}
          </h1>

          {/* Artist + date */}
          <div className="flex items-center gap-3 text-white/70 mb-4">
            {artistSlug ? (
              <Link
                to={`/artists/${artistSlug}`}
                className="font-semibold text-white hover:underline underline-offset-4 transition"
              >
                {release.artist}
              </Link>
            ) : (
              <span className="font-semibold text-white">{release.artist}</span>
            )}
            <span className="text-white/30">·</span>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <Calendar size={13} />
              {release.date}
            </span>
            {tracks.length > 0 && (
              <>
                <span className="text-white/30">·</span>
                <span className="text-sm">{tracks.length} {tracks.length === 1 ? "track" : "tracks"}</span>
              </>
            )}
          </div>

          {/* Description */}
          {release.description && (
            <>
              <div className="w-12 h-px bg-white/10 my-5" />
              <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed text-brand-text-muted mb-5">
                {release.description}
              </p>
            </>
          )}

          {/* External link */}
          {release.link && release.link !== "#" && (
            <a
              href={release.link}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Open External Link
            </a>
          )}

          {/* Tracklist */}
          {tracks.length > 0 && (
            <section className="w-full mt-12">
              <div className="border-b border-white/5 pb-3 mb-2 grid grid-cols-[2rem_1fr_auto] gap-4 px-4 text-xs uppercase tracking-widest text-brand-text-muted text-left">
                <span className="text-center">#</span>
                <span>Title</span>
                <span>Status</span>
              </div>

              <div className="space-y-1">
                {tracks.map((track, index) => {
                  const isCurrentTrack = currentTrack?.audioSrc === track.audioSrc;
                  const isActive = isCurrentTrack && isPlaying;

                  return (
                    <button
                      key={track.id}
                      onClick={() => handleTrackClick(track)}
                      className={`group w-full grid grid-cols-[2rem_1fr_auto] gap-4 items-center px-4 py-3 rounded-md text-left transition-all duration-200 ${
                        isCurrentTrack ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        <span className={`text-sm tabular-nums group-hover:hidden ${isCurrentTrack ? "text-brand-primary hidden" : "text-brand-text-muted"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={`hidden group-hover:flex items-center justify-center ${isCurrentTrack ? "flex" : ""}`}>
                          {isActive
                            ? <Pause size={15} className="text-brand-primary" />
                            : <Play size={15} className={isCurrentTrack ? "text-brand-primary" : "text-white"} />
                          }
                        </span>
                      </div>

                      <span className={`text-sm font-medium truncate ${isCurrentTrack ? "text-brand-primary" : "text-white"}`}>
                        {track.title}
                      </span>

                      <span className="text-xs uppercase tracking-[0.15em] text-brand-text-muted">
                        {isCurrentTrack ? (isPlaying ? "Playing" : "Paused") : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </motion.div>
      </PageContainer>
    </div>
  );
}
