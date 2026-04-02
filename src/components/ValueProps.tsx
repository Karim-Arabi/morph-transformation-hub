import ScrollReveal from "./ScrollReveal";

const props = [
  {
    title: "Structure Over Guesswork",
    description: "You don't \"figure it out.\" You follow a plan that works.",
    number: "01",
  },
  {
    title: "Accountability That Actually Works",
    description: "No disappearing. No starting over. No excuses.",
    number: "02",
  },
  {
    title: "Strength, Not Just Weight Loss",
    description: "Build a body—and mindset—you're proud of.",
    number: "03",
  },
  {
    title: "Sustainable, Real-Life Results",
    description: "This fits your life. Not the other way around.",
    number: "04",
  },
];

const ValueProps = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="editorial-width">
        <div className="grid md:grid-cols-2 gap-0">
          {props.map((prop, i) => (
            <ScrollReveal key={prop.number} delay={i * 0.15}>
              <div className="p-8 md:p-12 border-b border-r border-border/30 group hover:bg-secondary/50 transition-colors duration-500">
                <span className="font-body text-xs tracking-[0.3em] text-primary mb-4 block">
                  {prop.number}
                </span>
                <h3 className="font-body text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {prop.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
