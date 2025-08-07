import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart Solutions",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      rating: 5,
      text: "Adory Creatives transformed our digital presence completely. Our website traffic increased by 400% and our conversion rates doubled within just 3 months. Their team is professional, creative, and delivers results that exceed expectations."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthCorp",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      rating: 5,
      text: "Working with Adory Creatives was a game-changer for our business. Their strategic approach to digital marketing helped us reach new audiences and significantly boost our ROI. I highly recommend their services to any business looking to grow online."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Fashion Forward",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      rating: 5,
      text: "The team at Adory Creatives understood our brand vision perfectly. They created a comprehensive digital marketing strategy that increased our social media engagement by 300% and drove substantial sales growth. Exceptional work!"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Operations Manager",
      company: "Local Services Co",
      image: "/lovable-uploads/d2205550-ae2d-4487-88e8-67c35e4a87dc.png",
      rating: 5,
      text: "Adory Creatives helped us establish a strong online presence from scratch. Their SEO and content marketing strategies put us on the first page of Google for our key terms. The results speak for themselves - we've seen a 250% increase in leads."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Client Image */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="relative">
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-accent/20"
                        />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-2 rounded-full border-2 border-accent/30 border-dashed"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-sm text-accent font-semibold">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </motion.div>

                    {/* Testimonial Content */}
                    <div className="md:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Quote className="w-8 h-8 text-accent/30 mb-4" />
                        
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="text-lg leading-relaxed text-muted-foreground mb-6"
                        >
                          "{testimonials[currentTestimonial].text}"
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-accent"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-advance indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Testimonial {currentTestimonial + 1} of {testimonials.length}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;