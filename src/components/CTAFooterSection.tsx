import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const CTAFooterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        {/* Optimized Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl will-change-transform"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [180, 90, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl will-change-transform"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12">
              Join hundreds of successful businesses that trust us with their digital marketing.
              Let's create your success story together.
            </p>

            {/* Email Capture Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-14 text-lg border-0 bg-muted focus:ring-2 focus:ring-accent"
                      required
                    />
                    <Button
                      type="button"
                      size="lg"
                      onClick={() => window.location.href = '/contact'}
                      className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg group"
                    >
                      Get Started Free
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="ml-2"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    No spam, unsubscribe at any time. Free consultation included.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-white/80"
            >
              <div className="text-center">
<<<<<<< HEAD
                <div className="text-2xl font-bold">500+</div>
=======
                <div className="text-2xl font-bold">100+</div>
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm">Avg. Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5★</div>
                <div className="text-sm">Rated Service</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        {/* Optimized Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl will-change-transform"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [180, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl will-change-transform"
          />
          
          {/* Reduced particles for mobile performance */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png"
                  alt="Adory Creatives"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                We're a full-service digital marketing agency in Chennai dedicated to helping businesses 
                in Kilpauk and beyond grow their online presence and achieve measurable results.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
<<<<<<< HEAD
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
=======
                  { icon: Instagram, href: "https://www.instagram.com/adorycreatives?igsh=MWZibW95bHBqeHFjYg==", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579255075163", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/adory-creatives-a17769377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" }
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "SEO Services Chennai",
                  "Social Media Marketing Kilpauk", 
                  "Google Ads Management Chennai",
                  "Web Design & Development",
                  "Email Marketing Campaigns",
                  "Local Business Marketing"
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-white/80 hover:text-accent transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-white/80">adorycreatives@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
<<<<<<< HEAD
                  <span className="text-white/80">+91-44-1234-5678</span>
=======
                  <span className="text-white/80">+91-77-0807-7500</span>
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-white/80">1st cross St, Kilpauk garden colony, Kilpauk, Chennai, Tamil Nadu 600010</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-white/60 text-sm">
<<<<<<< HEAD
              © 2024 Adory Creatives. All rights reserved.
=======
              © 2025 Adory Creatives. All rights reserved.
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooterSection;