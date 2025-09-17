import CTASection from "@/components/home/CTASection";
import DemoSection from "@/components/home/DemoSection";
import FeatureSection from "@/components/home/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
export default function Home() {
 return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <DemoSection />
      <FeatureSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
