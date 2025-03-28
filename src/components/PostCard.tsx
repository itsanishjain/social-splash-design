
import React from 'react';
import { Post } from '@/types/feedTypes';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Repeat2, Heart, Bookmark, Share } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useFeed } from '@/contexts/FeedContext';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { likePost, bookmarkPost } = useFeed();

  return (
    <Card className="mb-4 overflow-hidden border-b border-border bg-background hover:bg-secondary/20 transition-colors">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="font-medium">{post.user.name}</span>
              {post.user.verified && (
                <Badge variant="secondary" className="h-4 bg-primary/10 text-primary px-1">
                  <span className="text-xs">✓</span>
                </Badge>
              )}
              <span className="text-muted-foreground text-sm">@{post.user.username}</span>
              <span className="text-muted-foreground text-sm mx-1">·</span>
              <span className="text-muted-foreground text-xs">
                {formatDistanceToNow(post.createdAt, { addSuffix: true })}
              </span>
            </div>
            
            <p className="text-sm my-2">{post.content}</p>
            
            {post.images && post.images.length > 0 && (
              <div className={`grid gap-2 mt-3 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {post.images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Post image ${index}`}
                    className="rounded-lg w-full h-auto object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-0">
        <div className="w-full flex justify-between items-center p-2 px-4">
          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle size={18} /> 
            <span className="text-xs">{post.comments}</span>
          </button>
          
          <button className="flex items-center gap-1 text-muted-foreground hover:text-green-500 transition-colors">
            <Repeat2 size={18} /> 
            <span className="text-xs">{post.reposts}</span>
          </button>
          
          <button 
            className="flex items-center gap-1 text-muted-foreground hover:text-red-500 transition-colors"
            onClick={() => likePost(post.id)}
          >
            <AnimatePresence mode="wait">
              {post.liked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-red-500"
                >
                  <motion.div
                    whileTap={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Heart size={18} fill="currentColor" />
                  </motion.div>
                  <span className="text-xs">{post.likes}</span>
                </motion.div>
              ) : (
                <motion.div
                  key="not-liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1"
                >
                  <Heart size={18} />
                  <span className="text-xs">{post.likes}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button 
            className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors"
            onClick={() => bookmarkPost(post.id)}
          >
            <AnimatePresence mode="wait">
              {post.bookmarked ? (
                <motion.div
                  key="bookmarked"
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  className="text-blue-500"
                >
                  <motion.div
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Bookmark size={18} fill="currentColor" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="not-bookmarked"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                >
                  <Bookmark size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Share size={18} />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
