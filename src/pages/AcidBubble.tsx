export default function AcidBubble() {
    return (
      <div className="min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT COLUMN */}
          <div>
            <img
              src="/images/music/albums/acidBubble.avif"
              alt="Acid Bubble cover art"
              className="w-full max-w-xl rounded-xl mb-6"
            />
  
            <p className="text-xs uppercase tracking-widest text-brand-primary mb-2">
              Album • 2025-11-21
            </p>
  
            <h1 className="text-3xl md:text-4xl font-bold">Acid Bubble</h1>
  
            <p className="text-brand-text-muted mt-2">Key To Insaniity</p>
  
            <p className="text-brand-text-muted mt-6 leading-relaxed">
              Key To Insaniity drops debut full length album "Acid Bubble" !! This
              is an 8-track trip built to shatter the ceiling between sub-genres.
              It&apos;s concentrated, high-BPM fuel for the floor—a psychedelic
              pressure cooker where every sonic layer is designed for maximum
              punch. This meticulously crafted piece of alien audio is a true
              reflection of an insight into the mind of one of South Africa&apos;s
              hottest producers. Take the flow and groove of conventional psy, and
              fuse it with the pounding high speed power of hitech beats and you
              complete Insaniity.
            </p>
  
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tracklist</h2>
  
              <ol className="space-y-2 list-decimal list-inside text-brand-text-muted">
                <li>Code Cannabis</li>
              </ol>
            </div>
          </div>
  
          {/* RIGHT COLUMN */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-xl border border-white/10 p-6">
              <p className="text-sm text-brand-text-muted mb-4">Listen</p>
  
              <audio controls className="w-full">
                <source
                  src="/audio/albums/acidBubble/codeCannabis.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    );
  }