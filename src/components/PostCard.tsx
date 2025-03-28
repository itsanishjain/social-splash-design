
import React from 'react';
import { Post } from '@/types/feedTypes';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Repeat2, Heart, Bookmark, Share, Star } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useFeed } from '@/contexts/FeedContext';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { likePost, bookmarkPost } = useFeed();

  return (
    <Card className="overflow-hidden bg-white border-4 border-black rounded-lg shadow-[8px_8px_0px_#000] hover:shadow-[4px_4px_0px_#000] transition-all duration-200 transform hover:translate-x-1 hover:translate-y-1">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-12 w-12 ring-4 ring-black">
            <AvatarImage src={post.user.avatar} alt={post.user.name} className="object-cover" />
            <AvatarFallback className="bg-[#FF3860] text-white font-['Bangers']">{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-bold font-['Comic Neue']">{post.user.name}</span>
              {post.user.verified && (
                <Badge className="h-5 bg-[#FFD700] text-black border-2 border-black px-1 rounded-full">
                  <span className="text-xs">★</span>
                </Badge>
              )}
              <span className="text-muted-foreground text-sm font-['Comic Neue']">@{post.user.username}</span>
              <span className="text-muted-foreground text-sm mx-1">·</span>
              <span className="text-muted-foreground text-xs font-['Comic Neue']">
                {formatDistanceToNow(post.createdAt, { addSuffix: true })}
              </span>
            </div>
            
            <div className="relative my-2 font-['Comic Neue'] text-sm border-2 border-black rounded-lg p-3 bg-[#F9F9FF]">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
              {post.content}
            </div>
            
            {post.images && post.images.length > 0 && (
              <div className={`grid gap-2 mt-3 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {post.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="border-4 border-black rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={image}
                      alt={`Post image ${index}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-0">
        <div className="w-full flex justify-between items-center p-3 border-t-4 border-black bg-[#F0F0FF]">
          <button className="flex items-center gap-1 text-[#00A7E1] hover:text-[#0077A0] transition-colors">
            <div className="bg-white rounded-full p-1 border-2 border-black">
              <MessageCircle size={18} />
            </div>
            <span className="text-xs font-bold">{post.comments}</span>
          </button>
          
          <button className="flex items-center gap-1 text-[#14B8A6] hover:text-[#0E8A7B] transition-colors">
            <div className="bg-white rounded-full p-1 border-2 border-black">
              <Repeat2 size={18} />
            </div>
            <span className="text-xs font-bold">{post.reposts}</span>
          </button>
          
          <button 
            className="flex items-center gap-1"
            onClick={() => likePost(post.id)}
          >
            <AnimatePresence mode="wait">
              {post.liked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-[#FF3860]"
                >
                  <motion.div
                    whileTap={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white rounded-full p-1 border-2 border-black"
                  >
                    <Heart size={18} fill="currentColor" />
                  </motion.div>
                  <span className="text-xs font-bold">{post.likes}</span>
                </motion.div>
              ) : (
                <motion.div
                  key="not-liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-[#FF3860] hover:text-[#CC2D4C]"
                >
                  <div className="bg-white rounded-full p-1 border-2 border-black">
                    <Heart size={18} />
                  </div>
                  <span className="text-xs font-bold">{post.likes}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button 
            className="flex items-center gap-1"
            onClick={() => bookmarkPost(post.id)}
          >
            <AnimatePresence mode="wait">
              {post.bookmarked ? (
                <motion.div
                  key="bookmarked"
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  className="text-[#FFD700]"
                >
                  <motion.div
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white rounded-full p-1 border-2 border-black"
                  >
                    <Star size={18} fill="currentColor" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="not-bookmarked"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  className="text-[#FFD700] hover:text-[#E0BC00]"
                >
                  <div className="bg-white rounded-full p-1 border-2 border-black">
                    <Star size={18} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button className="flex items-center gap-1 text-[#8B5CF6] hover:text-[#6D45C6] transition-colors">
            <div className="bg-white rounded-full p-1 border-2 border-black">
              <Share size={18} />
            </div>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
