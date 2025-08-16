import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/ce88c082-961b-4ed5-a733-1041f86b42e8.png" 
                alt="Adory Creatives" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Crafting digital experiences that captivate, engage, and convert. We tell your story through innovative marketing strategies and creative excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Instagram className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Web Development", 
                "Social Media Marketing",
                "Content Creation",
                "Brand Design",
                "Performance Marketing"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
<<<<<<< HEAD
                <span className="text-primary-foreground/80">hello@adorycreatives.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-foreground/80">123 Creative Street<br />Digital City, DC 12345</span>
=======
                <span className="text-primary-foreground/80">adorycreatives@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+91 (770) 807-7500</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-foreground/80">1 st cross Street Kilpauk garden colony<br />Kilpauk, Chennai, Tamil Nadu 600010</span>
>>>>>>> 87897c3 (chore: setup GH Pages (workflow, ignore, SEO build))
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Adory Creatives. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;