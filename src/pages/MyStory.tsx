import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import storyImage from "@/assets/my-story.avif";
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
          <Link
            to="/blog"
            className="text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
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

      {/* Story Content */}
      <section className="section-spacing">
        <div className="editorial-width">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-primary mx-auto mb-8"
            />
            <motion.h1
              className="font-body text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My <span className="text-gradient">Story</span>
            </motion.h1>

            <motion.div
              className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                I'm a certified Health Coach and ACE-certified Personal Trainer, but more importantly… I've lived this.
              </p>
              <p>
                I know what it's like to feel stuck in your body.<br />
                To start over more times than you can count.<br />
                To think you need to be "perfect" to see results… and then burn out.
              </p>
              <p>
                For years, I was stuck in that all-or-nothing cycle.<br />
                Do everything right… fall off… start again Monday.
              </p>
              <p className="italic text-foreground">Sound familiar?</p>
              <p>
                What I've learned, both through my own journey and coaching other women, is this:
              </p>
              <p className="text-foreground font-medium">
                It's not about doing more.<br />
                It's about doing the right things consistently.
              </p>
              <p>
                I work primarily with women who are ready to stop making excuses and actually change. Women who are tired of feeling uncomfortable in their own skin, frustrated with their progress, and unsure of what actually works anymore… especially as their bodies change.
              </p>
              <p>
                This isn't about quick fixes.<br />
                It's about building something that lasts.
              </p>
              <p>
                If you're ready to take control, get stronger, and finally feel confident again…
              </p>
              <p className="text-primary font-semibold">I'll help you get there.</p>
            </motion.div>

            <motion.div
              className="mt-12 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img
                src={storyImage}
                alt="Mona - Health Coach and Personal Trainer"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default MyStory;
