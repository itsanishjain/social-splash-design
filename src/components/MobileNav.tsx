
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, Mail, User } from 'lucide-react';

const MobileNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/feed', icon: Home, label: 'Home' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/notifications', icon: Bell, label: 'Alerts' },
    { path: '/messages', icon: Mail, label: 'Messages' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black md:hidden flex justify-around items-center p-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link to={item.path} key={item.path}>
            <button 
              className={`p-3 flex flex-col items-center ${isActive ? 'text-[#FF3860]' : 'text-black'}`}
            >
              <div
                className={`rounded-full p-2 border-2 border-black ${
                  isActive ? 'bg-[#FF3860]' : 'bg-white'
                }`}
              >
                <item.icon size={24} className={isActive ? 'text-white' : 'text-black'} />
              </div>
              <span className="text-xs mt-1 text-black font-bold">{item.label}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;
