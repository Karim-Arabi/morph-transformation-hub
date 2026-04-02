import ScrollReveal from "./ScrollReveal";

const AppDownloadSection = () => {
  return (
    <section className="section-spacing bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="editorial-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Coaching,{" "}
              <span className="text-gradient italic">In Your Pocket.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-lg text-muted-foreground mb-10">
              Workouts, nutrition, and progress tracking—all in one app.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/morph-mind-body/id6578441634"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="60"
                  viewBox="0 0 200 60"
                  className="mx-auto"
                >
                  <rect width="200" height="60" rx="10" fill="currentColor" className="text-foreground" />
                  <g fill="hsl(var(--background))">
                    <path d="M38.5 30.2c-.05-5.15 4.2-7.62 4.39-7.74a9.52 9.52 0 0 0-7.5-4.06c-3.15-.33-6.2 1.88-7.8 1.88-1.63 0-4.1-1.85-6.75-1.8a9.94 9.94 0 0 0-8.37 5.1c-3.6 6.23-.92 15.4 2.56 20.44 1.73 2.47 3.76 5.24 6.42 5.14 2.59-.1 3.56-1.65 6.69-1.65s4 1.65 6.72 1.6c2.78-.05 4.53-2.49 6.2-4.98a21.46 21.46 0 0 0 2.84-5.77 8.88 8.88 0 0 1-5.4-8.16zM33.5 15.08a9.02 9.02 0 0 0 2.06-6.48 9.2 9.2 0 0 0-5.95 3.08 8.58 8.58 0 0 0-2.12 6.25 7.6 7.6 0 0 0 6.01-2.85z" />
                    <text x="58" y="22" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="400">
                      Download on the
                    </text>
                    <text x="58" y="42" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">
                      App Store
                    </text>
                  </g>
                </svg>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.morphmindandbody.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://play.google.com/store/apps/details?id=com.morphmindandbody.app", "_blank");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="60"
                  viewBox="0 0 200 60"
                  className="mx-auto"
                >
                  <rect width="200" height="60" rx="10" fill="currentColor" className="text-foreground" />
                  <g fill="hsl(var(--background))">
                    <path d="M20 12l16 18-16 18V12z" />
                    <path d="M20 12l20 12H24l-4-12z" opacity="0.8" />
                    <path d="M20 48l20-12H24l-4 12z" opacity="0.6" />
                    <path d="M40 30l-16-18 20 12-4 6z" opacity="0.9" />
                    <text x="50" y="22" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="400">
                      GET IT ON
                    </text>
                    <text x="50" y="42" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">
                      Google Play
                    </text>
                  </g>
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
