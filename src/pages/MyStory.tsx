import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import FooterSection from "@/components/FooterSection";

const MyStory = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* Nav */}
      <motion.nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/90 backdrop-blur-md border-b border-border/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Morph Mind & Body logo" className="h-8 md:h-10 w-auto" />
          <span className="font-display text-xl md:text-2xl font-semibold tracking-wide text-foreground">
            MORPH <span className="text-primary">MIND & BODY</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/my-story"
            className="text-sm font-body font-medium tracking-widest uppercase text-primary"
          >
            My Story
          </Link>
          <a
            href="https://calendly.com/mona-morphmindandbody/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2.5 border border-primary/40 text-sm font-body font-medium tracking-widest uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="section-spacing">
        <div className="editorial-width text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-primary mx-auto mb-8"
          />
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My <span className="text-gradient">Story</span>
          </motion.h1>
          <motion.p
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Coming soon — check back for the full story and images.
          </motion.p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default MyStory;
