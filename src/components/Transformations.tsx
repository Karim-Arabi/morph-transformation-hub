import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "I finally feel confident in my body again.",
    detail: "Lost 30lbs and gained strength she never thought possible.",
  },
  {
    quote: "This is the first time I've actually stayed consistent.",
    detail: "12 months of consistency after years of starting over.",
  },
  {
    quote: "It's not just physical… everything changed.",
    detail: "Transformed her mindset, energy, and relationship with food.",
  },
  {
    quote: "I stopped starting over.",
    detail: "Finally built habits that stuck—for good.",
  },
];

const Transformations = () => {
  return (
    <section className="section-spacing bg-background" id="results">
      <div className="editorial-width">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Real Women. <span className="text-gradient italic">Real Change.</span>
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="relative p-8 md:p-10 bg-card border border-border/30 group hover:border-primary/30 transition-colors duration-500">
                <span className="absolute top-6 left-8 font-body text-6xl text-primary/10 leading-none">"</span>
                <blockquote className="font-body text-xl md:text-2xl text-foreground italic leading-relaxed mb-4 relative z-10">
                  {t.quote}
                </blockquote>
                <p className="font-body text-sm text-muted-foreground">
                  {t.detail}
                </p>
                <div className="w-8 h-px bg-primary/40 mt-6" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
