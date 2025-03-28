
import React from 'react';
import { motion } from 'framer-motion';
import { useFeed } from '@/contexts/FeedContext';
import Sidebar from '@/components/Sidebar';
import TrendingSidebar from '@/components/TrendingSidebar';
import PostCard from '@/components/PostCard';
import ComposeTweet from '@/components/ComposeTweet';
import MobileNav from '@/components/MobileNav';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Feed: React.FC = () => {
  const { posts, isLoading } = useFeed();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 border-x border-border min-h-screen max-w-xl mx-auto">
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-border p-4">
          <h1 className="text-xl font-bold">Home</h1>
          
          <Tabs defaultValue="for-you" className="mt-2">
            <TabsList className="w-full">
              <TabsTrigger value="for-you" className="flex-1">For you</TabsTrigger>
              <TabsTrigger value="following" className="flex-1">Following</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="p-4 pb-16 md:pb-4">
          <ComposeTweet />
          
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <motion.div
                className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      
      <TrendingSidebar />
      <MobileNav />
    </div>
  );
};

export default Feed;
