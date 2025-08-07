import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "200+", label: "Projects Completed" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Target, number: "95%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About 
              <span className="text-accent"> Adory Creatives</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a passionate team of digital marketing experts, creatives, and strategists who believe in the power of storytelling. Like a film director crafting the perfect scene, we orchestrate every element of your digital presence to create compelling narratives that resonate with your audience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach combines artistic vision with data-driven insights, ensuring that every campaign not only looks beautiful but delivers measurable results. From startups to established brands, we help businesses tell their story in the digital world.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Learn More About Us
            </Button>
          </div>

          {/* Stats & Visual */}
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Logo with background effect */}
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
                  <img 
                    src="/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png" 
                    alt="Adory Creatives Logo" 
                    className="relative h-48 w-48 mx-auto animate-float"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;