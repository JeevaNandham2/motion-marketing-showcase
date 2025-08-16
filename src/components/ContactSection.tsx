<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useMemo, useState } from "react";
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
<<<<<<< HEAD
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
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
      icon: Mail,
      title: "Email Us",
      info: "hello@adorycreatives.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Creative Street, Digital City",
      description: "Our creative studio"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Let's Create Something
            <span className="text-accent"> Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ready to take your digital presence to the next level? Get in touch and let's start crafting your success story.
=======
import { MapPin, MessageCircle, Send, ArrowLeft } from "lucide-react";

type MultiGroups = "services" | "goals" | "channels";

const SERVICE_OPTIONS = [
  "SEO",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Web Design & Development",
  "Content / Blog",
  "Branding / Creatives",
  "Video / Motion Graphics",
];

const GOAL_OPTIONS = [
  "Increase Leads",
  "Increase Sales/ROAS",
  "Boost Brand Awareness",
  "Improve Google Rankings",
  "Fix Tracking/Analytics",
];

const CHANNEL_OPTIONS = ["SEO", "Google Ads", "Meta Ads", "LinkedIn Ads", "Email", "Organic Social"];

const BUDGET_OPTIONS = ["< ₹25k / month", "₹25k–₹50k", "₹50k–₹1L", "₹1L–₹3L", "> ₹3L / month"];
const TIMELINE_OPTIONS = ["ASAP (0–2 weeks)", "This Month", "1–3 Months", "3–6 Months"];
const INDUSTRY_OPTIONS = [
  "E-commerce",
  "SaaS / Tech",
  "Healthcare",
  "Real Estate",
  "Education",
  "Restaurants / F&B",
  "Local Services",
  "Other",
];
const CONTACT_OPTIONS = ["WhatsApp", "Phone Call", "Email"];
const BEST_TIME_OPTIONS = ["9–11 AM", "11 AM–1 PM", "2–4 PM", "4–7 PM"];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    // Contact
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    // DM specifics
    services: [] as string[],
    goals: [] as string[],
    budget: "",
    timeline: "",
    targetLocations: "",
    targetAudience: "",
    channels: [] as string[],
    monthlyTraffic: "",
    analyticsSetup: "", // Yes/No
    competitors: "",
    referral: "", // how did you hear about us
    // Free text
    message: "",
    preferredContact: "WhatsApp",
    bestTime: "",
  });

  // helper for checkbox groups
  const toggleMulti = (group: MultiGroups, value: string) => {
    setFormData((prev) => {
      const set = new Set(prev[group]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [group]: Array.from(set) as any };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Full international format (no +, no spaces): +91 95669 31353 -> "919566931353"
  const phoneIntl = "919566931353";

  // Build the WhatsApp message from the form fields
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
      formData.industry && `Industry: ${formData.industry}`,
      formData.services.length ? `Services Interested: ${formData.services.join(", ")}` : "",
      formData.goals.length ? `Goals: ${formData.goals.join(", ")}` : "",
      formData.budget && `Monthly Ad Budget: ${formData.budget}`,
      formData.timeline && `Timeline: ${formData.timeline}`,
      formData.targetLocations && `Target Locations: ${formData.targetLocations}`,
      formData.targetAudience && `Target Audience: ${formData.targetAudience}`,
      formData.channels.length ? `Current Channels: ${formData.channels.join(", ")}` : "",
      formData.monthlyTraffic && `Current Monthly Traffic (approx): ${formData.monthlyTraffic}`,
      formData.analyticsSetup && `GA/SC Setup: ${formData.analyticsSetup}`,
      formData.competitors && `Competitors: ${formData.competitors}`,
      formData.referral && `How you found us: ${formData.referral}`,
      formData.preferredContact && `Preferred Contact: ${formData.preferredContact}`,
      formData.bestTime && `Best Time to Contact: ${formData.bestTime}`,
      "",
      formData.message && `Details: ${formData.message}`,
    ].filter(Boolean) as string[];
    return lines.join("\n");
  }, [formData]);

  // Build the most compatible WA link; use _top for in-app browsers (IG/FB)
  const { waHref, waTarget } = useMemo(() => {
    const isInApp =
      typeof navigator !== "undefined" &&
      /(FBAN|FBAV|Instagram|Line|Twitter|LinkedInApp|Pinterest)/i.test(
        navigator.userAgent || ""
      );

    const href = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(waMessage)}`;
    return {
      waHref: href,
      waTarget: (isInApp ? "_top" : "_blank") as "_top" | "_blank",
    };
  }, [waMessage]);

  const handleBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.href = "/";
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black via-black to-cyan-950 min-h-screen text-white"
    >
      <div className="container mx-auto px-6">
        {/* Top bar with Back button */}
        <div className="mb-8 flex items-center">
          <Button
            type="button"
            onClick={handleBack}
            className="group bg-neutral-900/80 border border-cyan-500/30 hover:bg-neutral-800 hover:border-cyan-400/50 text-cyan-200 rounded-lg"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tell Us About Your{" "}
            <span className="text-cyan-400">Marketing Needs</span>
          </h2>
          <p className="text-xl text-cyan-200/80 max-w-3xl mx-auto">
            Fill in the details below and send everything to us on WhatsApp in one click.
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<<<<<<< HEAD
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-accent font-medium mb-1">{item.info}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Logo */}
            <div className="text-center mt-8 animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
              <img 
                src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png" 
                alt="Adory Creatives" 
                className="h-20 mx-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
=======
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-cyan-500/20 bg-neutral-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-cyan-300 font-medium mb-1">+91 95669 31353</p>
                    <p className="text-sm text-cyan-200/70">
                      Fastest way to reach us during business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-cyan-500/20 bg-neutral-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-cyan-300 font-medium mb-1">Kilpauk, Chennai</p>
                    <p className="text-sm text-cyan-200/70">
                      Mon–Fri • 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <img
                src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png"
                alt="Adory Creatives"
                className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
              />
            </div>
          </div>

<<<<<<< HEAD
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-xl animate-fade-in-right">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="w-6 h-6 text-accent mr-3" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:scale-105"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="transition-all duration-300 focus:scale-105"
                      placeholder="Tell us about your project, goals, and how we can help you succeed..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
=======
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border border-cyan-500/20 bg-neutral-900/80 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 text-cyan-400 mr-3" />
                  Project Brief
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  {/* Contact */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-cyan-300">
                      Contact Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Full Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Phone / WhatsApp
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9XXXXXXXXX"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Website URL
                        </label>
                        <Input
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://example.com"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business / Scope */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-cyan-300">
                      Business & Scope
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full rounded-md bg-neutral-900/60 border-neutral-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="">Select…</option>
                          {INDUSTRY_OPTIONS.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Monthly Ad Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-md bg-neutral-900/60 border-neutral-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="">Select…</option>
                          {BUDGET_OPTIONS.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full rounded-md bg-neutral-900/60 border-neutral-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  </div>

                  {/* Services Interested */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">
                      Services Interested
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {SERVICE_OPTIONS.map((svc) => {
                        const checked = formData.services.includes(svc);
                        return (
                          <label
                            key={svc}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${
                              checked
                                ? "border-cyan-400 bg-cyan-500/10"
                                : "border-neutral-800 bg-neutral-900/60"
                            } cursor-pointer`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleMulti("services", svc)}
                              className="accent-cyan-500"
                            />
                            <span className="text-sm">{svc}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Goals */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">
                      Goals
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {GOAL_OPTIONS.map((goal) => {
                        const checked = formData.goals.includes(goal);
                        return (
                          <label
                            key={goal}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${
                              checked
                                ? "border-cyan-400 bg-cyan-500/10"
                                : "border-neutral-800 bg-neutral-900/60"
                            } cursor-pointer`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleMulti("goals", goal)}
                              className="accent-cyan-500"
                            />
                            <span className="text-sm">{goal}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Targeting */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-cyan-300">
                      Targeting
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Target Locations
                        </label>
                        <Input
                          name="targetLocations"
                          value={formData.targetLocations}
                          onChange={handleChange}
                          placeholder="e.g., Chennai, Tamil Nadu, India"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Target Audience
                        </label>
                        <Input
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleChange}
                          placeholder="e.g., Homeowners, SMB founders, Students"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Marketing */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">
                      Current Marketing
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                      {CHANNEL_OPTIONS.map((ch) => {
                        const checked = formData.channels.includes(ch);
                        return (
                          <label
                            key={ch}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${
                              checked
                                ? "border-cyan-400 bg-cyan-500/10"
                                : "border-neutral-800 bg-neutral-900/60"
                            } cursor-pointer`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleMulti("channels", ch)}
                              className="accent-cyan-500"
                            />
                            <span className="text-sm">{ch}</span>
                          </label>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Monthly Traffic (approx)
                        </label>
                        <Input
                          name="monthlyTraffic"
                          value={formData.monthlyTraffic}
                          onChange={handleChange}
                          placeholder="e.g., 5,000"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          GA / Search Console Setup
                        </label>
                        <select
                          name="analyticsSetup"
                          value={formData.analyticsSetup}
                          onChange={handleChange}
                          className="w-full rounded-md bg-neutral-900/60 border-neutral-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="">Select…</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Not Sure">Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          How did you hear about us?
                        </label>
                        <Input
                          name="referral"
                          value={formData.referral}
                          onChange={handleChange}
                          placeholder="e.g., Google, Instagram, Friend"
                          className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium mb-2 text-cyan-200">
                        Competitor URLs (optional)
                      </label>
                      <Textarea
                        name="competitors"
                        value={formData.competitors}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g., https://competitor1.com, https://competitor2.com"
                        className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Preferences & Message */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-cyan-300">
                      Preferences & Additional Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Preferred Contact
                        </label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full rounded-md bg-neutral-900/60 border-neutral-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          {CONTACT_OPTIONS.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-cyan-200">
                          Best Time to Contact
                        </label>
                        <select
                          name="bestTime"
                          value={formData.bestTime}
                          onChange={handleChange}
                          className="w-full rounded-md bg-neutral-900/60 border-neutral-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="">Select…</option>
                          {BEST_TIME_OPTIONS.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-1" />
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium mb-2 text-cyan-200">
                        Anything else we should know?
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Project goals, deadlines, current challenges, etc."
                        className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Action: open WhatsApp with prefilled text */}
                  <Button
                    asChild
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105"
                  >
                    <a href={waHref} target={waTarget} rel="noopener noreferrer" aria-label="Message us on WhatsApp">
                      Send on WhatsApp
                      <MessageCircle className="w-5 h-5 ml-2 inline-block" />
                    </a>
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ContactSection;
=======
export default ContactSection;
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
