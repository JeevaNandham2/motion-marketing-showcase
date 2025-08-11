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
      
      {/* Enhanced animated icons with red/orange theme */}
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ 
            left: x, 
            top: y,
            color: index % 2 === 0 ? 'hsl(0 84% 60%)' : 'hsl(25 95% 53%)',
            opacity: 0.15
          }}
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
          whileHover={{ scale: 1.8, opacity: 0.6 }}
        >
          <Icon className="w-12 h-12 md:w-20 md:h-20 filter drop-shadow-[0_0_10px_currentColor]" />
        </motion.div>
      ))}
      
      {/* Enhanced glowing orbs with logo colors */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-2xl"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            width: `${80 + Math.random() * 60}px`,
            height: `${80 + Math.random() * 60}px`,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, hsl(0 84% 60% / 0.3) 0%, transparent 70%)'
              : i % 3 === 1 
              ? 'radial-gradient(circle, hsl(25 95% 53% / 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, hsl(0 0% 20% / 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
            x: [-20, 20, -20],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;