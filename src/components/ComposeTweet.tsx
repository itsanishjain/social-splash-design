
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';
import { useFeed } from '@/contexts/FeedContext';

const ComposeTweet: React.FC = () => {
  const { currentUser } = useFeed();
  const [text, setText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the post
    setText('');
  };
  
  return (
    <Card className="mb-6 border-4 border-black bg-white rounded-lg shadow-[8px_8px_0px_#000]">
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3">
            {currentUser && (
              <Avatar className="h-12 w-12 ring-4 ring-black">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} className="object-cover" />
                <AvatarFallback className="bg-[#FF3860] text-white font-['Bangers']">{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            
            <div className="flex-1">
              <div className="relative mb-2">
                <div className="absolute -top-3 left-4 px-2 py-0 bg-[#FFD700] border-2 border-black transform -rotate-2 font-['Bangers'] text-sm">
                  Share your thoughts!
                </div>
                <motion.textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="What's happening in your manga world?"
                  className="w-full min-h-[80px] resize-none bg-[#F9F9FF] border-2 border-black rounded-lg focus:ring-0 p-3 focus:outline-none text-lg font-['Comic Neue'] mt-2"
                  initial={{ height: 80 }}
                  animate={{ height: text.length > 0 ? 120 : 80 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-3 pt-3 border-t-2 border-dashed border-black">
                <div className="flex gap-2">
                  <motion.button
                    type="button"
                    className="text-[#00A7E1] bg-white rounded-full border-2 border-black p-1 hover:bg-[#00A7E1] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image size={20} />
                  </motion.button>
                  <motion.button
                    type="button" 
                    className="text-[#FFD700] bg-white rounded-full border-2 border-black p-1 hover:bg-[#FFD700] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Smile size={20} />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="text-[#14B8A6] bg-white rounded-full border-2 border-black p-1 hover:bg-[#14B8A6] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Calendar size={20} />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="text-[#8B5CF6] bg-white rounded-full border-2 border-black p-1 hover:bg-[#8B5CF6] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MapPin size={20} />
                  </motion.button>
                </div>
                
                <Button 
                  type="submit"
                  className="bg-[#FF3860] hover:bg-[#CC2D4C] text-white font-['Bangers'] rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 transform disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!text.trim()}
                >
                  Share!
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ComposeTweet;
