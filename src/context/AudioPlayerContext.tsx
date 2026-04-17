import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

export type PlayerTrack = {
  title: string;
  artist: string;
  audioSrc: string;
  cover?: string;
  slug?: string;
};

type AudioPlayerContextType = {
  queue: PlayerTrack[];
  currentTrack: PlayerTrack | null;
  currentIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playTrack: (track: PlayerTrack, queue?: PlayerTrack[]) => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
};

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<PlayerTrack[]>([]);

  const [queue, setQueue] = useState<PlayerTrack[]>([]);
  const [currentTrack, setCurrentTrack] = useState<PlayerTrack | null>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);

  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);

  const loadAndPlayTrack = useCallback((track: PlayerTrack) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const nextSrc = track.audioSrc;

    if (audio.src !== window.location.origin + nextSrc) {
      audio.src = nextSrc;
      audio.load();
    }

    audio.play().catch((err) => {
      console.error("Audio play failed:", err);
      setIsPlaying(false);
    });
  }, []);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.volume = volume;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;

        if (nextIndex < queueRef.current.length) {
          const nextTrack = queueRef.current[nextIndex];

          if (nextTrack) {
            setCurrentTrack(nextTrack);
            setCurrentTime(0);
            setDuration(0);
            setIsPlaying(true);
            loadAndPlayTrack(nextTrack);
          }

          return nextIndex;
        }

        setIsPlaying(false);
        return prev;
      });
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [loadAndPlayTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const playTrack = useCallback(
    (track: PlayerTrack, newQueue?: PlayerTrack[]) => {
      const isSameTrack = currentTrack?.audioSrc === track.audioSrc;

      if (isSameTrack) {
        setIsPlaying(true);
        audioRef.current?.play().catch((err) => {
          console.error("Audio play failed:", err);
          setIsPlaying(false);
        });
        return;
      }

      const activeQueue = newQueue && newQueue.length > 0 ? newQueue : [track];
      const trackIndex = activeQueue.findIndex(
        (t) => t.audioSrc === track.audioSrc
      );
      const resolvedIndex = trackIndex >= 0 ? trackIndex : 0;
      const resolvedTrack = activeQueue[resolvedIndex] ?? track;

      setQueue(activeQueue);
      queueRef.current = activeQueue;
      setCurrentIndex(resolvedIndex);
      setCurrentTrack(resolvedTrack);
      setCurrentTime(0);
      setDuration(0);
      setIsPlaying(true);

      loadAndPlayTrack(resolvedTrack);
    },
    [currentTrack, loadAndPlayTrack]
  );

  const togglePlayPause = useCallback(() => {
    if (!audioRef.current || !currentTrack) return;

    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => {
        console.error("Audio play failed:", err);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [currentTrack, isPlaying]);

  const playNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;

      if (nextIndex < queueRef.current.length) {
        const nextTrack = queueRef.current[nextIndex];

        if (nextTrack) {
          setCurrentTrack(nextTrack);
          setCurrentTime(0);
          setDuration(0);
          setIsPlaying(true);
          loadAndPlayTrack(nextTrack);
        }

        return nextIndex;
      }

      return prev;
    });
  }, [loadAndPlayTrack]);

  const playPrevious = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    setCurrentIndex((prev) => {
      const previousIndex = prev - 1;

      if (previousIndex >= 0) {
        const previousTrack = queueRef.current[previousIndex];

        if (previousTrack) {
          setCurrentTrack(previousTrack);
          setCurrentTime(0);
          setDuration(0);
          setIsPlaying(true);
          loadAndPlayTrack(previousTrack);
        }

        return previousIndex;
      }

      return prev;
    });
  }, [loadAndPlayTrack]);

  const seekTo = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback((value: number) => {
    const clamped = Math.min(1, Math.max(0, value));
    setVolumeState(clamped);
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        queue,
        currentTrack,
        currentIndex,
        isPlaying,
        currentTime,
        duration,
        volume,
        playTrack,
        togglePlayPause,
        playNext,
        playPrevious,
        seekTo,
        setVolume,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);

  if (!context) {
    throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  }

  return context;
}