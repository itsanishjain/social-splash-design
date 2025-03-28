
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Manga style decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 starburst"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 15 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        NEW!
      </motion.div>
      
      <motion.div 
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-yellow-300 border-4 border-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 0.7 }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto comic-panel p-8 md:p-12 rounded-lg text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="heading-lg mb-4 relative">
              Ready to <motion.span 
                className="sound-effect inline-block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.1 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1.5 
                }}
              >TRANSFORM</motion.span> your social experience?
            </h2>
          </motion.div>
          
          <motion.div 
            className="speech-bubble mb-8 max-w-2xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="body-lg">
              Join thousands already creating meaningful connections on the platform built for genuine social engagement!
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="manga-btn bg-primary hover:bg-primary text-white rounded-md px-8 flex items-center gap-2" asChild>
                <Link to="/feed">
                  <Sparkles className="w-5 h-5" />
                  Try the Feed Demo
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="manga-btn bg-white hover:bg-white text-black rounded-md px-8">
                Contact Sales
              </Button>
            </motion.div>
          </div>
          
          <motion.p 
            className="body-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            No credit card required. Start with our free plan and upgrade anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
