import { Instagram, Facebook, Music, Disc, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-brand-bg border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <img
              src="images/SAM.png"
              alt="State Alchemy Logo"
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/alchemy-logo/100/100";
              }}
            />
            <span className="font-display text-2xl font-bold tracking-tighter uppercase">
              State Alchemy
            </span>
          </div>

          <p className="text-brand-text-muted max-w-sm mx-auto md:mx-0">
            Transmuting sound into transcendental experiences. Join our journey through the deep frequencies of the underground.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2 text-center sm:text-left">
          <div>
            <h4 className="font-display uppercase tracking-widest text-sm mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-brand-text-muted text-sm">
              <li>
                <Link to="/" className="hover:text-brand-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/artists" className="hover:text-brand-primary transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/releases" className="hover:text-brand-primary transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-brand-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm mb-6">
              Contact
            </h4>

            <ul className="space-y-3 text-brand-text-muted text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="mailto:statealchemyofficial@gmail.com"
                  className="flex items-center gap-2 hover:text-brand-primary transition-colors break-all"
                >
                  <Mail className="w-4 h-4" />
                  statealchemyofficial@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/statealchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-brand-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com/StateAlchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-brand-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://soundcloud.com/statealchemymusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-brand-primary transition-colors"
                >
                  <Music className="w-4 h-4" />
                  SoundCloud
                </a>
              </li>

              <li>
                <a
                  href="https://statealchemymusic.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-brand-primary transition-colors"
                >
                  <Disc className="w-4 h-4" />
                  Bandcamp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-text-muted">
        <p>© 2026 State Alchemy Records. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-text transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-brand-text transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};