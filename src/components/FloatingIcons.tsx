import { motion } from "framer-motion";
import { 
  Search, 
  Share2, 
  Target, 
  Mail, 
  Users, 
  Palette,
  TrendingUp,
  MousePointer,
  Globe,
  BarChart3,
  Megaphone,
  Camera
} from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Search, delay: 0, x: "10%", y: "20%" },
    { Icon: Share2, delay: 1, x: "80%", y: "15%" },
    { Icon: Target, delay: 2, x: "15%", y: "60%" },
    { Icon: Mail, delay: 0.5, x: "85%", y: "70%" },
    { Icon: Users, delay: 1.5, x: "20%", y: "85%" },
    { Icon: Palette, delay: 2.5, x: "75%", y: "45%" },
    { Icon: TrendingUp, delay: 3, x: "5%", y: "40%" },
    { Icon: MousePointer, delay: 1.2, x: "90%", y: "25%" },
    { Icon: Globe, delay: 2.8, x: "25%", y: "10%" },
    { Icon: BarChart3, delay: 0.8, x: "70%", y: "85%" },
    { Icon: Megaphone, delay: 3.5, x: "50%", y: "5%" },
    { Icon: Camera, delay: 2.2, x: "95%", y: "55%" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-accent/20 rounded-full"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Enhanced animated icons */}
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-accent/15"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [0.6, 1.4, 0.6],
            rotate: [0, 360, 0],
            y: [-30, 30, -30],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 10 + (index % 4) * 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-10 h-10 md:w-16 md:h-16 filter drop-shadow-lg" />
        </motion.div>
      ))}
      
      {/* Glowing orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"
          style={{ 
            left: `${20 + (i * 15)}%`, 
            top: `${10 + (i * 10)}%`,
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;