
import React from 'react';

const Footer = () => {
  return (
    <footer className="neo-card border-t border-white/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full gradient-bg glow"></div>
              <span className="text-2xl font-serif font-bold gradient-text">Connectify</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting people and creating community through meaningful social interactions.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-6 md:mb-0">
            © 2023 Connectify. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
