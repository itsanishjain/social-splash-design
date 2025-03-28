
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Bell, Mail } from 'lucide-react';

const MobileNav: React.FC = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden flex justify-around items-center p-2 z-10"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button 
        className="p-3 text-primary flex flex-col items-center"
        whileTap={{ scale: 0.9 }}
      >
        <Home size={24} />
      </motion.button>
      
      <motion.button 
        className="p-3 text-muted-foreground flex flex-col items-center"
        whileTap={{ scale: 0.9 }}
      >
        <Search size={24} />
      </motion.button>
      
      <motion.button 
        className="p-3 text-muted-foreground flex flex-col items-center"
        whileTap={{ scale: 0.9 }}
      >
        <Bell size={24} />
      </motion.button>
      
      <motion.button 
        className="p-3 text-muted-foreground flex flex-col items-center"
        whileTap={{ scale: 0.9 }}
      >
        <Mail size={24} />
      </motion.button>
    </motion.div>
  );
};

export default MobileNav;
