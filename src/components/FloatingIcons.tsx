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
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-accent/10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360, 0],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 8 + (index % 3) * 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;