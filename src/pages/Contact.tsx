<<<<<<< HEAD
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Send, TrendingUp, Target, BarChart3, Users, Globe, Zap, Star, Heart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
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
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-accent/10 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
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
=======
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MessageCircle, Send, ArrowLeft, ChevronDown } from "lucide-react";

type Errors = Partial<Record<
  "name" | "email" | "phone" | "services" | "budget" | "message" | "website",
  string
>>;

const SERVICE_OPTIONS = [
  "SEO",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Web Design & Development",
  "Content / Blog",
  "Branding / Creatives",
];

const BUDGET_OPTIONS = ["< ₹25k / month", "₹25k–₹50k", "₹50k–₹1L", "₹1L–₹3L", "> ₹3L / month"];
const TIMELINE_OPTIONS = ["ASAP (0–2 weeks)", "This Month", "1–3 Months", "3–6 Months"];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    // Essentials (kept compact)
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    message: "",
    // Optional (collapsed by default)
    targetLocations: "",
    targetAudience: "",
    competitors: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showMore, setShowMore] = useState(false);

  // WhatsApp number in full international format (no +, no spaces)
  const phoneIntl = "917708077500"; // +91 95669 31353

  // ---------- Validation ----------
  const emailOk = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const websiteOk = (v: string) =>
    !v || /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(v.trim());
  const phoneDigits = (v: string) => v.replace(/\D/g, "");
  const phoneOk = (v: string) => {
    const d = phoneDigits(v);
    return d.length >= 10 && d.length <= 13;
  };

  const validate = (fd = formData): Errors => {
    const next: Errors = {};
    if (!fd.name.trim() || fd.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!emailOk(fd.email)) next.email = "Enter a valid email address.";
    if (!phoneOk(fd.phone)) next.phone = "Enter a valid phone/WhatsApp number (10–13 digits).";
    if (!fd.services.length) next.services = "Select at least one service.";
    if (!fd.budget) next.budget = "Pick an approximate monthly budget.";
    if (!fd.message.trim() || fd.message.trim().length < 10) next.message = "Tell us a bit more (min 10 chars).";
    if (!websiteOk(fd.website)) next.website = "Enter a valid website URL (https://...).";
    return next;
  };

  const isValid = useMemo(() => Object.keys(validate()).length === 0, [formData]);

  // ---------- Handlers ----------
  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const set = new Set(prev.services);
      set.has(svc) ? set.delete(svc) : set.add(svc);
      const services = Array.from(set);
      // revalidate services immediately for UX
      setErrors((e) => ({ ...e, services: services.length ? "" : "Select at least one service." }));
      return { ...prev, services };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // live-validate field
    setErrors((prev) => {
      const nxt = { ...prev };
      const check = validate({ ...formData, [name]: value });
      // copy only the current field's error (if any)
      if (name in check) nxt[name as keyof Errors] = check[name as keyof Errors];
      else delete nxt[name as keyof Errors];
      return nxt;
    });
  };

  // ---------- WhatsApp message + navigation ----------
  const waMessage = useMemo(() => {
    const lines: string[] = [
      "Hello Adory Creatives 👋",
      "I'd like help with digital marketing.",
      "",
      formData.name && `Name: ${formData.name}`,
      formData.email && `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.company && `Company: ${formData.company}`,
      formData.website && `Website: ${formData.website}`,
      formData.services.length ? `Services Interested: ${formData.services.join(", ")}` : "",
      formData.budget && `Monthly Budget: ${formData.budget}`,
      formData.timeline && `Timeline: ${formData.timeline}`,
      formData.targetLocations && `Target Locations: ${formData.targetLocations}`,
      formData.targetAudience && `Target Audience: ${formData.targetAudience}`,
      formData.competitors && `Competitors: ${formData.competitors}`,
      "",
      formData.message && `Details: ${formData.message}`,
    ].filter(Boolean) as string[];
    return lines.join("\n");
  }, [formData]);

  const waHref = useMemo(
    () => `https://wa.me/${phoneIntl}?text=${encodeURIComponent(waMessage)}`,
    [waMessage]
  );

  const openWhatsApp = () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return; // block if invalid
    // same-tab navigation -> no popup blockers
    window.location.assign(waHref);
  };

  const handleBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.href = "/";
  };

  // ---------- UI ----------
  return (
    <section
      id="contact"
      className="py-14 bg-gradient-to-b from-black via-black to-cyan-950 min-h-screen text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Top bar */}
        <div className="mb-6 flex items-center">
          <Button
            type="button"
            onClick={handleBack}
            className="group h-9 px-3 text-sm bg-neutral-900/80 border border-cyan-500/30 hover:bg-neutral-800 hover:border-cyan-400/50 text-cyan-200 rounded-lg"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Button>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tell Us About Your <span className="text-cyan-400">Marketing Needs</span>
          </h2>
          <p className="text-base md:text-lg text-cyan-200/80 max-w-2xl mx-auto">
            Compact form • quick WhatsApp handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info cards (compact) */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="border border-cyan-500/20 bg-neutral-900/70">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-cyan-300">+91 7708077500 &</div>
                       <div className="text-cyan-300">+91 7200740944 </div>
                    <div className="text-cyan-200/70 text-xs mt-1">
                      Fast replies during business hours.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-cyan-500/20 bg-neutral-900/70">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Location</div>
                     <div className="text-cyan-300">1St cross st ,Kilpauk garden colony</div>
                    <div className="text-cyan-300"> Chennai, Tamil Nadu- 600010</div>
                    <div className="text-cyan-200/70 text-xs mt-1">
                      Mon–Fri • 9:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form (compact) */}
          <div className="lg:col-span-2">
            <Card className="border border-cyan-500/20 bg-neutral-900/80 shadow-xl">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Send className="w-5 h-5 text-cyan-400 mr-2" />
                  Project Brief
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {/* Essentials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9XXXXXXXXX"
                      className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Company (optional)
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Website (optional)
                    </label>
                    <Input
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      aria-invalid={!!errors.website}
                    />
                    {errors.website && <p className="text-xs text-red-400 mt-1">{errors.website}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Monthly Budget *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="h-9 w-full rounded-md bg-neutral-900/60 border border-neutral-800 text-sm text-white px-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      aria-invalid={!!errors.budget}
                    >
                      <option value="">Select…</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-xs text-red-400 mt-1">{errors.budget}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-cyan-200">
                      Timeline (optional)
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="h-9 w-full rounded-md bg-neutral-900/60 border border-neutral-800 text-sm text-white px-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Select…</option>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold mb-2 text-cyan-300">
                    Services Interested * <span className="font-normal text-cyan-200/80">(pick one or more)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICE_OPTIONS.map((svc) => {
                      const checked = formData.services.includes(svc);
                      return (
                        <label
                          key={svc}
                          className={`flex items-center gap-2 rounded-md px-3 py-2 border text-sm cursor-pointer ${
                            checked
                              ? "border-cyan-400 bg-cyan-500/10"
                              : "border-neutral-800 bg-neutral-900/60"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(svc)}
                            className="accent-cyan-500"
                          />
                          <span>{svc}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.services && <p className="text-xs text-red-400 mt-1">{errors.services}</p>}
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label className="block text-xs font-medium mb-1 text-cyan-200">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Briefly describe goals, products/services, and KPIs…"
                    className="text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Optional (collapsed) */}
                <button
                  type="button"
                  className="mt-4 inline-flex items-center text-xs text-cyan-300 hover:text-cyan-200"
                  onClick={() => setShowMore((s) => !s)}
                >
                  <ChevronDown className={`w-4 h-4 mr-1 transition-transform ${showMore ? "rotate-180" : ""}`} />
                  More details (optional)
                </button>

                {showMore && (
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1 text-cyan-200">
                        Target Locations
                      </label>
                      <Input
                        name="targetLocations"
                        value={formData.targetLocations}
                        onChange={handleChange}
                        placeholder="e.g., Chennai, TN, India"
                        className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1 text-cyan-200">
                        Target Audience
                      </label>
                      <Input
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleChange}
                        placeholder="e.g., SMB owners, students…"
                        className="h-9 text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium mb-1 text-cyan-200">
                        Competitors (URLs)
                      </label>
                      <Textarea
                        name="competitors"
                        value={formData.competitors}
                        onChange={handleChange}
                        rows={3}
                        placeholder="https://competitor1.com, https://competitor2.com"
                        className="text-sm bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      />
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6">
                  <Button
                    type="button"
                    onClick={openWhatsApp}
                    disabled={!isValid}
                    className="w-full h-10 text-sm bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-all"
                    aria-disabled={!isValid}
                  >
                    Send on WhatsApp
                    <MessageCircle className="w-4 h-4 ml-2 inline-block" />
                  </Button>
                  {!isValid && (
                    <p className="mt-2 text-xs text-red-300">
                      Please fix the highlighted fields to continue.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
