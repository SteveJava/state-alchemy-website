import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { PageContainer } from "../components/layout/PageContainer";
import { ARTISTS } from "../constants/artists";

const INQUIRY_TYPES = ["Artist Booking", "General Inquiry", "Press & Media", "Other"] as const;

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xjgjabpn");
  const [inquiryType, setInquiryType] = useState("");

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[180px]" />
        <div className="absolute top-[20%] left-[10%] h-96 w-96 rounded-full bg-brand-primary/8 blur-[140px]" />
        <div className="absolute bottom-[15%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.7),rgba(0,0,0,0.95))]" />
      </div>

      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-primary/80">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">
              Book an Artist
            </h1>
            <p className="mt-6 text-base md:text-lg text-brand-text-muted leading-relaxed">
              Interested in booking one of our artists for your event? Fill out the form below
              and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Success state */}
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-16 text-center"
            >
              <CheckCircle className="w-12 h-12 text-brand-primary" />
              <h2 className="text-2xl font-bold">Message Sent</h2>
              <p className="text-brand-text-muted max-w-sm">
                Thanks for reaching out. We'll be in touch with you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-text-muted">
                    Name <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-colors"
                  />
                  <ValidationError field="name" errors={state.errors} className="text-xs text-red-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-text-muted">
                    Email <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-colors"
                  />
                  <ValidationError field="email" errors={state.errors} className="text-xs text-red-400" />
                </div>
              </div>

              {/* Inquiry type */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="inquiryType" className="text-xs uppercase tracking-widest text-brand-text-muted">
                  Inquiry Type <span className="text-brand-primary">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-colors appearance-none"
                >
                  <option value="" disabled>Select an inquiry type</option>
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Artist + Event Date (shown for bookings) */}
              {inquiryType === "Artist Booking" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="artist" className="text-xs uppercase tracking-widest text-brand-text-muted">
                      Artist
                    </label>
                    <select
                      id="artist"
                      name="artist"
                      className="rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-colors appearance-none"
                    >
                      <option value="">Any / Not sure yet</option>
                      {[...ARTISTS].sort((a, b) => a.name.localeCompare(b.name)).map((a) => (
                        <option key={a.id} value={a.name}>{a.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="eventDate" className="text-xs uppercase tracking-widest text-brand-text-muted">
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      className="rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-colors [color-scheme:dark]"
                    />
                  </div>
                </motion.div>
              )}

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-text-muted">
                  Message <span className="text-brand-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your event, venue, expected attendance, or any other details..."
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-colors resize-none"
                />
                <ValidationError field="message" errors={state.errors} className="text-xs text-red-400" />
              </div>

              <ValidationError errors={state.errors} className="text-sm text-red-400" />

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </PageContainer>
    </div>
  );
}
