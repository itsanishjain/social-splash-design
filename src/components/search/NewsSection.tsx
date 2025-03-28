
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  source: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <div className="grid gap-6">
      {news.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white rounded-lg border-3 border-black overflow-hidden"
        >
          <div className="aspect-video w-full">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <Badge className="bg-[#14B8A6]">{item.source}</Badge>
              <span className="text-sm text-gray-500 font-['Comic_Neue']">{item.date}</span>
            </div>
            <h3 className="font-['Bangers'] text-xl mb-2">{item.title}</h3>
            <Button className="manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black border-black">
              Read More
            </Button>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default NewsSection;
