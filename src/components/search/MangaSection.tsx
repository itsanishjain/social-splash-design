
import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Manga {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  genres: string[];
}

interface MangaSectionProps {
  mangas: Manga[];
}

const MangaSection = ({ mangas }: MangaSectionProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-['Bangers'] text-xl">Popular Manga Series</h3>
        <Button variant="outline" size="sm" className="manga-button border-black bg-white hover:bg-white">
          <Filter size={16} className="mr-2" /> Filter
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mangas.map((manga, index) => (
          <motion.div
            key={manga.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-lg border-3 border-black overflow-hidden"
          >
            <div className="relative h-48">
              <img 
                src={manga.cover} 
                alt={manga.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1 border-2 border-black">
                <div className="flex items-center gap-1 px-2">
                  <span className="text-[#FFD700] font-bold">★</span>
                  <span className="text-sm font-bold">{manga.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-['Bangers'] text-lg truncate">{manga.title}</h3>
              <p className="text-sm text-gray-500 font-['Comic_Neue']">{manga.author}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {manga.genres.map((genre) => (
                  <span 
                    key={genre} 
                    className="text-xs bg-[#F0F0F0] px-2 py-1 rounded-full border border-gray-300 font-['Comic_Neue']"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MangaSection;
