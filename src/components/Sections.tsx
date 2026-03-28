import { motion } from "motion/react";
import { Section, Card, Button } from "./ui/Base";
import { ARTISTS, RELEASES, EVENTS } from "../constants/data";
import { Instagram, Music, ExternalLink, MapPin, Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArtistsSectionProps {
  featuredOnly?: boolean;
  category?: 'Live' | 'DJ';
}

export const ArtistsSection = ({ featuredOnly = false, category }: ArtistsSectionProps) => {
  let displayArtists = featuredOnly ? ARTISTS.filter(a => a.featured) : ARTISTS;
  
  if (category) {
    displayArtists = displayArtists.filter(a => a.category === category);
  }

  return (
    <Section 
      id="artists" 
      title={category ? `${category} Acts` : (featuredOnly ? "Featured Alchemists" : "The Alchemists")} 
      subtitle={category ? "Roster" : (featuredOnly ? "Featured Artists" : "Full Roster")}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayArtists.map((artist, idx) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold">{artist.name}</h3>
                    <p className="text-xs text-brand-primary uppercase tracking-widest">{artist.genres[0]}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {artist.socials.instagram && <Instagram className="w-4 h-4 cursor-pointer hover:text-brand-primary" />}
                    {artist.socials.soundcloud && <Music className="w-4 h-4 cursor-pointer hover:text-brand-primary" />}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {featuredOnly && (
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/live-acts">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View Live Acts <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/dj-acts">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View DJ Acts <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </Section>
  );
};

interface ReleasesSectionProps {
  type?: 'Album' | 'EP' | 'Single' | 'Compilation';
  limit?: number;
}

export const ReleasesSection = ({ type, limit }: ReleasesSectionProps) => {
  let displayReleases = type ? RELEASES.filter(r => r.type === type) : RELEASES;
  
  if (limit) {
    displayReleases = displayReleases.slice(0, limit);
  }

  const getTitle = () => {
    if (type === 'Album') return "Full Length Journeys";
    if (type === 'EP') return "Extended Plays";
    if (type === 'Single') return "Sonic Fragments";
    if (type === 'Compilation') return "Collective Artifacts";
    return "Sonic Artifacts";
  };

  const getSubtitle = () => {
    if (type === 'Album') return "Albums";
    if (type === 'EP') return "EPs";
    if (type === 'Single') return "Singles";
    if (type === 'Compilation') return "Various Artists / Compilations";
    return "Releases";
  };

  return (
    <Section id="releases" title={getTitle()} subtitle={getSubtitle()} className="bg-white/[0.02]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayReleases.map((release, idx) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full flex flex-col">
              <div className="aspect-square overflow-hidden relative flex-shrink-0">
                <img 
                  src={release.cover} 
                  alt={release.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="primary" className="flex items-center gap-2">
                    Listen <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-brand-primary/30 rounded text-brand-primary">
                      {release.type}
                    </span>
                    <span className="text-xs text-brand-text-muted">{release.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{release.title}</h3>
                  <p className="text-brand-text-muted text-sm">{release.artist}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {limit && (
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/albums">
            <Button variant="outline" className="flex items-center gap-2">
              Albums <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/eps">
            <Button variant="outline" className="flex items-center gap-2">
              EPs <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/singles">
            <Button variant="outline" className="flex items-center gap-2">
              Singles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/compilations">
            <Button variant="outline" className="flex items-center gap-2">
              Compilations <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </Section>
  );
};

export const EventsSection = () => (
  <Section id="events" title="Rituals" subtitle="Upcoming Events">
    <div className="space-y-4">
      {EVENTS.map((event, idx) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="glass group p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center hover:border-brand-secondary/30 transition-all duration-500">
            <div className="w-full md:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold mb-1 group-hover:text-brand-secondary transition-colors">{event.title}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-brand-text-muted">
                <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-brand-secondary" /> {event.date}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-brand-secondary" /> {event.venue}, {event.location}</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10">
              Tickets
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const AboutSection = () => (
  <Section id="about" title="The Essence" subtitle="About Us" className="text-center max-w-3xl">
    <p className="text-xl text-brand-text-muted leading-relaxed mb-8">
      State Alchemy is more than a label; it is a vessel for sonic exploration. Born from the shadows of the underground, we seek to bridge the gap between the physical and the metaphysical through the medium of electronic frequency.
    </p>
    <p className="text-brand-text-muted leading-relaxed">
      Our mission is to curate a space where artists can experiment without boundaries, pushing the limits of hypnotic techno and psychedelic soundscapes. We believe in the ritual of the dancefloor—a collective state of alchemy where individual egos dissolve into a singular, vibrating whole.
    </p>
  </Section>
);
