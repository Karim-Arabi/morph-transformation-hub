import ScrollReveal from "./ScrollReveal";
import coachPortrait from "@/assets/coach-portrait.jpg";

const AuthoritySection = () => {
  return (
    <section className="section-spacing bg-secondary/20">
      <div className="editorial-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={coachPortrait}
                alt="Your coach"
                loading="lazy"
                width={800}
                height={1080}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
                Your Coach
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                I Don't Just Coach This.{" "}
                <span className="text-gradient italic">I Live It.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                This brand was built from real experience—not theory. From competing… to rebuilding… to learning what actually works long-term—this is about more than a quick transformation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                It's about becoming someone who doesn't fall back.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="font-display text-xl text-foreground italic">
                You've done the starting over part.
                <br />
                Now it's time to do it differently.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
