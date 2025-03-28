import React, { useState } from "react";
import { Post } from "@/types/feedTypes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Repeat2,
  Heart,
  Star,
  Share,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useFeed } from "@/contexts/FeedContext";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { likePost, bookmarkPost } = useFeed();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="action-panel rounded-lg overflow-hidden"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent className="p-4 relative">
        {/* Manga corner fold effect */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-[#FFE66D] border-r-transparent z-10"></div>

        {/* Animated speed lines on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 speed-lines"
            />
          )}
        </AnimatePresence>

        <div className="flex gap-3 relative z-1">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Avatar className="h-12 w-12 ring-4 ring-black">
              <AvatarImage
                src={post.user.avatar}
                alt={post.user.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-[#FF4F79] text-white font-manga-accent">
                {post.user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-bold font-manga-accent">
                {post.user.name}
              </span>
              {post.user.verified && (
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="h-5 bg-[#FFE66D] text-black border-2 border-black px-1 rounded-full">
                    <Sparkles size={10} className="mr-1" />
                    <span className="text-xs">Pro</span>
                  </Badge>
                </motion.div>
              )}
              <span className="text-muted-foreground text-sm font-manga-body">
                @{post.user.username}
              </span>
              <span className="text-muted-foreground text-sm mx-1">·</span>
              <span className="text-muted-foreground text-xs font-manga-body">
                {formatDistanceToNow(post.createdAt, { addSuffix: true })}
              </span>
            </div>

            <div className="thought-bubble my-3 font-manga-body text-sm">
              {post.content}
            </div>

            {post.images && post.images.length > 0 && (
              <div
                className={`grid gap-2 mt-3 ${
                  post.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {post.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="manga-panel-torn overflow-hidden"
                    whileHover={{
                      scale: 1.03,
                      rotate: index % 2 === 0 ? 1 : -1,
                    }}
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
        <div className="w-full flex justify-between items-center p-3 border-t-4 border-black bg-gradient-to-r from-[#FFE66D]/10 via-[#FF4F79]/10 to-[#4FC4FF]/10">
          <motion.button
            className="flex items-center gap-1 text-[#4FC4FF] hover:text-[#0077A0] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <MessageSquare size={18} />
            </div>
            <span className="text-xs font-bold font-manga-accent">
              {post.comments}
            </span>
          </motion.button>

          <motion.button
            className="flex items-center gap-1 text-[#14B8A6] hover:text-[#0E8A7B] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <Repeat2 size={18} />
            </div>
            <span className="text-xs font-bold font-manga-accent">
              {post.reposts}
            </span>
          </motion.button>

          <motion.button
            className="flex items-center gap-1"
            onClick={() => likePost(post.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {post.liked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-[#FF4F79]"
                >
                  <motion.div
                    whileTap={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]"
                  >
                    <Heart size={18} fill="currentColor" />
                  </motion.div>
                  <span className="text-xs font-bold font-manga-accent">
                    {post.likes}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="not-liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-[#FF4F79] hover:text-[#CC2D4C]"
                >
                  <div className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                    <Heart size={18} />
                  </div>
                  <span className="text-xs font-bold font-manga-accent">
                    {post.likes}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            className="flex items-center gap-1"
            onClick={() => bookmarkPost(post.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {post.bookmarked ? (
                <motion.div
                  key="bookmarked"
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  className="text-[#FFE66D]"
                >
                  <motion.div
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]"
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
                  className="text-[#FFE66D] hover:text-[#E0BC00]"
                >
                  <div className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                    <Star size={18} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            className="flex items-center gap-1 text-[#8B5CF6] hover:text-[#6D45C6] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <Share size={18} />
            </div>
          </motion.button>
        </div>
      </CardFooter>
    </motion.div>
  );
};

export default PostCard;
