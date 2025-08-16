import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const ModernNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-xl opacity-50"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-gradient-to-br from-background/90 to-card/90 backdrop-blur-sm rounded-xl p-3 border border-primary/20">
                <img
                  src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png"
                  alt="Adory Creatives Digital Marketing Agency"
                  className="relative h-8 w-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
<<<<<<< HEAD
              Services
=======
              Home
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
<<<<<<< HEAD
            <button
=======
            {/* <button
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
<<<<<<< HEAD
            </button>
=======
            </button> */}
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default ModernNavigation;