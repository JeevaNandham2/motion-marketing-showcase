import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";

const ModernHeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
=======
import { useNavigate } from "react-router-dom"; // If you are using React Router

const ModernHeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // Change this to your contact page route
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Mobile-Optimized Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
<<<<<<< HEAD
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
=======
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
<<<<<<< HEAD
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl will-change-transform"
        />
        
=======
          animate={{
            rotate: [360, 0],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl will-change-transform"
        />

>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
        {/* Mobile-Optimized animated particles */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full will-change-transform"
            style={{
              left: `${25 + i * 20}%`,
              top: `${15 + i * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
<<<<<<< HEAD
              ease: "easeInOut"
=======
              ease: "easeInOut",
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full px-6 py-2 backdrop-blur-sm"
          >
<<<<<<< HEAD
            <span className="text-primary font-semibold text-sm">✨ #1 Digital Growth Partner</span>
=======
            <span className="text-primary font-semibold text-sm">
              ✨ #1 Digital Growth Partner
            </span>
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
          </motion.div>
        </motion.div>

        {/* Agency Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
<<<<<<< HEAD
          <motion.h1 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
=======
          <motion.h1
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
            }}
            style={{ backgroundSize: "200% 100%" }}
          >
            ADORY CREATIVES
          </motion.h1>
        </motion.div>

<<<<<<< HEAD
        {/* Enhanced Main Headline - SEO Optimized */}
        <motion.h2 
=======
        {/* Enhanced Main Headline */}
        <motion.h2
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
<<<<<<< HEAD
          <motion.span 
=======
          <motion.span
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
            className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent block"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Digital Marketing Agency
          </motion.span>
<<<<<<< HEAD
          <motion.span 
            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse-glow block text-3xl md:text-5xl lg:text-6xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              backgroundPosition: {
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          >
            Chennai & Kilpauk
          </motion.span>
        </motion.h2>

        {/* SEO Optimized Subheading */}
=======
          <motion.span
            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse-glow block text-3xl md:text-5xl lg:text-6xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            Chennai , Kilpauk
          </motion.span>
        </motion.h2>

        {/* Subheading */}
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
        >
          Premier SEO Services, Social Media Marketing, Google Ads & Web Design in Chennai. 
          <span className="text-primary font-semibold"> 300% Growth Guaranteed</span> for Local Businesses in Kilpauk & Beyond
        </motion.p>

=======
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
        >
          Premier SEO Services, Social Media Marketing, Google Ads & Web Design
          in Chennai.
          <span className="text-primary font-semibold">
            {" "}
            300% Growth Guaranteed
          </span>{" "}
          for Local Businesses in Kilpauk & Beyond
        </motion.p>

        {/* Contact Us Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-4 shadow-lg"
            onClick={handleContactClick}
          >
            📞 Contact Us
          </Button>
        </motion.div>
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
<<<<<<< HEAD
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
=======
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
            className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
=======
            className="w-6 h-10 mt-10 border-2 border-accent rounded-full flex justify-center"
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ModernHeroSection;
=======
export default ModernHeroSection;
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
