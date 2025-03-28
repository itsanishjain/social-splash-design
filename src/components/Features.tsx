
import React from 'react';
import { MessageSquare, Users, Bell, Heart, Camera, Link } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8 text-violet-500" />,
    title: "Community Building",
    description: "Create and join communities based on shared interests, passions, and goals."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-pink-500" />,
    title: "Real-time Messaging",
    description: "Connect instantly with friends and followers through our lightning-fast messaging system."
  },
  {
    icon: <Bell className="h-8 w-8 text-blue-500" />,
    title: "Smart Notifications",
    description: "Our AI prioritizes notifications so you never miss what matters most to you."
  },
  {
    icon: <Heart className="h-8 w-8 text-violet-500" />,
    title: "Meaningful Engagement",
    description: "Our algorithm promotes genuine interactions over vanity metrics."
  },
  {
    icon: <Camera className="h-8 w-8 text-pink-500" />,
    title: "Rich Media Sharing",
    description: "Share high-quality photos, videos, and stories with your network effortlessly."
  },
  {
    icon: <Link className="h-8 w-8 text-blue-500" />,
    title: "Cross-Platform Integration",
    description: "Seamlessly connect your other social accounts for a unified online presence."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Designed for Connection
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with intuitive design to create the most engaging social experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-3 rounded-lg inline-block mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
