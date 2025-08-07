import ModernNavigation from "@/components/ModernNavigation";
import ModernHeroSection from "@/components/ModernHeroSection";
import HangingCardsCarousel from "@/components/HangingCardsCarousel";
import AnimatedServiceSections from "@/components/AnimatedServiceSections";
import ModernPortfolioSection from "@/components/ModernPortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFooterSection from "@/components/CTAFooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernNavigation />
      <ModernHeroSection />
      <HangingCardsCarousel />
      <AnimatedServiceSections />
      <ModernPortfolioSection />
      <TestimonialsSection />
      <CTAFooterSection />
    </div>
  );
};

export default Index;
