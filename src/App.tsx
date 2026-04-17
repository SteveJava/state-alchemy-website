import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/layout/Layout";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

import { HomePage } from "./pages/HomePage";
import Artists from "./pages/Artists";
import ReleasesPage from "./pages/ReleasesPage";
import ReleasePage from "./pages/ReleasePage";
import EventsPage from "./pages/EventsPage";

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
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/releases" element={<ReleasesPage />} />
            <Route path="/releases/:slug" element={<ReleasePage />} />
            <Route path="/events" element={<EventsPage />} />
          </Route>
        </Routes>
      </Router>
    </AudioPlayerProvider>
  );
}

export default App;