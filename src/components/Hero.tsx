
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      
      <div className="container py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 max-w-lg">
          <div className="animate-initial animate-fade-in">
            <span className="inline-block py-2 px-4 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Connect. Share. Thrive.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 gradient-text">
              Where Connections Become Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join millions creating meaningful connections on our next-gen social platform. Share moments that matter with people who care.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-initial animate-fade-in-delay-1">
            <Button size="lg" className="rounded-full text-base px-8">Get Started</Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground animate-initial animate-fade-in-delay-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 border-2 border-background"></div>
              ))}
            </div>
            <p className="text-sm">Join <span className="font-bold text-foreground">10K+</span> early adopters</p>
          </div>
        </div>
        
        {/* Right Column: App Preview */}
        <div className="relative animate-initial animate-fade-in-delay-3">
          <div className="relative z-10 animate-float">
            <div className="glass-card rounded-xl p-4 max-w-sm mx-auto overflow-hidden">
              <div className="absolute top-3 right-3 bg-violet-500/10 p-1 rounded-full">
                <Share size={16} className="text-violet-500" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"></div>
                <div>
                  <p className="font-medium text-sm">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
              
              <p className="text-sm mb-4">Finally launched my new photography portfolio! So excited to share my work with all of you ✨📸</p>
              
              <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 h-40 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Image placeholder</p>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart size={14} />
                  <span>342</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} />
                  <span>28 comments</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-pink-500/30 blur-3xl -z-10"></div>
          <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
