import { Hero } from "../components/Hero";
import { ArtistsSection, ReleasesSection, EventsSection, AboutSection } from "../components/Sections";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ReleasesSection limit={6} />
      <ArtistsSection featuredOnly={true} />
      <EventsSection limit={3}/>
      <AboutSection />
    </>
  );
};
