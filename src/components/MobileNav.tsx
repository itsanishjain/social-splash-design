
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, Bell, Mail } from 'lucide-react';

const MobileNav: React.FC = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-background comic-border border-t-0 md:hidden flex justify-around items-center p-2 z-10"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/">
        <motion.button 
          className="p-3 text-primary flex flex-col items-center"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <Home size={24} />
          </motion.div>
        </motion.button>
      </Link>
      
      <motion.button 
        className="p-3 text-muted-foreground flex flex-col items-center"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Search size={24} />
        </motion.div>
      </motion.button>
      
      <motion.button 
        className="p-3 text-muted-foreground flex flex-col items-center"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Bell size={24} />
        </motion.div>
      </motion.button>
      
      <Link to="/feed">
        <motion.button 
          className="p-3 text-muted-foreground flex flex-col items-center"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <Mail size={24} />
          </motion.div>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default MobileNav;
