import ModernNavigation from "@/components/ModernNavigation";
import ModernHeroSection from "@/components/ModernHeroSection";
import HangingCardsCarousel from "@/components/HangingCardsCarousel";
import AnimatedServiceSections from "@/components/AnimatedServiceSections";
import ModernPortfolioSection from "@/components/ModernPortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFooterSection from "@/components/CTAFooterSection";
import FloatingIcons from "@/components/FloatingIcons";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingIcons />
      <div className="relative z-10">
        <ModernNavigation />
        <ModernHeroSection />
        <HangingCardsCarousel />
        <AnimatedServiceSections />
        <ModernPortfolioSection />
        <TestimonialsSection />
        <CTAFooterSection />
      </div>
    </div>
  );
};

export default Index;
