import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { RELEASES } from "../constants/data";
import { PageContainer } from "../components/layout/PageContainer";
import { ArrowLeft, Calendar, Disc3, Play, Pause } from "lucide-react";
import { useAudioPlayer } from "../context/AudioPlayerContext";

export default function ReleasePage() {
  const { slug } = useParams();

  const release = useMemo(
    () => RELEASES.find((r) => r.slug === slug),
    [slug]
  );

  const { currentTrack, isPlaying, playTrack, togglePlayPause } =
    useAudioPlayer();

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

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <img
              src={release.cover}
              alt={`${release.title} cover`}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <div className="mb-4 flex flex-wrap gap-4 text-sm text-brand-text-muted">
            <span className="inline-flex items-center gap-2">
              <Disc3 size={16} />
              {release.type}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              {release.date}
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            {release.title}
          </h1>

          <p className="mt-3 text-xl text-white/80">{release.artist}</p>

          {release.description && (
            <p className="mt-6 max-w-2xl leading-relaxed text-brand-text-muted">
              {release.description}
            </p>
          )}

          {release.link && release.link !== "#" && (
            <div className="mt-8">
              <a
                href={release.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Open External Release Link
              </a>
            </div>
          )}
        </div>
      </div>

      {tracks.length > 0 && (
        <section className="mt-14">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">Tracklist</h2>
            <p className="mt-2 text-sm text-brand-text-muted">
              Click a track to play or pause it.
            </p>
          </div>

          <div className="space-y-3">
            {tracks.map((track, index) => {
              const isCurrentTrack = currentTrack?.audioSrc === track.audioSrc;
              const isActive = isCurrentTrack && isPlaying;

              return (
                <button
                  key={track.id}
                  onClick={() => handleTrackClick(track)}
                  className={`group flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    isCurrentTrack
                      ? "border-brand-primary bg-brand-primary/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                        isCurrentTrack
                          ? "border-brand-primary bg-brand-primary text-black"
                          : "border-white/15 bg-white/5 text-white"
                      }`}
                    >
                      {isActive ? <Pause size={16} /> : <Play size={16} />}
                    </div>

                    <div>
                      <p className="text-sm text-brand-text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-base font-medium text-white">
                        {track.title}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">
                    {isCurrentTrack ? (isPlaying ? "Playing" : "Paused") : "Ready"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </PageContainer>
  );
}