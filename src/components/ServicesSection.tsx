import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Globe, 
  Megaphone, 
  Camera, 
  PenTool, 
  TrendingUp,
  Mail,
  Users,
  Monitor
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with strategic SEO that drives organic traffic and improves search rankings.",
      delay: "0s"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites that captivate visitors and convert them into customers with stunning design and functionality.",
      delay: "0.2s"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Engage your audience across platforms with compelling content and strategic social media campaigns.",
      delay: "0.4s"
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Professional photography, videography, and visual content that tells your brand story beautifully.",
      delay: "0s"
    },
    {
      icon: PenTool,
      title: "Brand Design",
      description: "Complete brand identity solutions including logos, guidelines, and creative assets that make you memorable.",
      delay: "0.2s"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-driven advertising campaigns that maximize ROI and deliver measurable business growth.",
      delay: "0.4s"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads and build lasting customer relationships.",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to amplify your brand reach and authentic engagement.",
      delay: "0.2s"
    },
    {
      icon: Monitor,
      title: "Digital Strategy",
      description: "Comprehensive digital roadmaps that align with your business goals and drive sustainable growth.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Digital Marketing 
            <span className="text-accent"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From strategy to execution, we offer comprehensive digital marketing solutions that drive real results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;