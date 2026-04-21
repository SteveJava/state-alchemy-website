import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAudioPlayer } from "../context/AudioPlayerContext";

function formatTime(time: number) {
  if (!isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function GlobalAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    isBuffering,
    audioError,
    togglePlayPause,
    playNext,
    playPrevious,
    currentTime,
    duration,
    seekTo,
    volume,
    setVolume,
  } = useAudioPlayer();

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(Number(e.target.value));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const visible = !!currentTrack;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur-xl transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Main row */}
      <div className="flex w-full items-center gap-3 px-4 pt-3 pb-1 md:pb-3 md:gap-4 md:px-6">
        {/* Album cover */}
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border border-white/10 bg-white/5">
          {currentTrack?.cover ? (
            currentTrack.slug ? (
              <Link to={`/releases/${currentTrack.slug}`} className="">
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className="h-full w-full object-cover"
                />
              </Link>
            ) : (
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="h-full w-full object-cover"
              />
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-white/40">
              —
            </div>
          )}
        </div>

        {/* Track info */}
        <div className="relative z-10 min-w-0 flex-1 md:w-48 md:flex-none md:shrink-0">
          {currentTrack?.slug ? (
            <Link to={`/releases/${currentTrack.slug}`} className="block truncate text-sm font-medium text-white hover:underline underline-offset-2  ">
              {currentTrack.title}
            </Link>
          ) : (
            <p className="truncate text-sm font-medium text-white">
              {currentTrack?.title || "No track selected"}
            </p>
          )}
          {audioError ? (
            <p className="truncate text-xs text-red-400">{audioError}</p>
          ) : currentTrack?.artistSlug ? (
            <Link to={`/artists/${currentTrack.artistSlug}`} className="block truncate text-xs text-white/60 hover:underline underline-offset-2  ">
              {currentTrack.artist}
            </Link>
          ) : (
            <p className="truncate text-xs text-white/60">
              {currentTrack?.artist || ""}
            </p>
          )}
        </div>

        {/* Mobile: controls only */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={playPrevious}
            disabled={!currentTrack}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
          >
            <SkipBack size={16} />
          </button>
          <button
            onClick={togglePlayPause}
            disabled={!currentTrack || isBuffering}
            aria-label={isBuffering ? "Loading" : isPlaying ? "Pause" : "Play"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 disabled:opacity-40"
          >
            {isBuffering ? (
              <Loader2 size={18} className="animate-spin" />
            ) : isPlaying ? (
              <Pause size={18} />
            ) : (
              <Play size={18} />
            )}
          </button>
          <button
            onClick={playNext}
            disabled={!currentTrack}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
          >
            <SkipForward size={16} />
          </button>
        </div>

        {/* Desktop: controls + seek */}
        <div className="hidden md:flex flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <button
              onClick={playPrevious}
              disabled={!currentTrack}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
            >
              <SkipBack size={16} />
            </button>
            <button
              onClick={togglePlayPause}
              disabled={!currentTrack || isBuffering}
              aria-label={isBuffering ? "Loading" : isPlaying ? "Pause" : "Play"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 disabled:opacity-40"
            >
              {isBuffering ? (
                <Loader2 size={18} className="animate-spin" />
              ) : isPlaying ? (
                <Pause size={18} />
              ) : (
                <Play size={18} />
              )}
            </button>
            <button
              onClick={playNext}
              disabled={!currentTrack}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
            >
              <SkipForward size={16} />
            </button>
          </div>
          <div className="flex w-full max-w-lg items-center gap-3">
            <span className="w-8 text-right text-xs text-white/50">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              disabled={!currentTrack}
              aria-label="Seek track position"
              className="h-1 w-full cursor-pointer appearance-none rounded-full accent-orange-500 disabled:opacity-40"
              style={{
                background: `linear-gradient(to right, rgb(249 115 22) ${duration > 0 ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.15) ${duration > 0 ? (currentTime / duration) * 100 : 0}%)`
              }}
            />
            <span className="w-8 text-xs text-white/50">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Desktop: volume */}
        <div className="hidden md:flex shrink-0 items-center gap-2">
          <Volume2 size={16} className="text-white/60" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
            aria-label="Volume"
            className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
          />
        </div>
      </div>

      {/* Mobile: full-width seek bar */}
      <div className="flex md:hidden items-center gap-3 px-4 pb-3">
        <span className="w-8 text-right text-xs text-white/50">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          disabled={!currentTrack}
          aria-label="Seek track position"
          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full accent-orange-500 disabled:opacity-40"
          style={{
            background: `linear-gradient(to right, rgb(249 115 22) ${duration > 0 ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.15) ${duration > 0 ? (currentTime / duration) * 100 : 0}%)`
          }}
        />
        <span className="w-8 text-xs text-white/50">{formatTime(duration)}</span>
      </div>
    </div>
  );
}
