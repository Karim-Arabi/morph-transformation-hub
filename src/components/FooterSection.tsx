import ScrollReveal from "./ScrollReveal";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/20">
      <div className="editorial-width">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="font-display text-xl font-semibold text-foreground tracking-wide block mb-2">
                MORPH <span className="text-primary">MIND & BODY</span>
              </span>
              <p className="font-body text-sm text-muted-foreground italic">
                Be Bold. Be Strong. Be Unstoppable.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
              >
                Instagram
              </a>
              <a
                href="mailto:hello@morphmindandbody.com"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
              >
                Contact
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-border/10 text-center">
          <p className="font-body text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Morph Mind and Body. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
