import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import FooterSection from "@/components/FooterSection";

const Blog = () => {
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
            className="text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            My Story
          </Link>
          <Link
            to="/blog"
            className="text-sm font-body font-medium tracking-widest uppercase text-primary"
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

      {/* Blog Content */}
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
              <span className="text-gradient">Blog</span>
            </motion.h1>

            <motion.div
              className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>Coming soon — tips, insights, and real talk on fitness, mindset, and building a lifestyle that lasts.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default Blog;
