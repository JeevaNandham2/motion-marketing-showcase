import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FloatingCardsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const portfolioCards = [
    {
      title: "E-commerce Growth",
      category: "SEO & Performance",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&h=300",
      result: "+300% Sales",
      color: "bg-blue-50",
      rotation: "-rotate-3"
    },
    {
      title: "Social Media Campaign",
      category: "Content & Influencer",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&h=300",
      result: "+450% Engagement",
      color: "bg-pink-50",
      rotation: "rotate-2"
    },
    {
      title: "Brand Identity",
      category: "Design & Strategy",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&h=300",
      result: "Complete Rebrand",
      color: "bg-purple-50",
      rotation: "-rotate-1"
    },
    {
      title: "Lead Generation",
      category: "PPC & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300",
      result: "500+ Leads/Month",
      color: "bg-green-50",
      rotation: "rotate-3"
    },
    {
      title: "Viral Content",
      category: "Video Marketing",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=400&h=300",
      result: "2M+ Views",
      color: "bg-orange-50",
      rotation: "-rotate-2"
    },
    {
      title: "Local SEO Success",
      category: "Local Marketing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=300",
      result: "+80% Foot Traffic",
      color: "bg-yellow-50",
      rotation: "rotate-1"
    },
    {
      title: "Email Automation",
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=400&h=300",
      result: "60% Open Rate",
      color: "bg-indigo-50",
      rotation: "-rotate-3"
    },
    {
      title: "Mobile App Marketing",
      category: "App Store Optimization",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&h=300",
      result: "1M+ Downloads",
      color: "bg-teal-50",
      rotation: "rotate-2"
    }
  ];

  const duplicatedCards = [...portfolioCards, ...portfolioCards];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Creative 
            <span className="text-accent"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover how we've helped brands transform their digital presence with innovative marketing strategies
          </p>
        </div>
      </div>

      {/* Floating Cards Container */}
      <div className="relative h-96 overflow-hidden">
        {/* First Row - Moving Right */}
        <div 
          className="absolute top-0 flex gap-8 animate-infinite-scroll"
          style={{ 
            transform: `translateX(-${scrollPosition}px)`,
            width: 'fit-content'
          }}
        >
          {duplicatedCards.map((card, index) => (
            <Card 
              key={`row1-${index}`}
              className={`group relative w-80 h-48 ${card.color} ${card.rotation} hover:rotate-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer border-0 shadow-lg`}
              style={{
                transform: `${card.rotation.replace('rotate', 'rotateZ')} translateY(${Math.sin(scrollPosition * 0.01 + index) * 5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <CardContent className="p-0 h-full relative overflow-hidden rounded-lg">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-2/3 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs bg-white/90 text-primary">
                    {card.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">{card.title}</h3>
                  <p className="text-accent font-semibold text-xs">{card.result}</p>
                </div>
                {/* Hanging effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300 opacity-30"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full opacity-40"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - Moving Left */}
        <div 
          className="absolute top-32 flex gap-8"
          style={{ 
            transform: `translateX(${scrollPosition * 0.8 - 400}px)`,
            width: 'fit-content'
          }}
        >
          {duplicatedCards.slice().reverse().map((card, index) => (
            <Card 
              key={`row2-${index}`}
              className={`group relative w-80 h-48 ${card.color} ${card.rotation.includes('-') ? card.rotation.replace('-', '') : '-' + card.rotation} hover:rotate-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer border-0 shadow-lg`}
              style={{
                transform: `${(card.rotation.includes('-') ? card.rotation.replace('-', '') : '-' + card.rotation).replace('rotate', 'rotateZ')} translateY(${Math.sin(scrollPosition * 0.015 + index) * 5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <CardContent className="p-0 h-full relative overflow-hidden rounded-lg">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-2/3 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs bg-white/90 text-primary">
                    {card.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">{card.title}</h3>
                  <p className="text-accent font-semibold text-xs">{card.result}</p>
                </div>
                {/* Hanging effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300 opacity-30"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full opacity-40"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gradient overlays to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default FloatingCardsSection;