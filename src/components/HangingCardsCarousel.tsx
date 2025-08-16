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
      title: "SEO Services Chennai",
      description:
        "Boost your Chennai business rankings with data-driven SEO optimization strategies",
      icon: Search,
      image: seoImage,
      color: "from-blue-400 to-blue-600",
      clipColor: "bg-green-500",
    },
    {
      id: 2,
      title: "Social Media Marketing Chennai",
      description:
        "Engage your Chennai audience across all social platforms with targeted campaigns",
      icon: Share2,
      image: socialMediaImage,
      color: "from-purple-400 to-purple-600",
      clipColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Google Ads Chennai",
      description:
        "Targeted PPC advertising campaigns that convert for Chennai businesses",
      icon: Target,
      image: googleAdsImage,
      color: "from-red-400 to-red-600",
      clipColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Email Marketing Kilpauk",
      description:
        "Direct customer communication that drives results for Kilpauk businesses",
      icon: Mail,
      image: emailMarketingImage,
      color: "from-green-400 to-green-600",
      clipColor: "bg-green-500",
    },
    {
      id: 5,
      title: "Influencer Marketing Chennai",
      description:
        "Partner with key voices in Chennai to amplify your brand reach",
      icon: Users,
      image: influencerMarketingImage,
      color: "from-yellow-400 to-yellow-600",
      clipColor: "bg-green-500",
    },
    {
      id: 6,
      title: "Web Design Kilpauk",
      description:
        "Build your professional brand identity that stands out in Kilpauk market",
      icon: Palette,
      image: brandingImage,
      color: "from-pink-400 to-pink-600",
      clipColor: "bg-green-500",
    },
  ];

  const duplicatedServices = [...services, ...services];
  const CARD_WIDTH = 320; // px (approx; fine on mobile too)

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
            Digital Marketing Services in Chennai,Kilpauk
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive SEO, Social Media &amp; Google Ads solutions to grow your Chennai
            business online. Trusted by 100+ local businesses in Kilpauk, T.Nagar &amp; Anna
            Nagar.
          </p>
        </motion.div>
      </div>

      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent" />

        <motion.div
          animate={{ x: ["0px", `-${services.length * CARD_WIDTH}px`] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 md:gap-8 absolute top-8"
          style={{ width: `${duplicatedServices.length * CARD_WIDTH}px` }}
        >
          {duplicatedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={`${service.id}-${index}`}
                className="relative"
                animate={{ rotate: [0, 2, 0, -2, 0], y: [0, -5, 0, 5, 0] }}
                transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
              >
                <div className={`w-8 h-6 ${service.clipColor} rounded-b-lg mx-auto mb-2 relative`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-400" />
                  <motion.div
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-600"
                  />
                </div>

                <Card className="w-56 h-80 md:w-72 md:h-96 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border-0 overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3 text-foreground">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-center leading-relaxed text-xs md:text-sm flex-1">
                        {service.description}
                      </p>

                      <div className="mt-4 md:mt-6">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => (window.location.href = "/contact")}
                          className="w-full py-2 md:py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                          aria-label={`Learn more about ${service.title}`}
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

      <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
};

export default HangingCardsCarousel;
