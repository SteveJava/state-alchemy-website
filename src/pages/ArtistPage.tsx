import { useParams } from "react-router-dom";
import { ARTISTS } from "../constants/data";

export default function ArtistPage() {
  const { id } = useParams();
  const artist = ARTISTS.find((a) => a.id === id);

  if (!artist) return <div className="p-10">Not found</div>;

  return (
    <div className="min-h-screen p-10 max-w-4xl mx-auto">

      {/* Header Image */}
      <img
        src={artist.image}
        className="w-full max-w-md rounded-xl mb-6"
        alt={artist.name}
      />

      {/* Name */}
      <h1 className="text-3xl font-bold">
        {artist.name}
      </h1>

      {/* Category */}
      <p className="text-brand-text-muted mt-1">
        {artist.category}
      </p>

      {/* Bio */}
      <p className="mt-6 text-white/70 leading-relaxed">
        {artist.bio}
      </p>

      {/* Genres */}
      <div className="mt-6 text-sm text-white/60">
        Genres: {artist.genres.join(", ")}
      </div>

      {/* Socials (optional but future-proof) */}
      <div className="mt-8 flex gap-4 text-sm text-brand-primary">
        {artist.socials?.instagram && (
          <a href={artist.socials.instagram} target="_blank">
            Instagram
          </a>
        )}

        {artist.socials?.soundcloud && (
          <a href={artist.socials.soundcloud} target="_blank">
            SoundCloud
          </a>
        )}

        {artist.socials?.spotify && (
          <a href={artist.socials.spotify} target="_blank">
            Spotify
          </a>
        )}
      </div>
    </div>
  );
}
