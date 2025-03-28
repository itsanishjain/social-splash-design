
import React from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { faker } from '@faker-js/faker';

// Generate trending topics
const generateTrendingTopics = () => {
  return Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    category: faker.helpers.arrayElement(['Trending', 'Sports', 'Politics', 'Entertainment', 'Technology']),
    topic: faker.helpers.arrayElement([
      'React 19', 'TypeScript 5.0', 'AI News', 'World Cup', 'Olympics 2024',
      'SpaceX Launch', 'Climate Change', 'Blockchain', 'New Movies', 'Viral Trend'
    ]),
    posts: faker.number.int({ min: 1000, max: 500000 })
  }));
};

// Generate who to follow
const generateWhoToFollow = () => {
  return Array.from({ length: 3 }, (_, index) => {
    const username = faker.internet.userName().toLowerCase();
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}-${index}`,
      verified: faker.datatype.boolean(0.3),
    };
  });
};

const TrendingSidebar: React.FC = () => {
  const trendingTopics = generateTrendingTopics();
  const whoToFollow = generateWhoToFollow();

  return (
    <div className="w-80 h-screen sticky top-0 hidden lg:flex flex-col p-4 space-y-4 overflow-y-auto">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-muted rounded-full border-0 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
        />
      </motion.div>

      {/* Trending */}
      <Card className="bg-background/60 backdrop-blur-md">
        <CardContent className="p-4">
          <h2 className="font-bold text-xl mb-4">Trends for you</h2>
          
          {trendingTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="py-3 hover:bg-muted/50 px-2 rounded-lg cursor-pointer group"
            >
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">{topic.category}</span>
                <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <X size={16} />
                </span>
              </div>
              <p className="font-semibold text-sm mt-1">#{topic.topic}</p>
              <p className="text-xs text-muted-foreground mt-1">{topic.posts.toLocaleString()} posts</p>
            </motion.div>
          ))}
          
          <a href="#" className="text-primary text-sm hover:underline block mt-2">Show more</a>
        </CardContent>
      </Card>

      {/* Who to follow */}
      <Card className="bg-background/60 backdrop-blur-md">
        <CardContent className="p-4">
          <h2 className="font-bold text-xl mb-4">Who to follow</h2>
          
          {whoToFollow.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 py-3 hover:bg-muted/50 px-2 rounded-lg cursor-pointer"
            >
              <motion.img 
                src={user.avatar} 
                alt={user.name} 
                className="h-10 w-10 rounded-full"
                whileHover={{ scale: 1.1 }}
              />
              
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-sm truncate">{user.name}</p>
                  {user.verified && (
                    <span className="text-primary text-xs">✓</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">@{user.username}</p>
              </div>
              
              <motion.button
                className="bg-foreground text-background rounded-full px-4 py-1 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow
              </motion.button>
            </motion.div>
          ))}
          
          <a href="#" className="text-primary text-sm hover:underline block mt-2">Show more</a>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
