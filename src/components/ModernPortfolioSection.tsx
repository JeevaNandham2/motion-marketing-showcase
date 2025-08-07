import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";

const ModernPortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce SEO Campaign",
      category: "SEO",
      description: "Increased organic traffic by 300% for fashion retailer",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      metrics: { traffic: "+300%", conversion: "+45%", revenue: "+180%" },
      tags: ["SEO", "E-commerce", "Content Marketing"]
    },
    {
      id: 2,
      title: "Social Media Transformation",
      category: "Social Media",
      description: "Built engaged community of 50k+ followers",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      metrics: { followers: "+50k", engagement: "+250%", reach: "+400%" },
      tags: ["Social Media", "Community Building", "Content Creation"]
    },
    {
      id: 3,
      title: "PPC Campaign Optimization",
      category: "Google Ads",
      description: "Reduced cost per acquisition by 60% while doubling conversions",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      metrics: { cpa: "-60%", conversions: "+200%", roas: "450%" },
      tags: ["Google Ads", "PPC", "Conversion Optimization"]
    },
    {
      id: 4,
      title: "Email Marketing Automation",
      category: "Email Marketing",
      description: "Automated email sequences generating $100k+ monthly revenue",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      metrics: { revenue: "+$100k", openRate: "35%", clickRate: "8.5%" },
      tags: ["Email Marketing", "Automation", "Revenue Generation"]
    },
    {
      id: 5,
      title: "Influencer Partnership Campaign",
      category: "Influencer",
      description: "Collaborated with 20+ influencers for brand awareness",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      metrics: { reach: "2M+", engagement: "+180%", sales: "+90%" },
      tags: ["Influencer Marketing", "Brand Awareness", "Partnerships"]
    },
    {
      id: 6,
      title: "Complete Brand Overhaul",
      category: "Branding",
      description: "Rebranded startup leading to 400% increase in brand recognition",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      metrics: { recognition: "+400%", trust: "+250%", sales: "+150%" },
      tags: ["Branding", "Design", "Strategy"]
    }
  ];

  const categories = ["All", "SEO", "Social Media", "Google Ads", "Email Marketing", "Influencer", "Branding"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies like yours achieve their digital marketing goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 right-4"
                    >
                      <div className="bg-white/90 p-2 rounded-full">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {item.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-sm font-bold text-accent">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernPortfolioSection;