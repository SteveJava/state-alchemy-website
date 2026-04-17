import { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "./ui/Base";
import { MediaCard } from "./Mediacard";
import { ARTISTS, RELEASES, EVENTS } from "../constants/data";
import { Instagram, Music, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MARQUEE_ITEMS = [
  "PSYTRANCE", "UNDERGROUND", "SONIC ALCHEMY", "SINCE 2023",
  "EXPERIMENTAL", "PSYCHEDELIC", "DARK FOREST", "ELECTRONIC FREQUENCY",
  "FULL POWER", "STATE ALCHEMY", "BASS FREQUENCY", "THE UNDERGROUND",
];

export const MarqueeBand = () => (
  <div
    className="overflow-hidden py-5"
    style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
  >
    <div className="flex w-max animate-marquee">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 text-xs font-display uppercase tracking-[0.3em] text-brand-text-muted">
            {item}
          </span>
          <span className="text-brand-primary/40">·</span>
        </span>
      ))}
    </div>
  </div>
);

export const StatsBand = () => {
  const stats = [
    { value: String(ARTISTS.length), label: "Artists" },
    { value: `${RELEASES.length}+`, label: "Releases" },
    { value: String(EVENTS.length), label: "Events" },
    { value: "2023", label: "Founded" },
  ];

  return (
    <div className="py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold font-display text-brand-primary">{value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-brand-text-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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

  if (!featuredOnly) {
    return (
      <Section id="artists" title={category ? `${category} Acts` : "The Alchemists"}>
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
                      <a href={artist.socials.instagram} target="_blank" rel="noreferrer" aria-label={`${artist.name} on Instagram`} className="hover:text-brand-primary transition-colors">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {artist.socials.soundcloud && artist.socials.soundcloud !== "#" && (
                      <a href={artist.socials.soundcloud} target="_blank" rel="noreferrer" aria-label={`${artist.name} on SoundCloud`} className="hover:text-brand-primary transition-colors">
                        <Music className="w-4 h-4" />
                      </a>
                    )}
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      </Section>
    );
  }

  const [hero, ...rest] = displayArtists;

  return (
    <Section id="artists" title="Featured Alchemists">
      {/* Hero spotlight card */}
      {hero && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <Link to={`/artists/${hero.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
                <div className="relative min-h-[280px] md:min-h-[420px] overflow-hidden">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>

                <div className="relative flex flex-col justify-center p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-primary/80 mb-4">
                    Featured Alchemist
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-2">{hero.name}</h3>
                  <p className="text-sm text-brand-text-muted mb-5">{hero.genres.join(" · ")}</p>
                  <p className="text-brand-text-muted leading-relaxed mb-8">{hero.bio}</p>
                  <div className="flex items-center gap-4">
                    {hero.socials.instagram && hero.socials.instagram !== "#" && (
                      <a
                        href={hero.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${hero.name} on Instagram`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/60 hover:text-brand-primary transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {hero.socials.soundcloud && hero.socials.soundcloud !== "#" && (
                      <a
                        href={hero.socials.soundcloud}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${hero.name} on SoundCloud`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/60 hover:text-brand-primary transition-colors"
                      >
                        <Music className="w-5 h-5" />
                      </a>
                    )}
                    <span className="ml-auto inline-flex items-center gap-2 text-sm text-white/50 transition-all duration-300 group-hover:text-white">
                      View Artist
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Overlay grid for remaining artists */}
      {rest.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {rest.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Link to={`/artists/${artist.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 rounded border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
                    {artist.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="truncate font-semibold text-white transition-colors group-hover:text-brand-primary">
                      {artist.name}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-white/60">{artist.genres[0]}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      <SectionLinkButton to="/artists" />
    </Section>
  );
};

export const ReleasesSection = ({ type, limit }: ReleasesSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? scrollRef.current.clientWidth * 0.75 : -scrollRef.current.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <section id="releases" className="py-20">
      <div className="px-6 max-w-7xl mx-auto mb-8 flex items-end justify-between">
        <div>
          <p className="text-brand-primary font-display text-sm uppercase tracking-widest mb-2">The Archive</p>
          <h2 className="text-4xl md:text-5xl font-bold">{getTitle()}</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4 overscroll-x-contain"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {displayReleases.map((release) => (
          <Link
            key={release.id}
            to={`/releases/${release.slug}`}
            className="group flex-shrink-0 w-[360px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
              <img
                src={release.cover}
                alt={release.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute top-3 left-3 rounded backdrop-blur-sm border border-brand-primary/40 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-widest text-brand-primary">
                {release.type}
              </span>
            </div>
            <p className="truncate font-semibold text-white transition-colors group-hover:text-brand-primary">
              {release.title}
            </p>
            <p className="mt-0.5 truncate text-sm text-brand-text-muted">{release.artist}</p>
            <p className="mt-0.5 text-xs text-brand-text-muted/60">{release.date}</p>
          </Link>
        ))}
      </div>

      {limit && (
        <div className="px-6 max-w-7xl mx-auto">
          <SectionLinkButton to="/releases" />
        </div>
      )}
    </section>
  );
};

const formatEventDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const EventsSection = ({ limit }: EventsSectionProps) => {
  let displayEvents = [...EVENTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (limit) {
    displayEvents = displayEvents.slice(0, limit);
  }

  const [spotlight, ...rest] = displayEvents;

  return (
    <Section id="events" title="Rituals">
      <div className="flex flex-col gap-4">

        {/* Spotlight — most recent event */}
        {spotlight && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to={`/events/${spotlight.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl min-h-[360px] md:min-h-[460px]">
                <img
                  src={spotlight.image}
                  alt={spotlight.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                <div className="absolute top-6 left-6">
                  <span className="rounded border border-brand-secondary/40 bg-black/60 px-3 py-1.5 text-xs uppercase tracking-widest text-brand-secondary backdrop-blur-sm">
                    {formatEventDate(spotlight.date)}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-secondary/80">
                    Latest Ritual
                  </p>
                  <h3 className="mb-3 max-w-2xl text-2xl font-bold md:text-4xl">
                    {spotlight.title}
                  </h3>
                  <span className="flex items-center gap-1.5 text-sm text-white/70">
                    <MapPin className="w-4 h-4 text-brand-secondary" />
                    {spotlight.venue}, {spotlight.location}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Remaining events */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/events/${event.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl min-h-[220px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="rounded border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
                        {formatEventDate(event.date)}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="mb-1 font-bold text-white transition-colors line-clamp-2 group-hover:text-brand-secondary">
                        {event.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-white/60">
                        <MapPin className="w-3 h-3" />
                        {event.venue}, {event.location}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {limit && <SectionLinkButton to="/events" />}
    </Section>
  );
};

const LABEL_VALUES = [
  { label: "Boundary-Free", desc: "No limits on sonic exploration or artistic expression." },
  { label: "The Ritual", desc: "Music as ceremony — the dancefloor as sacred space." },
  { label: "Underground", desc: "Born in the shadows, grown by the collective." },
  { label: "Collective", desc: "Individual egos dissolved into a vibrating whole." },
];

export const AboutSection = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-brand-primary/80 mb-6">About Us</p>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-5xl">
        A vessel for{" "}
        <span className="text-gradient">sonic exploration</span>
        {" "}born from the underground.
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
          State Alchemy is more than a label — it is a vessel for sonic exploration. Born from the
          shadows of the underground, we seek to bridge the gap between the physical and the
          metaphysical through the medium of electronic frequency.
        </p>
        <p className="text-brand-text-muted leading-relaxed">
          Our mission is to curate a space where artists can experiment without boundaries, pushing
          the limits of hypnotic techno and psychedelic soundscapes. We believe in the ritual of
          the dancefloor — a collective state of alchemy where individual egos dissolve into a
          singular, vibrating whole.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        {LABEL_VALUES.map(({ label, desc }, i) => (
          <div key={label} className="flex gap-5 items-start">
            <span className="text-brand-primary/40 font-display text-sm tabular-nums mt-0.5 shrink-0">
              0{i + 1}
            </span>
            <div>
              <p className="font-display font-semibold text-white mb-1">{label}</p>
              <p className="text-sm text-brand-text-muted leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);