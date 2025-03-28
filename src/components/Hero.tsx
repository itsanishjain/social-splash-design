
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Star, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden bg-[#F0F8FF]">
      {/* Manga Background Elements */}
      <div className="absolute inset-0 dot-pattern"></div>
      <div className="absolute top-20 right-20 speed-lines transform rotate-45"></div>
      
      <div className="container py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -15 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="starburst inline-block py-2 px-4 mb-6 text-black"
            >
              NEW!
            </motion.div>
            
            <h1 className="heading-xl mb-4 text-[#0A0A0A] font-bold relative font-['Slackey']">
              Find Your Manga Crew in <span className="sound-effect">MangaVerse</span>!
            </h1>
            
            <div className="speech-bubble">
              <p className="body-lg text-[#333]">
                Talk about your favorite manga with fellow fans! Share your thoughts on beloved characters, unforgettable scenes, and predictions for upcoming chapters!
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button className="manga-button bg-[#FF3860] hover:bg-[#FF3860] text-black border-black">
              <Sparkles className="w-5 h-5 mr-2 text-black" />
              Start Now!
            </Button>
            <Button variant="outline" className="manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black border-black">
              <Zap className="w-5 h-5 mr-2 text-black" />
              See Demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 text-[#333]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-black overflow-hidden"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * i, duration: 0.3 }}
                >
                  <img 
                    src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=manga${i}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-sm">Already <span className="font-bold text-[#FF3860]">10,000+</span> manga fans have joined!</p>
          </motion.div>
        </div>
        
        {/* Right Column: App Preview in Manga Style */}
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div 
            className="manga-panel p-6 bg-white max-w-sm mx-auto"
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-3 right-3 bg-[#FFD700] p-1 rounded-full border-2 border-black">
              <Star size={16} className="text-black" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black">
                <img 
                  src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Tanjiro" 
                  alt="avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-sm">MangaFan42</p>
                <p className="text-xs text-[#555]">Just now</p>
              </div>
            </div>
            
            <p className="text-sm mb-4 font-medium">Just read the latest One Piece chapter! Luffy's new technique is insane! What did you all think? 😲🏴‍☠️</p>
            
            <div className="manga-panel-small overflow-hidden mb-4 h-40 flex items-center justify-center bg-[#F0F8FF]">
              <img 
                src="https://api.dicebear.com/7.x/pixel-art/svg?seed=onepiece&backgroundColor=ffcb77" 
                alt="manga art" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex items-center justify-between text-xs text-[#555]">
              <motion.div 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="p-1 bg-[#FFD700] rounded-full border border-black">
                  <motion.div
                    whileTap={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 15, -15, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Star size={14} className="text-black" />
                  </motion.div>
                </div>
                <span>342</span>
              </motion.div>
              <div className="flex items-center gap-1">
                <div className="p-1 bg-[#00A7E1] rounded-full border border-black">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                  >
                    <Sparkles size={14} className="text-white" />
                  </motion.div>
                </div>
                <span>28 comments</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 -right-4 w-20 h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="sound-effect whitespace-nowrap">
              AWESOME!
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
