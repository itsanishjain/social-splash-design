
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';
import { useFeed } from '@/contexts/FeedContext';

const ComposeTweet: React.FC = () => {
  const { currentUser } = useFeed();
  const [text, setText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the tweet
    setText('');
  };
  
  return (
    <Card className="mb-4 border-none shadow-none">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3">
            {currentUser && (
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            
            <div className="flex-1">
              <motion.textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What's happening?"
                className="w-full min-h-[80px] resize-none border-0 bg-transparent text-foreground focus:ring-0 p-2 focus:outline-none text-lg"
                initial={{ height: 60 }}
                animate={{ height: text.length > 0 ? 100 : 60 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              
              <div className="flex justify-between items-center mt-2 border-t border-border pt-3">
                <div className="flex gap-2">
                  <motion.button
                    type="button"
                    className="text-primary p-2 rounded-full hover:bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image size={18} />
                  </motion.button>
                  <motion.button
                    type="button" 
                    className="text-primary p-2 rounded-full hover:bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Smile size={18} />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="text-primary p-2 rounded-full hover:bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Calendar size={18} />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="text-primary p-2 rounded-full hover:bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MapPin size={18} />
                  </motion.button>
                </div>
                
                <Button 
                  type="submit"
                  className="rounded-full"
                  size="sm"
                  disabled={!text.trim()}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ComposeTweet;
