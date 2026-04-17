import { useMemo, useState } from "react";
import { RELEASES } from "../constants/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { Calendar, Disc3, ArrowUpRight } from "lucide-react";

const filters = ["All", "Album", "EP", "Single", "Compilation"] as const;
type Filter = typeof filters[number];

export default function ReleasesPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const allSortedReleases = useMemo(() => {
    return [...RELEASES].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const featuredRelease = allSortedReleases[0];

  const archiveReleases = useMemo(() => {
    if (!featuredRelease) return [];

    const withoutFeatured = allSortedReleases.filter(
      (release) => release.id !== featuredRelease.id
    );

    if (filter === "All") return withoutFeatured;

    return withoutFeatured.filter((release) => release.type === filter);
  }, [allSortedReleases, featuredRelease, filter]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Full-page atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[180px]" />
        <div className="absolute top-[18%] left-[8%] h-96 w-96 rounded-full bg-brand-primary/12 blur-[140px]" />
        <div className="absolute top-[28%] right-[6%] h-[28rem] w-[28rem] rounded-full bg-white/6 blur-[160px]" />
        <div className="absolute bottom-[18%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-brand-primary/10 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[12%] h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65),rgba(0,0,0,0.9))]" />
      </div>

      <PageContainer>
        <div className="relative overflow-visible">
          {/* Hero */}
          <section className="relative pt-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-primary/80">
                The Archive
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                Releases
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg text-brand-text-muted leading-relaxed">
                Explore the latest sonic artifacts from State Alchemy. A living
                archive of albums, EPs, singles, and transmissions from the edge
                of the underground.
              </p>
            </motion.div>
          </section>

          {/* Featured release */}
          {featuredRelease && (
            <section className="mb-12">
              <Link
                to={`/releases/${featuredRelease.slug}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />

                  <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                    <div className="relative overflow-hidden min-h-[320px] lg:min-h-[460px]">
                      <img
                        src={featuredRelease.cover}
                        alt={featuredRelease.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <div className="relative flex flex-col justify-between p-8 md:p-10">
                      <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-primary">
                          Latest Transmission
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                          {featuredRelease.title}
                        </h2>

                        <p className="mt-3 text-lg text-white/80">
                          {featuredRelease.artist}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-text-muted">
                          <span className="inline-flex items-center gap-2">
                            <Disc3 size={16} />
                            {featuredRelease.type}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Calendar size={16} />
                            {featuredRelease.date}
                          </span>
                        </div>

                        {featuredRelease.description && (
                          <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-brand-text-muted">
                            {featuredRelease.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/80 transition-transform duration-300 group-hover:translate-x-1">
                        Enter Release
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Filters */}
          <section className="mb-10">
            <div className="flex flex-wrap gap-3">
              {filters.map((f) => {
                const active = filter === f;

                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "border-brand-primary bg-brand-primary text-black shadow-[0_0_24px_rgba(255,255,255,0.12)]"
                        : "border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Archive */}
          <section className="pb-16">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                Archive Entries
              </h3>
              <p className="text-sm text-brand-text-muted">
                {archiveReleases.length} release
                {archiveReleases.length === 1 ? "" : "s"}
              </p>
            </div>

            {archiveReleases.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {archiveReleases.map((release, idx) => (
                  <motion.div
                    key={`${filter}-${release.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.45 }}
                  >
                    <Link
                      to={`/releases/${release.slug}`}
                      className="group block h-full"
                    >
                      <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={release.cover}
                            alt={release.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]" />
                        </div>

                        <div className="p-5">
                          <div className="mb-3 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-brand-text-muted">
                            <span>{release.type}</span>
                            <span>{release.date}</span>
                          </div>

                          <h4 className="text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-brand-primary">
                            {release.title}
                          </h4>

                          <p className="mt-2 text-sm text-white/75">
                            {release.artist}
                          </p>

                          <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70 transition-transform duration-300 group-hover:translate-x-1">
                            Open Entry
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center text-brand-text-muted">
                No archive entries found for this filter.
              </div>
            )}
          </section>
        </div>
      </PageContainer>
    </div>
  );
}