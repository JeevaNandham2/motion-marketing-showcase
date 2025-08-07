import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FloatingCardsSection from "@/components/FloatingCardsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FloatingCardsSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
