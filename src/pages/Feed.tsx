
import React from 'react';
import { motion } from 'framer-motion';
import { useFeed } from '@/contexts/FeedContext';
import Sidebar from '@/components/Sidebar';
import TrendingSidebar from '@/components/TrendingSidebar';
import PostCard from '@/components/PostCard';
import ComposeTweet from '@/components/ComposeTweet';
import MobileNav from '@/components/MobileNav';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Star, Zap } from 'lucide-react';

const Feed: React.FC = () => {
  const { posts, isLoading } = useFeed();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 border-x border-border min-h-screen max-w-xl mx-auto">
        <div className="sticky top-0 bg-background/90 backdrop-blur-sm z-10 border-b-4 border-black p-4 shadow-[0_4px_0_0_#000]">
          <h1 className="text-2xl font-bold font-['Bangers'] tracking-wider text-center mb-2">MangaVerse Feed</h1>
          
          <Tabs defaultValue="for-you" className="mt-2">
            <TabsList className="w-full bg-white border-2 border-black">
              <TabsTrigger 
                value="for-you" 
                className="flex-1 data-[state=active]:bg-[#FF3860] data-[state=active]:text-white font-['Comic Neue'] font-bold"
              >
                <Zap className="w-4 h-4 mr-1" />
                Popular
              </TabsTrigger>
              <TabsTrigger 
                value="following" 
                className="flex-1 data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white font-['Comic Neue'] font-bold"
              >
                <Star className="w-4 h-4 mr-1" />
                My Series
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="p-4 pb-16 md:pb-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJoMnptMC0yaDJ2MmgtMnYtMnptLTQgMTBoMnYyaC0ydi0yem0wLTEwaDJoLTJ6TTYgMzZ2LTJoMnYySDZ6TTQgMzBoMnYtMkg0djJ6bTAgMGgydjJINHYtMnptMCA0aDJ2MnY0SDRWMzR6bS0yIDZ2LTJoMnYySDJ6TTIgMzR2LTJoMnYySDJ6bS0yLTR2LTJoMnYySDB6bTAgNGgydjJIMHYtMnptOS45LTZoMnYydi0yaC0yem0tMiAydjJsLTEuOS0ySDV2MkgzbDItMmgyLjl6bS00IDRINnYySDR2LTFsMS45IDFINFYzNnpNMyAzMnYtMmgybC0yIDJ6TTkgMzJoMnYySDl2LTJ6bTI0LTE0aDJ2LTJoLTJ2Mntlem0wIDR2LTJoMnYtMmgtMnYtMmgtMnYyaC0ydjJoLTJ2LTJoLTJ2MmgtMnYyaC0ydi0ySDd2MmMwIDQuNDE4IDMuNTgyIDggOCA4czgtMy41ODIgOC04aC0yYzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02SDd2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJWMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat">
          <ComposeTweet />
          
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <motion.div
                className="h-16 w-16 rounded-full border-4 border-[#FF3860] border-t-transparent"
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
                  className="mb-4 transform hover:-rotate-1 transition-transform"
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
