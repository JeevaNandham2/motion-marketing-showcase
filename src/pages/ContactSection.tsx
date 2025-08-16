import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MessageCircle, Send, ArrowLeft } from "lucide-react";

const SERVICE_OPTIONS = [
  "SEO",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Web Design",
  "Branding / Creatives",
];

type MultiGroup = "services";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });

  const toggleMulti = (group: MultiGroup, value: string) => {
    setFormData((prev) => {
      const set = new Set(prev[group] as string[]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [group]: Array.from(set) as any };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const phoneIntl = "917708077500";

  const waMessage = useMemo(() => {
    const lines = [
      "Hello Adory Creatives 👋",
      "I'd like help with digital marketing.",
      "",
      formData.name && `Name: ${formData.name}`,
      formData.email && `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.services.length
        ? `Services Interested: ${formData.services.join(", ")}`
        : "",
      formData.message && `Details: ${formData.message}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [formData]);

  const { waHref, waTarget } = useMemo(() => {
    const isInApp =
      typeof navigator !== "undefined" &&
      /(FBAN|FBAV|Instagram|Line|Twitter|LinkedInApp|Pinterest)/i.test(
        navigator.userAgent || ""
      );
    return {
      waHref: `https://wa.me/${phoneIntl}?text=${encodeURIComponent(waMessage)}`,
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
      className="py-16 bg-gradient-to-b from-black via-black to-cyan-950 min-h-screen text-white"
    >
      <div className="container mx-auto px-6">
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

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quick <span className="text-cyan-400">Contact</span>
          </h2>
          <p className="text-lg text-cyan-200/80 max-w-2xl mx-auto">
            Tell us the basics and ping us on WhatsApp in one click.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border border-cyan-500/20 bg-neutral-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-cyan-300 font-medium mb-1">
                      +91 7708077500
                    </p>
                    <p className="text-sm text-cyan-200/70">
                      Fastest way to reach us (9 AM – 7 PM).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-cyan-500/20 bg-neutral-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-cyan-300 font-medium mb-1">
                      Kilpauk, Chennai
                    </p>
                    <p className="text-sm text-cyan-200/70">
                      Mon–Fri • 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <img
                src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png"
                alt="Adory Creatives"
                className="h-16 mx-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Compact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-cyan-500/20 bg-neutral-900/80 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 text-cyan-400 mr-3" />
                  Project Brief (Compact)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        Email
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
                  </div>

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

                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-200">
                      Brief Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your goals, timelines, and any links…"
                      className="bg-neutral-900/60 border-neutral-800 text-white placeholder-neutral-400 focus-visible:ring-cyan-500 focus-visible:border-cyan-500"
                    />
                  </div>

                  <Button
                    asChild
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105"
                  >
                    <a
                      href={waHref}
                      target={waTarget}
                      rel="noopener noreferrer"
                      aria-label="Message us on WhatsApp"
                    >
                      Send on WhatsApp
                      <MessageCircle className="w-5 h-5 ml-2 inline-block" />
                    </a>
                  </Button>

                  <p className="text-xs text-cyan-200/60 text-center">
                    By contacting us you agree to be reached out on the details
                    provided.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
