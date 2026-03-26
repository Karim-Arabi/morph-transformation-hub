import ScrollReveal from "./ScrollReveal";

const CoreMessage = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="editorial-width">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              This Isn't About{" "}
              <span className="text-gradient italic">Motivation.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-12 h-px bg-primary mx-auto mb-8" />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Most women aren't stuck because they don't know what to do.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              They're stuck because they don't have structure, consistency, or support.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="font-display text-2xl md:text-3xl text-foreground font-medium italic">
              Morph Mind and Body is where that changes.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CoreMessage;
