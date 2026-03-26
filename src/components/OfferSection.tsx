import ScrollReveal from "./ScrollReveal";

const offerings = [
  "Personalized workouts",
  "Nutrition guidance",
  "Accountability & check-ins",
  "Mindset coaching",
  "Real structure",
];

const OfferSection = () => {
  return (
    <section className="section-spacing bg-background" id="offer">
      <div className="editorial-width">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Coaching That Actually{" "}
              <span className="text-gradient italic">Moves You Forward.</span>
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mt-6 mb-16" />
          </ScrollReveal>

          <div className="space-y-0 mb-16">
            {offerings.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.1}>
                <div className="flex items-center justify-center py-5 border-b border-border/30 group">
                  <span className="w-2 h-2 bg-primary mr-4 group-hover:scale-150 transition-transform duration-300" />
                  <span className="font-display text-xl md:text-2xl text-foreground">
                    {item}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Apply Now
              </a>
              <a
                href="#apply"
                className="px-8 py-4 border border-foreground/20 text-foreground font-body font-medium text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                Start Your Plan
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
