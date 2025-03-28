
import React from 'react';
import { MessageSquare, Users, Bell, Heart, Camera, Link } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8 text-violet-400" />,
    title: "Community Building",
    description: "Create and join communities based on shared interests, passions, and goals."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-pink-400" />,
    title: "Real-time Messaging",
    description: "Connect instantly with friends and followers through our lightning-fast messaging system."
  },
  {
    icon: <Bell className="h-8 w-8 text-indigo-400" />,
    title: "Smart Notifications",
    description: "Our AI prioritizes notifications so you never miss what matters most to you."
  },
  {
    icon: <Heart className="h-8 w-8 text-violet-400" />,
    title: "Meaningful Engagement",
    description: "Our algorithm promotes genuine interactions over vanity metrics."
  },
  {
    icon: <Camera className="h-8 w-8 text-pink-400" />,
    title: "Rich Media Sharing",
    description: "Share high-quality photos, videos, and stories with your network effortlessly."
  },
  {
    icon: <Link className="h-8 w-8 text-indigo-400" />,
    title: "Cross-Platform Integration",
    description: "Seamlessly connect your other social accounts for a unified online presence."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background shapes */}
      <div className="shape circle bg-purple-500/10 w-96 h-96 top-20 left-20 blur-3xl"></div>
      <div className="shape circle bg-indigo-500/10 w-96 h-96 bottom-20 right-20 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6 gradient-text">
            Designed for Connection
          </h2>
          <p className="body-lg text-muted-foreground">
            Our platform combines cutting-edge technology with intuitive design to create the most engaging social experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`neo-card p-8 group hover:translate-y-[-8px] transition-all duration-500 relative ${index % 3 === 0 ? 'mt-10' : index % 3 === 1 ? 'mt-0' : 'mt-20'}`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-indigo-500/10 rounded-[inherit] transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl"></div>
              
              <div className="p-4 rounded-2xl inline-block mb-6 bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="body-md text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
