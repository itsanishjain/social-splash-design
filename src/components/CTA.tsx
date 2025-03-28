
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto gradient-border neo-card p-10 md:p-16 text-center">
          {/* Abstract shapes */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-500/30 rounded-full blur-xl"></div>
          
          <h2 className="heading-lg mb-6">
            Ready to <span className="gradient-text">transform</span> your social experience?
          </h2>
          <p className="body-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands already creating meaningful connections on the platform built for genuine social engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full text-base px-8 py-6 gradient-bg hover:opacity-90">
              Get Started — It's Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 border-white/20 hover:bg-white/10 hover:text-white">
              Contact Sales
            </Button>
          </div>
          
          <p className="body-sm text-muted-foreground mt-8">
            No credit card required. Start with our free plan and upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
