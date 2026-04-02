import ScrollReveal from "./ScrollReveal";

const ObjectionHandling = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="editorial-width">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 leading-tight">
              If You've Tried Everything…{" "}
              <span className="text-gradient italic">Read This.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6 mb-12">
            {[
              "This isn't another reset",
              "This isn't another trend",
              "This isn't about being perfect",
            ].map((line, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <p className="font-body text-lg md:text-xl text-muted-foreground">
                  {line}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <p className="font-body text-2xl md:text-3xl text-foreground italic leading-relaxed">
              This is about finally doing it in a way that lasts.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
