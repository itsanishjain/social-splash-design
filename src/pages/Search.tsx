
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, BookOpen, Newspaper } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/search/SearchBar';
import TrendingSection from '@/components/search/TrendingSection';
import PeopleSection from '@/components/search/PeopleSection';
import MangaSection from '@/components/search/MangaSection';
import NewsSection from '@/components/search/NewsSection';

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
  
  return (
    <div className="flex min-h-screen bg-[#FFF9EC]">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="manga-panel w-full p-4 md:p-6 max-w-4xl mx-auto">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
              <TrendingSection trendingTopics={trendingTopics} />
            </TabsContent>
            
            <TabsContent value="people" className="mt-4">
              <PeopleSection users={users} />
            </TabsContent>
            
            <TabsContent value="manga" className="mt-4">
              <MangaSection mangas={mangas} />
            </TabsContent>
            
            <TabsContent value="news" className="mt-4">
              <NewsSection news={news} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Search;
