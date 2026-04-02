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
              className="space-y-8 font-body text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                Hello! I'm a certified Health Coach and an ACE-certified Personal Trainer, passionate about the transformative power of fitness and wellness. My journey in this field is deeply personal; I've found solace and strength in fitness during challenging times, experiencing firsthand how exercise can fortify both the mind and body. Over the years, my commitment to health and fitness has been unwavering, driven by a goal to live a long, healthy life.
              </p>
              <p>
                My path to becoming a Health Coach was serendipitous, but it instantly resonated with my desire to empower others in taking control of their health and, by extension, their lives. I have a special focus on training women over forty, drawing from my personal experiences to relate and adapt to their unique needs.
              </p>
              <p>
                Join me in this journey towards a healthier, stronger you. Whether you're looking to start your fitness journey, navigate the complexities of menopause, or simply find a supportive community, I'm here to guide and inspire you every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default MyStory;
