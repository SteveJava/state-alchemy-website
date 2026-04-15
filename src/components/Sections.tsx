import { motion } from "framer-motion";
import { Section } from "./ui/Base";
import { MediaCard } from "./Mediacard";
import { ARTISTS, RELEASES, EVENTS } from "../constants/data";
import { Instagram, Music, MapPin, Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArtistsSectionProps {
  featuredOnly?: boolean;
  category?: "Live" | "DJ";
}

interface ReleasesSectionProps {
  type?: "Album" | "EP" | "Single" | "Compilation";
  limit?: number;
}

interface EventsSectionProps {
  limit?: number;
}

const SectionLinkButton = ({ to }: { to: string }) => (
  <div className="mt-12 flex justify-center">
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-white/[0.03] px-6 py-3 text-sm font-medium text-brand-text backdrop-blur-md transition-all duration-300 hover:border-brand-primary/60 hover:bg-brand-primary/10 hover:text-brand-primary hover:shadow-[0_0_30px_rgba(255,120,40,0.12)]"
    >
      <span>See more</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </div>
);

export const ArtistsSection = ({ featuredOnly = false, category }: ArtistsSectionProps) => {
  let displayArtists = featuredOnly ? ARTISTS.filter((a) => a.featured) : ARTISTS;

  if (category) {
    displayArtists = displayArtists.filter((a) => a.category === category);
  }

  return (
    <Section
      id="artists"
      title={category ? `${category} Acts` : featuredOnly ? "Featured Alchemists" : "The Alchemists"}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayArtists.map((artist, idx) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <MediaCard
              image={artist.image}
              title={artist.name}
              subtitle={artist.genres.join(", ")}
              metaLeft={artist.category}
              link={`/artists/${artist.slug}`}
              footer={
                <>
                  {artist.socials.instagram && artist.socials.instagram !== "#" && (
                    <a
                      href={artist.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${artist.name} on Instagram`}
                      className="hover:text-brand-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {artist.socials.soundcloud && artist.socials.soundcloud !== "#" && (
                    <a
                      href={artist.socials.soundcloud}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${artist.name} on SoundCloud`}
                      className="hover:text-brand-primary transition-colors"
                    >
                      <Music className="w-4 h-4" />
                    </a>
                  )}
                </>
              }
            />
          </motion.div>
        ))}
      </div>

      {featuredOnly && <SectionLinkButton to="/artists" />}
    </Section>
  );
};

export const ReleasesSection = ({ type, limit }: ReleasesSectionProps) => {
  let displayReleases = type ? RELEASES.filter((r) => r.type === type) : RELEASES;
  displayReleases = [...displayReleases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (limit) {
    displayReleases = displayReleases.slice(0, limit);
  }

  const getTitle = () => {
    if (type === "Album") return "Full Length Journeys";
    if (type === "EP") return "Extended Plays";
    if (type === "Single") return "Sonic Fragments";
    if (type === "Compilation") return "Collective Artifacts";
    return "Latest Releases";
  };

  return (
    <Section id="releases" title={getTitle()} className="bg-white/[0.02]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayReleases.map((release, idx) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <MediaCard
              image={release.cover}
              title={release.title}
              subtitle={release.artist}
              metaLeft={release.type}
              metaRight={release.date}
              link={`/releases/${release.slug}`}
            />
          </motion.div>
        ))}
      </div>

      {limit && <SectionLinkButton to="/releases" />}
    </Section>
  );
};

export const EventsSection = ({ limit }: EventsSectionProps) => {
  let displayEvents = [...EVENTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (limit) {
    displayEvents = displayEvents.slice(0, limit);
  }

  return (
    <Section id="events" title="Rituals">
      <div className="space-y-4">
      {displayEvents.map((event, idx) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <Link to={`/events/${event.slug}`}>
            <div className="glass group p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center hover:border-brand-secondary/30 transition-all duration-500">
              <div className="w-full md:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold mb-1 group-hover:text-brand-secondary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-brand-text-muted">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4 text-brand-secondary" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-brand-secondary" /> {event.venue}, {event.location}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
))}
      </div>

      {limit && <SectionLinkButton to="/events" />}
    </Section>
  );
};

export const AboutSection = () => (
  <Section id="about" title="The Essence" subtitle="About Us" className="text-center max-w-3xl">
    <p className="text-xl text-brand-text-muted leading-relaxed mb-8">
      State Alchemy is more than a label; it is a vessel for sonic exploration. Born from the shadows
      of the underground, we seek to bridge the gap between the physical and the metaphysical through
      the medium of electronic frequency.
    </p>
    <p className="text-brand-text-muted leading-relaxed">
      Our mission is to curate a space where artists can experiment without boundaries, pushing the
      limits of hypnotic techno and psychedelic soundscapes. We believe in the ritual of the
      dancefloor—a collective state of alchemy where individual egos dissolve into a singular,
      vibrating whole.
    </p>
  </Section>
);