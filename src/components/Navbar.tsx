
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full gradient-bg"></div>
          <span className="text-xl font-bold">Connectify</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </a>
          <Button variant="outline" className="rounded-full">
            Log in
          </Button>
          <Button className="rounded-full">Sign up for free</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-sm font-medium transition-colors hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium transition-colors hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium transition-colors hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="rounded-full w-full justify-center">
                Log in
              </Button>
              <Button className="rounded-full w-full justify-center">
                Sign up for free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
