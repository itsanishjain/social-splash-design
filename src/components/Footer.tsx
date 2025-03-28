
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-black">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#FF3860] border-2 border-black flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold font-['Slackey']">MangaVerse</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your gateway to the exciting world of manga and comics. Discover, read, and connect with fellow manga enthusiasts!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 font-['Slackey']">Read</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Latest Releases</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Popular Series</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Genres</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Authors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 font-['Slackey']">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Forums</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Fan Art</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cosplay</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 font-['Slackey']">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">News</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2023 MangaVerse. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
