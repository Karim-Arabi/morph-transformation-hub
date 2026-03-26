import HeroSection from "@/components/HeroSection";
import CoreMessage from "@/components/CoreMessage";
import ValueProps from "@/components/ValueProps";
import Transformations from "@/components/Transformations";
import AuthoritySection from "@/components/AuthoritySection";
import OfferSection from "@/components/OfferSection";
import WhyThisWorks from "@/components/WhyThisWorks";
import ObjectionHandling from "@/components/ObjectionHandling";
import UrgencyCTA from "@/components/UrgencyCTA";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <CoreMessage />
      <ValueProps />
      <Transformations />
      <AuthoritySection />
      <OfferSection />
      <WhyThisWorks />
      <ObjectionHandling />
      <UrgencyCTA />
      <FooterSection />
    </main>
  );
};

export default Index;
