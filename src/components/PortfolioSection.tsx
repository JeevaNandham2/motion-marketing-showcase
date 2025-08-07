import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Revolution",
      category: "Web Development & SEO",
      description: "Complete digital transformation resulting in 300% increase in online sales",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400",
      tags: ["E-commerce", "SEO", "Conversion"],
      metric: "+300% Sales"
    },
    {
      title: "Brand Identity Campaign",
      category: "Brand Design & Social Media",
      description: "Complete rebrand with social media strategy that boosted engagement by 450%",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&h=400",
      tags: ["Branding", "Social Media", "Design"],
      metric: "+450% Engagement"
    },
    {
      title: "Lead Generation Mastery",
      category: "Performance Marketing",
      description: "Strategic PPC and content marketing generating 500+ qualified leads monthly",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
      tags: ["PPC", "Lead Gen", "Analytics"],
      metric: "500+ Leads/Month"
    },
    {
      title: "Viral Content Campaign",
      category: "Content Creation & Influencer Marketing",
      description: "Video content series that reached 2M+ views and increased brand awareness",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=600&h=400",
      tags: ["Video", "Viral", "Influencer"],
      metric: "2M+ Views"
    },
    {
      title: "SaaS Growth Strategy",
      category: "Digital Strategy & Email Marketing",
      description: "Comprehensive growth strategy that tripled user acquisition in 6 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
      tags: ["SaaS", "Growth", "Email"],
      metric: "3x User Growth"
    },
    {
      title: "Local Business Domination",
      category: "Local SEO & Social Media",
      description: "Local SEO optimization resulting in 80% increase in foot traffic",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400",
      tags: ["Local SEO", "Maps", "Reviews"],
      metric: "+80% Foot Traffic"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Success 
            <span className="text-accent"> Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Every project is a new story. Here are some of our favorite chapters where creativity met strategy and delivered exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-card/90 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{project.metric}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;