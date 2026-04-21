import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section } from "./ui/Base";
import { MediaCard } from "./Mediacard";
import { SkeletonImage } from "./ui/SkeletonImage";
import { ARTISTS } from "../constants/artists";
import { RELEASES } from "../constants/releases";
import { EVENTS } from "../constants/events";
import { Instagram, Music, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  let displayArtists = (category ? ARTISTS.filter((a) => a.category === category) : ARTISTS)
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (!featuredOnly) return;
    const interval = setInterval(() => {
      if (paused || !scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 284, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredOnly, paused]);

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

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 284 : -284, behavior: "smooth" });
  };

  return (
    <section id="artists" className="py-20">
      <div className="px-6 md:px-10 mb-8 flex items-end justify-between">
        <div>
          <p className="text-brand-primary font-display text-sm uppercase tracking-widest mb-2">The Artists</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Alchemists</h2>
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

      <div className="ml-6 md:ml-10">
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 overscroll-x-contain"
          style={{
            scrollSnapType: "x mandatory",
            maskImage: "linear-gradient(to right, black, black calc(100% - 80px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, black calc(100% - 80px), transparent)",
          }}
        >
          {displayArtists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artists/${artist.slug}`}
              className="group flex-shrink-0 w-[72vw] sm:w-[300px] lg:w-[360px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <SkeletonImage
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="truncate text-center text-xl font-bold text-white">
                    {artist.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10">
        <SectionLinkButton to="/artists" />
      </div>
    </section>
  );
};

export const ReleasesSection = ({ type, limit }: ReleasesSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (paused || !scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 484, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

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
      <div className="px-6 md:px-10 mb-8 flex items-end justify-between">
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

      <div className="ml-6 md:ml-10">
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 overscroll-x-contain"
          style={{
            scrollSnapType: "x mandatory",
            maskImage: "linear-gradient(to right, black, black calc(100% - 80px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, black calc(100% - 80px), transparent)",
          }}
        >
        {displayReleases.map((release) => (
          <Link
            key={release.id}
            to={`/releases/${release.slug}`}
            className="group flex-shrink-0 w-[78vw] sm:w-[360px] lg:w-[460px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <article className="relative overflow-hidden rounded-md">
              <div className="relative aspect-square overflow-hidden">
                <SkeletonImage
                  src={release.cover}
                  alt={release.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                  <p className="text-xl font-bold text-white">{release.title}</p>
                  <p className="mt-1 text-sm text-white/70">{release.artist}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
        </div>
      </div>

      <div className="px-6 md:px-10">
        <SectionLinkButton to="/releases" />
      </div>
    </section>
  );
};


export const EventsSection = ({ limit }: EventsSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  let displayEvents = [...EVENTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (limit) {
    displayEvents = displayEvents.slice(0, limit);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (paused || !scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 540, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 540 : -540,
      behavior: "smooth",
    });
  };

  return (
    <section id="events" className="py-20">
      <div className="px-6 md:px-10 mb-8 flex items-end justify-between">
        <div>
          <p className="text-brand-primary font-display text-sm uppercase tracking-widest mb-2">The Rituals</p>
          <h2 className="text-4xl md:text-5xl font-bold">Rituals</h2>
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

      <div className="ml-6 md:ml-10">
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 overscroll-x-contain"
          style={{
            scrollSnapType: "x mandatory",
            maskImage: "linear-gradient(to right, black, black calc(100% - 80px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, black calc(100% - 80px), transparent)",
          }}
        >
          {displayEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.slug}`}
              className="group flex-shrink-0 w-[85vw] sm:w-[440px] lg:w-[520px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <article className="relative overflow-hidden rounded-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SkeletonImage
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                    <p className="text-xl font-bold text-white">{event.title}</p>
                    <p className="mt-1 text-sm text-white/70">{event.venue}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10">
        <SectionLinkButton to="/events" />
      </div>
    </section>
  );
};

const LABEL_VALUES = [
  { label: "Boundary-Free", desc: "No limits on sonic exploration or artistic expression." },
  { label: "The Ritual", desc: "Music as ceremony — the dancefloor as sacred space." },
  { label: "Underground", desc: "Born in the shadows, grown by the collective." },
  { label: "Collective", desc: "Individual egos dissolved into a vibrating whole." },
];

export const AboutSection = () => (
  <section id="about" className="py-24 px-6 md:px-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 flex flex-col items-center"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-brand-primary/80 mb-6">About Us</p>
      <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-10">
        A vessel for{" "}
        <span className="text-gradient">sonic exploration</span>
        {" "}born from the underground.
      </h2>
      <p className="text-lg text-brand-text-muted leading-relaxed max-w-xl mb-4">
        A Psychedelic Trance Record Label that was launched in 2023 through an undying love and passion for psychedelic music and culture.
        The State Alchemy Project was created by Alexandros with the intention to throw High Scale Psytrance events throughout Cape Town.
      </p>
      <p className="text-base md:text-lg text-brand-text-muted leading-relaxed max-w-xl">
        After 4 years, the idea evolved and shaped, discussions were had between some integral members of the South African psytrance scene,
        thus leading to the creation of S.A.M.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 mt-4"
    >
      {LABEL_VALUES.map(({ label, desc }, i) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <span className="text-brand-primary/40 font-display text-sm tabular-nums">
            0{i + 1}
          </span>
          <p className="font-display font-semibold text-white">{label}</p>
          <p className="text-sm text-brand-text-muted leading-relaxed">{desc}</p>
        </div>
      ))}
    </motion.div>
  </section>
);