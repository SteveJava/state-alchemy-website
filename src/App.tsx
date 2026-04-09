import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import Artists from "./pages/Artists";
import ReleasesPage from "./pages/ReleasesPage";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Router>
      <ScrollToTop />

      <div className="relative min-h-screen selection:bg-brand-primary/30 selection:text-white">
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/releases" element={<ReleasesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
