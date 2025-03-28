
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b-4 border-black">
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-10 w-10 rounded-full bg-[#FF3860] border-2 border-black flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold font-['Slackey']">MangaVerse</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button variant="outline" className="manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black border-black">
              <span className="text-black">Login</span>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button className="manga-button bg-[#00A7E1] hover:bg-[#00A7E1] border-black">
              <span className="text-black hover:text-black transition-colors">Sign Up Free!</span>
            </Button>
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden container py-4 pb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-4 manga-panel-small p-4">
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black w-full justify-center border-black">
                <span className="text-black">Login</span>
              </Button>
              <Button className="manga-button bg-[#00A7E1] hover:bg-[#00A7E1] text-black hover:text-black w-full justify-center border-black">
                Sign Up Free!
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
