import { Instagram, Facebook, Music, Disc, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-brand-bg border-t border-white/5 py-12">
      <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-2 mb-6 group">
            <img
              src="images/SAM.png"
              alt="State Alchemy Logo"
              className="w-8 h-8 object-contain group-hover:rotate-180 transition-transform duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/alchemy-logo/100/100";
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

          <p className="text-brand-text-muted max-w-sm mx-auto md:mx-0">
            A new-age music collective that was born through the love of the Psychedelic scene and culture.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 justify-self-center">
          <div className="flex flex-col items-start">
            <h4 className="font-display uppercase tracking-widest text-sm mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-brand-text-muted text-sm text-left">
              <li className="flex items-center h-4">
                <Link to="/" className="hover:text-brand-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center h-4">
                <Link to="/artists" className="hover:text-brand-primary transition-colors">
                  Artists
                </Link>
              </li>
              <li className="flex items-center h-4">
                <Link to="/releases" className="hover:text-brand-primary transition-colors">
                  Music
                </Link>
              </li>
              <li className="flex items-center h-4">
                <Link to="/events" className="hover:text-brand-primary transition-colors">
                  Events
                </Link>
              </li>
              <li className="flex items-center h-4">
                <Link to="/contact" className="hover:text-brand-primary transition-colors">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-display uppercase tracking-widest text-sm mb-6">
              Contact
            </h4>

            <ul className="space-y-3 text-brand-text-muted text-sm">
              <li className="flex items-center justify-start gap-2">
                <a
                  href="mailto:statealchemyofficial@gmail.com"
                  className="flex items-center gap-2 hover:text-brand-primary transition-colors break-all"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/statealchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start gap-2 hover:text-brand-primary transition-colors"
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
                  className="flex items-center justify-start gap-2 hover:text-brand-primary transition-colors"
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
                  className="flex items-center justify-start gap-2 hover:text-brand-primary transition-colors"
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
                  className="flex items-center justify-start gap-2 hover:text-brand-primary transition-colors"
                >
                  <Disc className="w-4 h-4" />
                  Bandcamp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-text-muted">
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