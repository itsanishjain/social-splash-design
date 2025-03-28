
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, BookOpen, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFeed } from '@/contexts/FeedContext';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';

const Bookmarks = () => {
  const { posts } = useFeed();
  
  // For demo purposes, just use the first few posts as "bookmarked"
  const bookmarkedPosts = posts.slice(0, 5);
  
  return (
    <div className="flex min-h-screen bg-[#FFF9EC]">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="manga-panel w-full p-4 md:p-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-['Bangers'] text-black">Your Bookmarks</h1>
              <Button variant="outline" className="manga-button bg-white hover:bg-white border-black text-black">
                <Clock size={18} className="mr-2" /> Recent
              </Button>
            </div>
            <p className="font-['Comic_Neue'] text-gray-700 text-lg">Save posts to read later or revisit your favorite content!</p>
          </motion.div>

          <Tabs defaultValue="all" className="mt-8">
            <TabsList className="w-full bg-[#FFF9EC] border-b-2 border-black">
              <TabsTrigger 
                value="all" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                All Bookmarks
              </TabsTrigger>
              <TabsTrigger 
                value="posts" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <Bookmark size={16} className="mr-2" /> Posts
              </TabsTrigger>
              <TabsTrigger 
                value="stories" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <BookOpen size={16} className="mr-2" /> Stories
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6 space-y-4">
              {bookmarkedPosts.length > 0 ? (
                bookmarkedPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <EmptyBookmarks />
              )}
            </TabsContent>
            
            <TabsContent value="posts" className="mt-6 space-y-4">
              {bookmarkedPosts.slice(0, 3).map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </TabsContent>
            
            <TabsContent value="stories" className="mt-6">
              <EmptyBookmarks type="stories" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const EmptyBookmarks = ({ type = "bookmarks" }) => (
  <Card className="border-4 border-dashed border-gray-300 bg-white">
    <CardContent className="p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Bookmark size={64} className="mx-auto mb-4 text-gray-400" />
        <p className="text-2xl font-['Bangers'] mb-4">No {type} yet!</p>
        <p className="font-['Comic_Neue'] mb-6">
          {type === "stories" 
            ? "Start bookmarking exciting manga stories to read later!" 
            : "Save posts by clicking the bookmark icon to read them later!"}
        </p>
        <Button className="manga-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-black">
          {type === "stories" ? "Discover Stories" : "Explore Posts"}
        </Button>
      </motion.div>
    </CardContent>
  </Card>
);

export default Bookmarks;
