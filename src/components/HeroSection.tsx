import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Woman training in modern gym"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Nav */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="font-display text-xl md:text-2xl font-semibold tracking-wide text-foreground">
          MORPH <span className="text-primary">MIND & BODY</span>
        </span>
        <a
          href="https://calendly.com/mona-morphmindandbody/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-6 py-2.5 border border-primary/40 text-sm font-body font-medium tracking-widest uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Apply Now
        </a>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 editorial-width w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-primary mb-8"
          />

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Stop Waiting.
            <br />
            <span className="text-gradient">Start Becoming.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Health, fitness, and mindset coaching for women ready to transform—physically, mentally, and confidently.
          </motion.p>

          <motion.p
            className="font-body text-sm text-muted-foreground/70 italic mb-10 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            You don't need another plan. You need the right one—and someone who will hold you to it.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <a
              href="https://calendly.com/mona-morphmindandbody/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase text-center hover:opacity-90 transition-opacity"
            >
              Apply for Coaching
            </a>
            <a
              href="#offer"
              className="px-8 py-4 border border-foreground/20 text-foreground font-body font-medium text-sm tracking-widest uppercase text-center hover:border-primary hover:text-primary transition-all duration-300"
            >
              Start Your Transformation
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="editorial-width py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-gold">★★★★★</span>
            <span>Client Results</span>
          </div>
          <span className="hidden md:block text-border">|</span>
          <span>"Real Women. Real Transformations."</span>
          <span className="hidden md:block text-border">|</span>
          <span>"Built on Discipline, Not Trends"</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
