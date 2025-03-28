
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  Settings,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useFeed } from "@/contexts/FeedContext";
import { useTheme } from "@/contexts/ThemeContext";

const Sidebar: React.FC = () => {
  const { currentUser } = useFeed();
  const { themeColor, darkMode } = useTheme();
  const location = useLocation();

  const sidebarItems = [
    { icon: Home, label: "Home", path: "/feed" },
    { icon: Search, label: "Explore", path: "/search" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Mail, label: "Messages", path: "/messages" },
    { icon: Bookmark, label: "Bookmarks", path: "/bookmarks" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen sticky top-0 border-r border-border dark:border-gray-700 hidden md:flex flex-col justify-between p-4 dark:bg-gray-900 transition-colors duration-200">
      <div>
        <div className="text-2xl font-bold mb-8 px-4">
          <span className="gradient-text dark:text-white">MangaVerse</span>
        </div>

        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.label}>
                  <Link to={item.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start text-base font-medium ${
                        isActive
                          ? `bg-[${themeColor}] text-white border-2 border-black dark:border-gray-600`
                          : "text-black dark:text-white hover:text-black dark:hover:text-white"
                      }`}
                      style={{ backgroundColor: isActive ? themeColor : '' }}
                    >
                      <item.icon className="mr-4" size={20} />
                      {item.label}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link to="/feed">
          <Button
            className="mt-8 w-full rounded-full manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black border-2 border-black dark:border-gray-600 font-['Bangers']"
            size="lg"
          >
            Post
          </Button>
        </Link>
      </div>

      {currentUser && (
        <div className="flex items-center p-4 mt-auto hover:bg-secondary/50 dark:hover:bg-gray-800 rounded-full cursor-pointer">
          <Avatar className="h-10 w-10 mr-3 border-2 border-black dark:border-gray-600">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="font-medium truncate font-['Comic_Neue'] dark:text-white">
              {currentUser.name}
            </p>
            <p className="text-muted-foreground text-sm truncate font-['Comic_Neue']">
              @{currentUser.username}
            </p>
          </div>
          <MoreHorizontal size={18} className="text-muted-foreground" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
