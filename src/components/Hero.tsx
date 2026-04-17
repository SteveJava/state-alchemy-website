import { motion } from "framer-motion";
import { Button } from "./ui/Base";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/home-banner.webp" type="image/webp" />
          <img
            src="/images/home-banner.jpg"
            alt="State Alchemy event atmosphere"
            className="w-full h-full object-cover object-center scale-105"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-black/45 to-black/75" />

      {/* Background glow elements */}
      <div className="absolute inset-0 z-[3]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative">
            <div aria-hidden="true" className="absolute inset-0 border-2 border-brand-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div aria-hidden="true" className="absolute inset-4 border-2 border-brand-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div aria-hidden="true" className="absolute inset-8 border-2 border-brand-accent-pink/20 rounded-full animate-[spin_20s_linear_infinite]" />

            <motion.img
              src="/images/SAM.png"
              alt="State Alchemy Logo"
              className="w-full h-full object-contain relative z-10 cursor-pointer"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              whileHover={{ scale: 1.05 }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://picsum.photos/seed/alchemy-logo/200/200";
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight uppercase leading-[1.15] pb-1"
        >
          State <span className="text-gradient">Alchemy</span> Music
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A Psychedelic Trance Record Label launched in 2023 through an undying
          love and passion for psychedelic music and culture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/releases">
            <Button className="flex items-center gap-2 group hover:scale-105 transition-transform">
              Explore Releases
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to="/artists">
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform"
            >
              Our Artists
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};