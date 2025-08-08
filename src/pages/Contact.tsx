import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Send, TrendingUp, Target, BarChart3, Users, Globe, Zap, Star, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ModernNavigation from "@/components/ModernNavigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 7708077500 / +91 7200740944",
      description: "Available Mon-Fri, 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "1st cross St, Kilpauk garden colony",
      subInfo: "Kilpauk, Chennai, Tamil Nadu 600010",
      description: "Our creative studio"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@adorycreatives.com",
      description: "We'll respond within 24 hours"
    }
  ];

  const floatingIcons = [
    { icon: TrendingUp, delay: 0 },
    { icon: Target, delay: 0.5 },
    { icon: BarChart3, delay: 1 },
    { icon: Users, delay: 1.5 },
    { icon: Globe, delay: 2 },
    { icon: Zap, delay: 2.5 },
    { icon: Star, delay: 3 },
    { icon: Heart, delay: 3.5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      <ModernNavigation />
      
      {/* Animated Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5 text-accent"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0], 
            scale: [0, 1, 0],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          <item.icon size={48} />
        </motion.div>
      ))}

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              #1 Digital Growth Partner
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-accent font-medium mb-1">{item.info}</p>
                          {item.subInfo && (
                            <p className="text-accent font-medium mb-1">{item.subInfo}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-8"
              >
                <img 
                  src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png" 
                  alt="Adory Creatives" 
                  className="h-20 mx-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground flex items-center">
                    <Send className="w-8 h-8 text-accent mr-3" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:scale-[1.02] h-12"
                          placeholder="Your full name"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:scale-[1.02] h-12"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="transition-all duration-300 focus:scale-[1.02] h-12"
                        placeholder="Your company name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="transition-all duration-300 focus:scale-[1.02]"
                        placeholder="Tell us about your project, goals, and how we can help you succeed..."
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-14"
                      >
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;