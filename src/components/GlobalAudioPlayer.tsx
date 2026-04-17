import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
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
    togglePlayPause,
    playNext,
    playPrevious,
    currentTime,
    duration,
    seekTo,
    volume,
    setVolume,
  } = useAudioPlayer();

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(Number(e.target.value));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: track info */}
          <div className="flex min-w-0 items-center gap-4 md:w-[30%]">
            <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-white/5 shrink-0">
              {currentTrack?.cover ? (
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-white/40">
                  No Art
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {currentTrack?.title || "No track selected"}
              </p>
              <p className="truncate text-xs text-white/60">
                {currentTrack?.artist || "Choose a track from a release"}
              </p>
            </div>
          </div>

          {/* Center: controls */}
          <div className="flex flex-col items-center justify-center gap-3 md:w-[40%]">
            <div className="flex items-center gap-3">
              <button
                onClick={playPrevious}
                disabled={!currentTrack}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
              >
                <SkipBack size={18} />
              </button>

              <button
                onClick={togglePlayPause}
                disabled={!currentTrack}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 disabled:opacity-40"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button
                onClick={playNext}
                disabled={!currentTrack}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
              >
                <SkipForward size={18} />
              </button>
            </div>

            <div className="flex w-full items-center gap-3">
              <span className="w-10 text-xs text-white/50">
                {formatTime(currentTime)}
              </span>

              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                disabled={!currentTrack}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-white disabled:opacity-40"
              />

              <span className="w-10 text-right text-xs text-white/50">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Right: volume */}
          <div className="flex items-center gap-3 md:w-[30%] md:justify-end">
            <Volume2 size={18} className="text-white/60" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolume}
              className="h-1 w-28 cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
            />
          </div>
        </div>

        {/* tiny glow line */}
        <div
          className="h-[2px] rounded-full bg-white/20 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}