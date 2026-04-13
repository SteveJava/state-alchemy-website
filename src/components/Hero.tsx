import { motion } from "framer-motion";
import { Button } from "./ui/Base";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          {/* Placeholder for the logo mandala */}
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative">
             <div className="absolute inset-0 border-2 border-brand-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-4 border-2 border-brand-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute inset-8 border-2 border-brand-accent-pink/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <img 
               src="images/SAM.png" //logo 
               alt="State Alchemy Logo" 
               className="w-full h-full object-contain relative z-10"
               onError={(e) => {
                 // Fallback if the logo URL isn't accessible directly
                 e.currentTarget.src = "https://picsum.photos/seed/alchemy-logo/200/200";
               }}
             />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight uppercase leading-[1.1]"
        >
          State <span className="text-gradient">Alchemy</span> Music
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-brand-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A Psychedelic Trance Record Label that was launched in 2023 through an undying love and passion for psychedelic music and culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#releases">
            <Button className="flex items-center gap-2 group">
              Explore Releases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#artists">
            <Button variant="outline">Our Artists</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
