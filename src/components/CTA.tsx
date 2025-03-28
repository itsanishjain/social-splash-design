
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Zap, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#F0F8FF]">
      {/* Manga style decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 starburst"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 15 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        SPECIAL!
      </motion.div>
      
      <div className="absolute inset-0 dot-pattern"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="manga-panel p-8 md:p-12 rounded-lg text-center relative max-w-3xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 speed-lines transform -rotate-45 opacity-30"></div>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="heading-lg mb-4 text-[#0A0A0A]">
              Ready to <motion.span 
                className="sound-effect inline-block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.1 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1.5 
                }}
              >POWER UP</motion.span> your social experience?
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
              <Button size="lg" className="manga-button bg-[#00A7E1] hover:bg-[#00A7E1] text-white" asChild>
                <Link to="/feed">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try the Feed Demo
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black">
                <Zap className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Star className="text-[#FFD700] fill-[#FFD700] h-5 w-5" />
            <p className="body-sm">No credit card required. Start with our free plan!</p>
            <Star className="text-[#FFD700] fill-[#FFD700] h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
