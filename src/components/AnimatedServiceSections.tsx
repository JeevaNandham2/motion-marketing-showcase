import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Instagram, Target, PenTool, Mail, Heart } from "lucide-react";

const AnimatedServiceSections = () => {
  return (
    <div className="py-20 space-y-32">
      {/* SEO Section */}
      <section id="seo" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-foreground">Search Engine Optimization</h3>
            <p className="text-xl text-muted-foreground">
              Dominate search results and drive organic traffic to your website with our proven SEO strategies.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Keyword Research & Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>On-Page Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Technical SEO Audits</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <h4 className="text-xl font-bold">Traffic Growth</h4>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Organic Traffic</span>
                      <span className="text-green-600 font-semibold">+247%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-green-400 to-green-600"
                      />
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white p-4 rounded-xl shadow-lg border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Instagram className="w-6 h-6 text-pink-500" />
                    <span className="font-semibold">{platform}</span>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="flex gap-1"
                    >
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">1.2k</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h3 className="text-4xl font-bold">Social Media Management</h3>
            <p className="text-xl text-muted-foreground">
              Build meaningful connections with your audience across all social platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PPC Ads Section */}
      <section id="ppc" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold">Pay-Per-Click Advertising</h3>
            <p className="text-xl text-muted-foreground">
              Get instant visibility and drive targeted traffic with optimized Google and Facebook ads.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {[1, 2, 3].map((ad, index) => (
              <motion.div
                key={ad}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg shadow-md border border-green-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-semibold">Ad</span>
                </div>
                <h4 className="font-semibold">Digital Marketing Services</h4>
                <p className="text-sm text-muted-foreground">Boost your online presence today</p>
                <motion.div
                  animate={{ backgroundColor: ["#f0f0f0", "#e0ffe0", "#f0f0f0"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-green-600 mt-2"
                >
                  Clicks: {150 + index * 50}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Marketing Section */}
      <section id="content" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-4"
          >
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-2xl font-bold"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                Create Engaging Content That Converts
              </motion.span>
            </motion.h4>
            
            <div className="space-y-3">
              {["5 Ways to Boost Your SEO", "Social Media Trends 2024", "Email Marketing Guide"].map((title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="bg-white p-4 rounded-lg shadow-sm border"
                >
                  <PenTool className="w-5 h-5 text-accent mb-2" />
                  <h5 className="font-semibold">{title}</h5>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h3 className="text-4xl font-bold">Content Marketing</h3>
            <p className="text-xl text-muted-foreground">
              Tell your brand story through compelling content that educates and inspires your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Marketing Section */}
      <section id="email" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold">Email Campaigns</h3>
            <p className="text-xl text-muted-foreground">
              Nurture leads and retain customers with personalized email marketing campaigns.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {[1, 2, 3].map((email, index) => (
              <motion.div
                key={email}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-4 rounded-lg shadow-md border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Welcome Email #{email}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Thank you for joining our digital marketing journey!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-accent text-white px-4 py-2 rounded text-sm font-semibold"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedServiceSections;