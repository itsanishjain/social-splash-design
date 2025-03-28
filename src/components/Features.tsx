
import React from 'react';
import { MessageSquare, Users, Bell, Heart, Camera, Link } from 'lucide-react';
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community Building",
    description: "Create and join communities based on shared interests and goals."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Real-time Messaging",
    description: "Connect instantly with friends through our fast messaging system."
  },
  {
    icon: <Bell className="h-6 w-6 text-primary" />,
    title: "Smart Notifications",
    description: "Our AI prioritizes notifications so you never miss what matters."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 relative overflow-hidden">
      <div className="container section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="illustrated-card">
              <div className="accent-bubble w-32 h-32 top-10 -left-5" style={{"--color-value": "170, 220, 180"} as React.CSSProperties}></div>
              <div className="accent-bubble w-24 h-24 -bottom-5 right-10" style={{"--color-value": "255, 160, 190"} as React.CSSProperties}></div>
              
              <img 
                src="/lovable-uploads/1ab1c65e-cc29-4a7a-85b8-aaef4344911c.png" 
                alt="Woman using Connectify" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="heading-lg mb-4">
                Simple tools for meaningful connections
              </h2>
              <p className="body-lg">
                Our platform combines intuitive design with powerful features to create the most engaging social experience.
              </p>
            </div>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="p-3 bg-secondary rounded-xl h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="body-md">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="cta-button">
              Explore all features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
