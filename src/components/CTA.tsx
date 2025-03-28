
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-pink-500/5 to-blue-500/5"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl text-center">
          <h2 className="heading-lg mb-4">
            Ready to <span className="gradient-text">transform</span> your social experience?
          </h2>
          <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands already creating meaningful connections on the platform built for genuine social engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full text-base px-8" asChild>
              <Link to="/feed">Try the Feed Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8">
              Contact Sales
            </Button>
          </div>
          
          <p className="body-sm text-muted-foreground mt-6">
            No credit card required. Start with our free plan and upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
