import { ArtistsSection } from "../components/Sections";
import { motion } from "motion/react";

export const DJActsPage = () => {
  return (
    <div className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">DJ <span className="text-gradient">Acts</span></h1>
        <p className="text-brand-text-muted max-w-2xl mx-auto px-6">
          Curators of the deep, the hypnotic, and the relentless.
        </p>
      </motion.div>
      
      <ArtistsSection category="DJ" />
      
      <div className="py-20 bg-white/[0.02] text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Join the Collective</h2>
        <p className="text-brand-text-muted max-w-xl mx-auto mb-8">
          Are you an artist pushing the limits of sound? We are always looking for new frequencies to add to our alchemy.
        </p>
        <a href="mailto:demo@statealchemy.com" className="text-brand-primary hover:underline font-display uppercase tracking-widest text-sm">
          Submit Demos
        </a>
      </div>
    </div>
  );
};
