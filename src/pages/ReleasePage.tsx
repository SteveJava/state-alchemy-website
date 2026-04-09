import { useParams } from "react-router-dom";
import { RELEASES } from "../constants/data";
import { useState } from "react";

export default function ReleasePage() {
  const { id } = useParams();
  const release = RELEASES.find((r) => r.id === id);

  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  if (!release) return <div className="p-10">Not found</div>;

  return (
    <div className="min-h-screen p-10 max-w-4xl mx-auto">

      {/* Header */}
      <img
        src={release.cover}
        className="w-full max-w-md rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold">{release.title}</h1>
      <p className="text-brand-text-muted">{release.artist}</p>

      {/* Tracklist */}
      <div className="mt-8 space-y-3">
        {release.tracks?.map((track, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentTrack(track.url)}
            className="p-3 border border-white/10 rounded-lg cursor-pointer hover:border-white/40 transition"
          >
            {track.title}
          </div>
        ))}
      </div>

      {/* Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 p-4">
          <audio controls autoPlay src={currentTrack} className="w-full" />
        </div>
      )}
    </div>
  );
}
