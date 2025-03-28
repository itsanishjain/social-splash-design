
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="shape circle bg-purple-200 w-48 h-48 top-10 left-10 opacity-30"></div>
      <div className="shape square bg-blue-200 w-32 h-32 bottom-10 right-10 opacity-30"></div>
      
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-border/50 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
          
          <h2 className="heading-lg mb-4">
            Ready to transform your social experience?
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Join thousands already creating meaningful connections on the platform built for genuine social engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-button">
              Get Started — It's Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="secondary-button">
              Contact Sales
            </Button>
          </div>
          
          <p className="body-sm mt-6 text-muted-foreground">
            No credit card required. Start with our free plan and upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
