import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png" 
              alt="Adory Creatives" 
              className="h-24 md:h-32 mx-auto mb-6 filter brightness-0 invert"
            />
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Creative Digital
            <span className="block text-accent animate-glow">Marketing</span>
            <span className="block">That Captivates</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We craft compelling digital experiences that tell your story, engage your audience, and drive results. From concept to execution, we bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={() => scrollToSection("services")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Explore Our Services
            </Button>
            <Button 
              onClick={() => scrollToSection("portfolio")}
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;