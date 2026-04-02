import ScrollReveal from "./ScrollReveal";

const UrgencyCTA = () => {
  return (
    <section className="section-spacing bg-secondary/20 relative overflow-hidden" id="apply">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="editorial-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Six Months From Now…
              <br />
              <span className="text-gradient italic">You'll Wish You Started Today.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-lg text-muted-foreground mb-12">
              You can keep waiting—or you can finally take control.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/mona-morphmindandbody/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Apply for Coaching
              </a>
              <a
                href="https://calendly.com/mona-morphmindandbody/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-foreground/20 text-foreground font-body font-medium text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                Message Me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;
