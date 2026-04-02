import ScrollReveal from "./ScrollReveal";

const reasons = [
  "Because it's not based on motivation",
  "Because you're not doing it alone",
  "Because the plan is built for you",
  "Because consistency is built in",
];

const WhyThisWorks = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="editorial-width">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4 block text-center">
              A Different Approach
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
              Why This <span className="text-gradient italic">Works</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="flex items-start gap-6 p-6 md:p-8 bg-card/50 border border-border/20 hover:border-primary/20 transition-colors duration-500">
                  <span className="font-display text-3xl text-primary/30 font-bold leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
                    {reason}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
