
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden relative">
      {/* Abstract shapes in background */}
      <div className="shape circle bg-purple-500 w-96 h-96 -top-48 -right-48 blur-3xl"></div>
      <div className="shape circle bg-indigo-500 w-96 h-96 -bottom-48 -left-48 blur-3xl"></div>
      <div className="shape triangle bg-pink-500 w-64 h-64 top-1/4 right-1/4 blur-xl"></div>
      <div className="shape diamond bg-purple-600 w-64 h-64 bottom-1/4 left-1/4 blur-xl"></div>
      
      <div className="container py-20 grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Column: Content */}
        <div className="space-y-8 max-w-lg relative">
          <div className="animate-initial animate-fade-in">
            <span className="inline-block py-2 px-4 bg-primary/20 text-primary/90 rounded-full text-sm font-medium mb-6">
              Connect. Share. Thrive.
            </span>
            <h1 className="heading-xl mb-6 gradient-text">
              Where Connections <br />Become Community
            </h1>
            <p className="body-lg text-muted-foreground">
              Join millions creating meaningful connections on our next-gen social platform. Share moments that matter with people who care.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-initial animate-fade-in-delay-1">
            <Button size="lg" className="rounded-full text-base px-8 gradient-bg hover:opacity-90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-white/20 hover:bg-white/10 hover:text-white">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground animate-initial animate-fade-in-delay-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-background"></div>
              ))}
            </div>
            <p className="text-sm">Join <span className="font-bold text-white">10K+</span> early adopters</p>
          </div>
        </div>
        
        {/* Right Column: App Preview */}
        <div className="relative">
          {/* Blob shape behind the card */}
          <div className="absolute blob w-full h-full -top-10 -right-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"></div>
          
          <div className="relative z-10 floating">
            <div className="gradient-border neo-card p-6 max-w-sm mx-auto overflow-hidden">
              <div className="absolute top-4 right-4 bg-violet-500/20 p-1.5 rounded-full">
                <Share size={18} className="text-violet-400" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 glow"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
              
              <p className="mb-6">Finally launched my new photography portfolio! So excited to share my work with all of you ✨📸</p>
              
              <div className="rounded-xl overflow-hidden mb-6 bg-gray-800 h-48 flex items-center justify-center relative gradient-border">
                <img 
                  src="https://picsum.photos/id/1036/600/400" 
                  alt="Landscape photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-pink-400" />
                  <span>342</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-purple-400" />
                  <span>28 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
