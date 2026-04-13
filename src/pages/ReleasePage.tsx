import { useParams } from "react-router-dom";
import { RELEASES } from "../constants/data";

export default function ReleasePage() {
  const { slug } = useParams();
  const release = RELEASES.find((r) => r.slug === slug);

  if (!release) {
    return <div className="p-10 text-white">Release not found</div>;
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-6xl mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-4">{release.title}</h1>
          <p className="mb-2">{release.artist}</p>
          <p className="mb-6">
            {release.type} • {release.date}
          </p>

          <img
            src={release.cover}
            alt={`${release.title} cover art`}
            className="w-full max-w-md rounded-xl mb-6"
          />

          <p className="mb-6">
            {release.description ?? "Description coming soon."}
          </p>

          <h2 className="text-2xl font-semibold mb-3">Tracklist</h2>

          {release.tracks?.length ? (
            <ul className="space-y-2">
              {release.tracks.map((track) => (
                <li key={track.id}>{track.title}</li>
              ))}
            </ul>
          ) : (
            <p>No tracks yet.</p>
          )}
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-white/70 mb-4">Listen</p>

            {release.tracks?.length ? (
              <div className="space-y-4">
                {release.tracks.map((track) => (
                  <div key={track.id}>
                    <p className="mb-2 text-sm font-medium">{track.title}</p>
                    <audio controls className="w-full">
                      <source src={`/${track.audioSrc}`} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ))}
              </div>
            ) : (
              <p>No audio available yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}