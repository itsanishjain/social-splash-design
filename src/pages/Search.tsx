
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, TrendingUp, Users, BookOpen, Newspaper, X, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Sidebar from '@/components/Sidebar';
import { Card, CardContent } from '@/components/ui/card';

// Mock trending topics
const trendingTopics = [
  { id: 1, name: 'One Piece Chapter 1089', count: '128K posts' },
  { id: 2, name: 'Attack on Titan Finale', count: '98K posts' },
  { id: 3, name: 'Jujutsu Kaisen Movie', count: '87K posts' },
  { id: 4, name: 'Demon Slayer Season 4', count: '76K posts' },
  { id: 5, name: 'My Hero Academia', count: '62K posts' },
];

// Mock users data
const users = [
  { id: 1, name: 'Manga Master', username: 'mangamaster', avatar: 'https://i.pravatar.cc/150?img=11', verified: true, bio: 'Official manga reviewer | Artist | Coffee addict' },
  { id: 2, name: 'Anime Queen', username: 'animequeen', avatar: 'https://i.pravatar.cc/150?img=12', verified: false, bio: 'Anime enthusiast | Digital artist | Cat lover 🐱' },
  { id: 3, name: 'Comic Geek', username: 'comicgeek', avatar: 'https://i.pravatar.cc/150?img=13', verified: true, bio: 'Manga collector | Illustrator | Foodie 🍜' },
  { id: 4, name: 'Otaku Life', username: 'otakulife', avatar: 'https://i.pravatar.cc/150?img=14', verified: false, bio: 'Living the otaku dream | Cosplayer | Gaming nut 🎮' },
];

// Mock manga data
const mangas = [
  { id: 1, title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://picsum.photos/200/300?random=1', rating: 4.9, genres: ['Adventure', 'Fantasy'] },
  { id: 2, title: 'Demon Slayer', author: 'Koyoharu Gotouge', cover: 'https://picsum.photos/200/300?random=2', rating: 4.8, genres: ['Action', 'Supernatural'] },
  { id: 3, title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://picsum.photos/200/300?random=3', rating: 4.7, genres: ['Drama', 'Horror'] },
  { id: 4, title: 'My Hero Academia', author: 'Kohei Horikoshi', cover: 'https://picsum.photos/200/300?random=4', rating: 4.6, genres: ['Superhero', 'School'] },
  { id: 5, title: 'Jujutsu Kaisen', author: 'Gege Akutami', cover: 'https://picsum.photos/200/300?random=5', rating: 4.7, genres: ['Supernatural', 'Horror'] },
  { id: 6, title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://picsum.photos/200/300?random=6', rating: 4.5, genres: ['Action', 'Adventure'] },
];

// Mock news data
const news = [
  { id: 1, title: 'Attack on Titan Finale Breaks Viewing Records', date: 'Yesterday', image: 'https://picsum.photos/600/400?random=20', source: 'Anime News Network' },
  { id: 2, title: 'One Piece Celebrates 25th Anniversary with Special Exhibition', date: '2 days ago', image: 'https://picsum.photos/600/400?random=21', source: 'Manga Insider' },
  { id: 3, title: 'Chainsaw Man Part 2 Release Date Announced', date: '3 days ago', image: 'https://picsum.photos/600/400?random=22', source: 'Otaku Times' },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('trending');
  
  const handleClearSearch = () => {
    setSearchTerm('');
  };
  
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="w-full bg-[#FFF9EC] border-b-2 border-black">
              <TabsTrigger 
                value="trending" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <TrendingUp size={16} className="mr-2" /> Trending
              </TabsTrigger>
              <TabsTrigger 
                value="people" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <Users size={16} className="mr-2" /> People
              </TabsTrigger>
              <TabsTrigger 
                value="manga" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <BookOpen size={16} className="mr-2" /> Manga
              </TabsTrigger>
              <TabsTrigger 
                value="news" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#14B8A6] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <Newspaper size={16} className="mr-2" /> News
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="mt-4">
              <div className="grid gap-3">
                {trendingTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-black"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-['Bangers'] text-xl text-[#FF3860]">#{index + 1}</span>
                        <h3 className="font-['Comic_Neue'] font-bold">{topic.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500 font-['Comic_Neue']">{topic.count}</p>
                    </div>
                    <TrendingUp size={24} className="text-[#FFD700]" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="people" className="mt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-['Bangers'] text-xl">Popular Creators</h3>
                <Button variant="outline" size="sm" className="manga-button border-black bg-white hover:bg-white">
                  <Filter size={16} className="mr-2" /> Filter
                </Button>
              </div>
              
              <div className="grid gap-4">
                {users.map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-black"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-black">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-[#FFD700]">{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-['Comic_Neue'] font-bold">{user.name}</h3>
                          {user.verified && (
                            <Badge className="bg-[#00A7E1] text-white">Verified</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 font-['Comic_Neue']">@{user.username}</p>
                        <p className="text-sm font-['Comic_Neue'] mt-1">{user.bio}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="manga-button border-2 border-[#FF3860] text-[#FF3860] bg-white hover:bg-white">
                      Follow
                    </Button>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="manga" className="mt-4">
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
            </TabsContent>
            
            <TabsContent value="news" className="mt-4">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Search;
