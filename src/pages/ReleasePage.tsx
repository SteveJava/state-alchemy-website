import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { RELEASES } from "../constants/data";

export default function ReleasePage() {
  const { slug } = useParams();
  const release = RELEASES.find((r) => r.slug === slug);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  if (!release) return <div className="p-10">Not found</div>;

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const attachAudioListeners = (audio: HTMLAudioElement) => {
    audio.ontimeupdate = () => {
      if (audioRef.current === audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    audio.onloadedmetadata = () => {
      if (audioRef.current === audio) {
        setDuration(audio.duration || 0);
      }
    };

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTrackId(null);
      setCurrentTime(0);
      setDuration(0);
    };
  };

  const loadTrack = (trackId: string, audioSrc: string) => {
    if (!audioSrc) return null;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const newAudio = new Audio(audioSrc);
    audioRef.current = newAudio;

    setCurrentTrackId(trackId);
    setCurrentTime(0);
    setDuration(0);

    attachAudioListeners(newAudio);

    return newAudio;
  };

  const handlePlayPause = async (trackId: string, audioSrc: string) => {
    if (!audioSrc) return;

    if (currentTrackId === trackId && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    const newAudio = loadTrack(trackId, audioSrc);
    if (!newAudio) return;

    await newAudio.play();
    setIsPlaying(true);
  };

  const handleTrackClick = (trackId: string, audioSrc: string) => {
    handlePlayPause(trackId, audioSrc);
  };

  const handleSeek = async (
    trackId: string,
    audioSrc: string,
    value: number
  ) => {
    if (!audioSrc) return;

    if (currentTrackId === trackId && audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);

      if (!isPlaying) {
        await audioRef.current.play();
        setIsPlaying(true);
      }

      return;
    }

    const newAudio = loadTrack(trackId, audioSrc);
    if (!newAudio) return;

    const setTimeAndPlay = async () => {
      newAudio.currentTime = value;
      setCurrentTime(value);
      await newAudio.play();
      setIsPlaying(true);
    };

    if (newAudio.readyState >= 1) {
      await setTimeAndPlay();
    } else {
      newAudio.onloadedmetadata = async () => {
        if (audioRef.current === newAudio) {
          setDuration(newAudio.duration || 0);
          await setTimeAndPlay();
        }
      };
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img
            src={release.cover}
            alt={`${release.title} cover art`}
            className="w-full max-w-xl rounded-2xl mb-6 shadow-xl mx-auto lg:mx-0"
          />

          <p className="text-xs uppercase tracking-widest text-brand-primary mb-2">
            {release.type} • {release.date}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {release.title}
          </h1>

          <p className="text-brand-text-muted mt-2 mb-6">
            {release.artist}
          </p>

          {release.description && (
            <p className="text-white/80 leading-relaxed max-w-xl">
              {release.description}
            </p>
          )}
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-5">Tracklist</h2>

          <div className="space-y-3">
            {release.tracks?.map((track, index) => {
              const isCurrentTrack = currentTrackId === track.id;
              const isActive = isCurrentTrack && isPlaying;
              const isUnavailable = !track.audioSrc;

              const displayedCurrentTime = isCurrentTrack ? currentTime : 0;
              const displayedDuration =
                isCurrentTrack && duration > 0 ? duration : 100;

              const progress =
                isCurrentTrack && duration > 0
                  ? (currentTime / duration) * 100
                  : 0;

              return (
                <div
                  key={track.id}
                  onClick={() => !isUnavailable && handleTrackClick(track.id, track.audioSrc)}
                  className={`rounded-2xl border px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? "border-brand-primary bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.05)]"
                      : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                  } ${isUnavailable ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0 flex-1 text-left">
                      <span
                        className={`w-6 text-sm ${
                          isCurrentTrack ? "text-brand-primary" : "text-white/40"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-white">
                          {track.title}
                        </p>
                        <p className="text-xs text-white/40">
                          {isUnavailable
                            ? "Unavailable"
                            : isActive
                            ? "Now playing"
                            : isCurrentTrack
                            ? "Paused"
                            : "Click to play"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-white/50 tabular-nums min-w-[76px] text-right">
                        {isCurrentTrack
                          ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                          : "--:--"}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause(track.id, track.audioSrc);
                        }}
                        disabled={isUnavailable}
                        className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                          isUnavailable
                            ? "bg-white/10 text-white/30 cursor-not-allowed"
                            : isActive
                            ? "bg-brand-primary text-black scale-105"
                            : "bg-white text-black hover:scale-105"
                        }`}
                        aria-label={
                          isActive
                            ? `Pause ${track.title}`
                            : `Play ${track.title}`
                        }
                      >
                        {isActive ? (
                          <Pause size={18} fill="currentColor" />
                        ) : (
                          <Play size={18} fill="currentColor" className="ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mt-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="range"
                      min={0}
                      max={displayedDuration}
                      step={0.1}
                      value={displayedCurrentTime}
                      onChange={(e) =>
                        handleSeek(track.id, track.audioSrc, Number(e.target.value))
                      }
                      className="w-full h-1 appearance-none cursor-pointer bg-transparent accent-brand-primary"
                      style={{
                        background: isCurrentTrack
                          ? `linear-gradient(to right, var(--color-brand-primary) 0%, var(--color-brand-primary) ${progress}%, rgba(255,255,255,0.15) ${progress}%, rgba(255,255,255,0.15) 100%)`
                          : "rgba(255,255,255,0.15)",
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}