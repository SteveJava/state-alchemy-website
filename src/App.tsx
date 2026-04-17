import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import Layout from "./components/layout/Layout";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const Artists = lazy(() => import("./pages/Artists"));
const ReleasesPage = lazy(() => import("./pages/ReleasesPage"));
const ReleasePage = lazy(() => import("./pages/ReleasePage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const ArtistPage = lazy(() => import("./pages/ArtistPage"));
const EventPage = lazy(() => import("./pages/EventPage"));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <AudioPlayerProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artists/:slug" element={<ArtistPage />} />
              <Route path="/releases" element={<ReleasesPage />} />
              <Route path="/releases/:slug" element={<ReleasePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:slug" element={<EventPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </AudioPlayerProvider>
  );
}

export default App;
