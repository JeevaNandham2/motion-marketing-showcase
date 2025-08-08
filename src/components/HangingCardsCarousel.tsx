import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Share2, Target, Mail, Users, Palette } from "lucide-react";
import seoImage from "@/assets/seo-service.jpg";
import socialMediaImage from "@/assets/social-media-service.jpg";
import googleAdsImage from "@/assets/google-ads-service.jpg";
import emailMarketingImage from "@/assets/email-marketing-service.jpg";
import influencerMarketingImage from "@/assets/influencer-marketing-service.jpg";
import brandingImage from "@/assets/branding-service.jpg";

const HangingCardsCarousel = () => {
  const services = [
    {
      id: 1,
      title: "SEO",
      description: "Boost your search rankings with data-driven optimization strategies",
      icon: Search,
      image: seoImage,
      color: "from-blue-400 to-blue-600",
      clipColor: "bg-green-500"
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Engage your audience across all social platforms",
      icon: Share2,
      image: socialMediaImage,
      color: "from-purple-400 to-purple-600",
      clipColor: "bg-green-500"
    },
    {
      id: 3,
      title: "Google Ads",
      description: "Targeted advertising campaigns that convert",
      icon: Target,
      image: googleAdsImage,
      color: "from-red-400 to-red-600",
      clipColor: "bg-green-500"
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Direct customer communication that drives results",
      icon: Mail,
      image: emailMarketingImage,
      color: "from-green-400 to-green-600",
      clipColor: "bg-green-500"
    },
    {
      id: 5,
      title: "Influencer Marketing",
      description: "Partner with key voices in your industry",
      icon: Users,
      image: influencerMarketingImage,
      color: "from-yellow-400 to-yellow-600",
      clipColor: "bg-green-500"
    },
    {
      id: 6,
      title: "Branding",
      description: "Build your brand identity that stands out",
      icon: Palette,
      image: brandingImage,
      color: "from-pink-400 to-pink-600",
      clipColor: "bg-green-500"
    }
  ];

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to grow your business online
          </p>
        </motion.div>
      </div>

      {/* Hanging Cards Container */}
      <div className="relative h-96 overflow-hidden">
        {/* Hanging Wire */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
        
        {/* Auto-scrolling Cards */}
        <motion.div
          animate={{
            x: [`0%`, `-${(services.length * 320)}px`],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex gap-8 absolute top-8"
          style={{ width: `${duplicatedServices.length * 320}px` }}
        >
          {duplicatedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={`${service.id}-${index}`}
                className="relative"
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                  y: [0, -5, 0, 5, 0]
                }}
                transition={{
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hanging Clip */}
                <div className={`w-8 h-6 ${service.clipColor} rounded-b-lg mx-auto mb-2 relative`}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                  <motion.div
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-600"
                  ></motion.div>
                </div>

                {/* Card */}
                <Card className="w-72 h-96 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border-0 overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-center mb-3 text-foreground">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-center leading-relaxed text-sm flex-1">
                        {service.description}
                      </p>
                      
                      <div className="mt-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 bg-gradient-to-r from-accent to-primary text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 z-10 relative"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
    </section>
  );
};

export default HangingCardsCarousel;