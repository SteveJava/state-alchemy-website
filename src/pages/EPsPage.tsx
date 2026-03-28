import { ReleasesSection } from "../components/Sections";
import { motion } from "motion/react";

export const EPsPage = () => {
  return (
    <div className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">Extended <span className="text-gradient">Plays</span></h1>
        <p className="text-brand-text-muted max-w-2xl mx-auto px-6">
          Focused explorations of specific sonic themes and textures.
        </p>
      </motion.div>
      
      <ReleasesSection type="EP" />
    </div>
  );
};
