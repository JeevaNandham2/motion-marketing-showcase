import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioHealthcare from "@/assets/portfolio-healthcare.jpg";
import portfolioRealEstate from "@/assets/portfolio-realestate.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";

const ModernPortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      title: "Videography Projects",
      category: "Videography",
      description:
        "Professional video production showcasing brand stories and marketing campaigns",
      image: portfolioEcommerce,
      metrics: { projects: "50+", views: "2M+", clients: "25+" },
      tags: ["4K Video", "Drone Shots", "Post-Production", "Color Grading"],
      driveLink:
        "https://drive.google.com/drive/folders/14tWYjvU3puIZdWug1or6Q3CHsAk-I2Qx",
    },
    {
      title: "Motion Graphics Design",
      category: "Motion Graphics",
      description:
        "Dynamic animated graphics and visual effects for digital marketing campaigns",
      image: portfolioCorporate,
      metrics: { animations: "100+", engagement: "+78%", brands: "30+" },
      tags: ["After Effects", "Cinema 4D", "Animation", "Visual Effects"],
      driveLink:
        "https://drive.google.com/drive/folders/1EIBGfD986_FNdrOfK7aQ7LJpknXGruqP",
    },
    {
      title: "Graphics Design Portfolio",
      category: "Graphics Design",
      description:
        "Creative visual designs for branding, marketing materials and digital campaigns",
      image: portfolioHealthcare,
      metrics: { designs: "200+", brands: "50+", campaigns: "75+" },
      tags: ["Logo Design", "Branding", "Print Design", "Digital Graphics"],
      driveLink:
        "https://drive.google.com/drive/folders/1g6VYsKggruU0AGf_LPf3E5NXVC08_NmR",
    },
    {
      title: "Real Estate Innovation",
      category: "Real Estate",
      description:
        "Modern property platform with virtual tours and smart matching algorithms for buyers and sellers",
      image: portfolioRealEstate,
      metrics: { sales: "+67%", time: "-40%", satisfaction: "4.9/5" },
      tags: ["Vue.js", "3D", "Maps API", "ML"],
      driveLink:
        "https://drive.google.com/drive/folders/4jkl012mno345pqr678",
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "SaaS",
      description:
        "Comprehensive business intelligence platform with real-time data visualization and insights",
      image: portfolioSaas,
      metrics: { efficiency: "+120%", insights: "1000+", clients: "250+" },
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      driveLink:
        "https://drive.google.com/drive/folders/5mno345pqr678stu901",
    },
    {
      title: "Restaurant Chain Digitization",
      category: "Food & Beverage",
      description:
        "Complete digital ecosystem for restaurant chain including ordering, delivery, and management systems",
      image: portfolioRestaurant,
      metrics: { orders: "+89%", efficiency: "+65%", revenue: "+134%" },
      tags: ["React", "Node.js", "Payment", "GPS"],
      driveLink:
        "https://drive.google.com/drive/folders/6pqr678stu901vwx234",
    },
  ];

  const categories = [
    "All",
    "Videography",
    "Motion Graphics",
    "Graphics Design",
    "Real Estate",
    "SaaS",
    "Food & Beverage",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-primary font-semibold">✨ Our Amazing Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our cutting-edge projects that transformed businesses and
            delivered exceptional results across various industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_hsl(0_84%_60%/0.5)]"
                  : "bg-card text-card-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 border border-border hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeFilter === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                  style={{ borderRadius: "9999px" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.5, type: "spring" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden transition-all duration-500 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:shadow-[0_20px_40px_hsl(0_0%_0%/0.3)] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-[1px]"
                      />
                    </div>

                    <div className="absolute top-4 left-4">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                      >
                        {item.category}
                      </motion.span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-4 right-4"
                    >
                      <button
                        onClick={() =>
                          window.open(
                            item.driveLink,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        aria-label={`Open ${item.title} drive folder`}
                        className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-full hover:shadow-[0_0_20px_hsl(187_84%_55%/0.5)] transition-all duration-300 group/link"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      </button>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 relative">
                    <motion.h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      {item.title}
                    </motion.h3>

                    <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(item.metrics).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          className="text-center p-3 rounded-lg bg-secondary/30 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, idx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-xs border border-border/50 hover:border-primary/30 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                      disabled={!item.driveLink}
                    >
                      <a
                        href={item.driveLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.title} in Google Drive`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open in Drive
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1, 0.95, 1] }}
            transition={{ duration: 0.8 }}
          >
            Ready to Be Our Next Success Story?
          </motion.h3>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              } else {
                window.location.href = "/contact";
              }
            }}
            className="bg-gradient-to-r from-primary to-accent text-white px-12 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_hsl(187_84%_55%/0.3)] hover:shadow-[0_0_50px_hsl(187_84%_55%/0.5)] transition-all duration-300 relative overflow-hidden group animate-pulse-glow"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernPortfolioSection;
