import { Hero } from "../components/Hero";
import { ArtistsSection, ReleasesSection, EventsSection, AboutSection } from "../components/Sections";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ArtistsSection featuredOnly={true} />
      <ReleasesSection limit={6} />
      <EventsSection limit={3}/>
      <AboutSection />
    </>
  );
};
