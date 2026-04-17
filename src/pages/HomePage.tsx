import { Hero } from "../components/Hero";
import { ArtistsSection, ReleasesSection, EventsSection, AboutSection, MarqueeBand, StatsBand } from "../components/Sections";

const Divider = () => (
  <div className="px-6 max-w-5xl mx-auto">
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ReleasesSection />
      <StatsBand />
      <Divider />
      <ArtistsSection featuredOnly={true} />
      <Divider />
      <EventsSection limit={3} />
      <Divider />
      <AboutSection />
    </>
  );
};
