import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Music", href: "/releases" },
  { name: "Events", href: "/events" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={handleLinkClick}
          >
            <img
              src="/images/SAM.png"
              alt="State Alchemy Logo"
              className="w-8 h-8 object-contain group-hover:rotate-180 transition-transform duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  "https://picsum.photos/seed/alchemy-logo/100/100";
              }}
            />
            <span className="whitespace-nowrap font-display text-xl font-bold tracking-tighter uppercase">
              State{" "}
              <span className="text-gradient group-hover:brightness-125 transition">
                Alchemy
              </span>{" "}
              Music
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-display uppercase tracking-widest transition-colors ${
                  location.pathname === link.href
                    ? "text-brand-primary"
                    : "text-brand-text-muted hover:text-brand-primary"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full glass border-t border-white/5 flex flex-col p-6 gap-6 md:hidden max-h-[80vh] overflow-y-auto"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg font-display uppercase tracking-widest transition-colors ${
                    location.pathname === link.href
                      ? "text-brand-primary"
                      : "text-brand-text-muted hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};