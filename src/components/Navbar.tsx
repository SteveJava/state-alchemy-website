import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { 
    name: 'Artists', 
    href: '#',
    subLinks: [
      { name: 'Live Acts', href: '/live-acts' },
      { name: 'DJ Acts', href: '/dj-acts' },
    ]
  },
  { 
    name: 'Releases', 
    href: '#',
    subLinks: [
      { name: 'Albums', href: '/albums' },
      { name: 'EPs', href: '/eps' },
      { name: 'Singles', href: '/singles' },
      { name: 'Compilations', href: '/compilations' },
    ]
  },
  { name: 'Events', href: '/#events' },
  { name: 'About', href: '/#about' },
];

import { AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    if (href === '#') return;
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Backdrop Blur Overlay */}
      <AnimatePresence>
        {(activeDropdown || isOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 pointer-events-auto"
            onClick={() => {
              setActiveDropdown(null);
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => handleLinkClick('/')}>
          <img 
            src="/images/SAM.png" 
            alt="State Alchemy Logo" 
            className="w-8 h-8 object-contain group-hover:rotate-180 transition-transform duration-700"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/alchemy-logo/100/100";
            }}
          />
          <span className="font-display text-xl font-bold tracking-tighter uppercase">State Alchemy</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative group/dropdown"
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.subLinks ? (
                <button
                  className="text-sm font-display uppercase tracking-widest text-brand-text-muted hover:text-brand-primary transition-colors flex items-center gap-1"
                >
                  {link.name} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm font-display uppercase tracking-widest text-brand-text-muted hover:text-brand-primary transition-colors"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.subLinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 glass border border-white/5 rounded-xl overflow-hidden py-2"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-4 py-2 text-[10px] font-display uppercase tracking-widest text-brand-text-muted hover:text-brand-primary hover:bg-white/5 transition-all"
                          onClick={() => handleLinkClick(sub.href)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-text" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/5 flex flex-col p-6 gap-6 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                {link.subLinks ? (
                  <>
                    <span className="text-lg font-display uppercase tracking-widest text-brand-text-muted border-b border-white/5 pb-2">
                      {link.name}
                    </span>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => handleLinkClick(sub.href)}
                        className="text-sm font-display uppercase tracking-widest text-brand-text-muted hover:text-brand-primary transition-colors pl-4"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-lg font-display uppercase tracking-widest text-brand-text-muted hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};
