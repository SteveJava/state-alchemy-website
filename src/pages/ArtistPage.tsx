import { useParams } from "react-router-dom";
import { ARTISTS } from "../constants/data";
import { Instagram, Music } from "lucide-react";
import { PageContainer } from "../components/layout/PageContainer";

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
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full max-w-xl rounded-xl mb-6"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-brand-primary mb-2">
            {artist.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {artist.name}
          </h1>

          <p className="text-brand-text-muted text-sm mb-4">
            {artist.genres.join(", ")}
          </p>

          <p className="text-brand-text-muted leading-relaxed mb-6">
            {artist.bio}
          </p>

          <div className="flex gap-4">
            {artist.socials.instagram && artist.socials.instagram !== "#" && (
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-primary transition-colors"
                aria-label={`${artist.name} on Instagram`}
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}

            {artist.socials.soundcloud && artist.socials.soundcloud !== "#" && (
              <a
                href={artist.socials.soundcloud}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-primary transition-colors"
                aria-label={`${artist.name} on SoundCloud`}
              >
                <Music className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}