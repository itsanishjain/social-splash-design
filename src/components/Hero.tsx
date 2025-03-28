
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 overflow-hidden relative">
      {/* Background shapes */}
      <div className="shape circle bg-blue-200 w-64 h-64 -top-10 -right-10 opacity-30"></div>
      <div className="shape triangle bg-orange-200 w-24 h-24 bottom-20 left-10 opacity-40"></div>
      <div className="shape square bg-green-200 w-20 h-20 top-40 right-20 opacity-30"></div>
      
      <div className="container section-container grid lg:grid-cols-2 gap-8 items-center relative">
        {/* Left Column: Content */}
        <div className="space-y-8 max-w-xl">
          <div>
            <h1 className="heading-xl mb-6">
              Connect with your community <span className="text-primary">effortlessly</span>
            </h1>
            <p className="body-lg">
              Join millions creating meaningful connections on our next-gen social platform. Share moments that matter with people who care.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="cta-button">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="secondary-button">
              How it works
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background"></div>
              ))}
            </div>
            <p className="text-sm">Trusted by <span className="font-bold text-foreground">10,000+</span> users</p>
          </div>
        </div>
        
        {/* Right Column: Illustration */}
        <div className="relative lg:pl-10">
          <div className="illustrated-card floating">
            <div className="accent-bubble w-32 h-32 -top-5 -right-5" style={{"--color-value": "120, 180, 255"} as React.CSSProperties}></div>
            <div className="accent-bubble w-20 h-20 bottom-10 -left-5" style={{"--color-value": "255, 170, 120"} as React.CSSProperties}></div>
            
            <img 
              src="/lovable-uploads/1ab1c65e-cc29-4a7a-85b8-aaef4344911c.png" 
              alt="People connecting online" 
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
