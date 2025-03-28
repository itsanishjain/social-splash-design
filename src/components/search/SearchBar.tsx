
import React from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h1 className="text-3xl font-['Bangers'] text-black mb-4">Explore MangaVerse</h1>
      <div className="relative w-full">
        <div className="relative group">
          <SearchIcon className="absolute left-4 top-3.5 text-gray-500 group-hover:text-[#FF3860] transition-colors duration-200" size={20} />
          <Input 
            type="text" 
            placeholder="Search for manga, users, or topics..." 
            className="w-full pl-12 pr-12 py-6 border-3 border-black rounded-full h-12 bg-white text-md font-['Comic_Neue'] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] transition-all duration-200 hover:border-[#FF3860]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="absolute right-4 top-3.5 hover:text-[#FF3860] transition-colors duration-200"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              <X size={20} className="text-gray-500 hover:text-[#FF3860]" />
            </button>
          )}
          <div className="absolute -top-3 -right-3 w-9 h-9 bg-[#FFD700] border-2 border-black rounded-full flex items-center justify-center transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-['Bangers'] text-xs">POW!</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
