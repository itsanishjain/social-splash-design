
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, Mail, Bookmark, User, Settings, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useFeed } from '@/contexts/FeedContext';

const Sidebar: React.FC = () => {
  const { currentUser } = useFeed();
  const location = useLocation();
  
  const sidebarItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Explore', path: '/search' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Mail, label: 'Messages', path: '/messages' },
    { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen sticky top-0 border-r border-border hidden md:flex flex-col justify-between p-4">
      <div>
        <motion.div 
          className="text-2xl font-bold mb-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">MangaVerse</span>
        </motion.div>
        
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              
              return (
                <motion.li key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={item.path}>
                    <Button 
                      variant={isActive ? "default" : "ghost"} 
                      className={`w-full justify-start text-base font-medium ${
                        isActive 
                          ? 'bg-[#FF3860] text-white border-2 border-black' 
                          : 'text-black hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="mr-4" size={20} />
                      {item.label}
                    </Button>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
        
        <Link to="/feed">
          <Button className="mt-8 w-full rounded-full manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black border-2 border-black font-['Bangers']" size="lg">
            Post
          </Button>
        </Link>
      </div>
      
      {currentUser && (
        <motion.div 
          className="flex items-center p-4 mt-auto hover:bg-secondary/50 rounded-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Avatar className="h-10 w-10 mr-3 border-2 border-black">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="font-medium truncate font-['Comic_Neue']">{currentUser.name}</p>
            <p className="text-muted-foreground text-sm truncate font-['Comic_Neue']">@{currentUser.username}</p>
          </div>
          <MoreHorizontal size={18} className="text-muted-foreground" />
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
