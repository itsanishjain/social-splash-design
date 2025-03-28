
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Bell, Mail, Bookmark, User, Settings, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useFeed } from '@/contexts/FeedContext';

const Sidebar: React.FC = () => {
  const { currentUser } = useFeed();
  
  const sidebarItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
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
          <span className="gradient-text">Chirper</span>
        </motion.div>
        
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <motion.li key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button 
                  variant={item.active ? "default" : "ghost"} 
                  className={`w-full justify-start text-base font-medium ${item.active ? 'bg-primary' : ''}`}
                >
                  <item.icon className="mr-4" size={20} />
                  {item.label}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <Button className="mt-8 w-full rounded-full" size="lg">
          Post
        </Button>
      </div>
      
      {currentUser && (
        <motion.div 
          className="flex items-center p-4 mt-auto hover:bg-secondary/50 rounded-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="font-medium truncate">{currentUser.name}</p>
            <p className="text-muted-foreground text-sm truncate">@{currentUser.username}</p>
          </div>
          <MoreHorizontal size={18} className="text-muted-foreground" />
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
