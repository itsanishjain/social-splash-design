
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Heart, MessageCircle, UserPlus, Star, Bookmark, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Sidebar from '@/components/Sidebar';

// Mock notification data
const notifications = [
  {
    id: 1,
    type: 'like',
    user: {
      name: 'Aiko Tanaka',
      username: 'aikotanaka',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    content: 'liked your post',
    post: 'My new manga collection just arrived!',
    time: '2 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'follow',
    user: {
      name: 'Kento Yamazaki',
      username: 'kentoyamazaki',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    content: 'started following you',
    time: '1 hour ago',
    read: false
  },
  {
    id: 3,
    type: 'comment',
    user: {
      name: 'Mei Nagano',
      username: 'meinagano',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    content: 'commented on your post',
    comment: 'This is awesome! Where did you get it?',
    post: 'Check out this limited edition figure!',
    time: '3 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'mention',
    user: {
      name: 'Takeru Satoh',
      username: 'takerusatoh',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    content: 'mentioned you in a comment',
    comment: 'I think @mangauser would love this series too!',
    time: '5 hours ago',
    read: true
  },
  {
    id: 5,
    type: 'bookmark',
    user: {
      name: 'Yui Aragaki',
      username: 'yuiaragaki',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    content: 'bookmarked your post',
    post: 'My top 10 manga recommendations for 2023',
    time: '1 day ago',
    read: true
  },
  {
    id: 6,
    type: 'like',
    user: {
      name: 'Ryunosuke Kamiki',
      username: 'ryunosukekamiki',
      avatar: 'https://i.pravatar.cc/150?img=6'
    },
    content: 'liked your comment',
    comment: 'I completely agree with your review!',
    time: '1 day ago',
    read: true
  },
  {
    id: 7,
    type: 'system',
    content: 'Your account has been verified!',
    time: '2 days ago',
    read: true
  }
];

const Notifications = () => {
  return (
    <div className="flex min-h-screen bg-[#FFF9EC]">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="manga-panel w-full p-4 md:p-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-['Bangers'] text-black">Notifications</h1>
              <p className="font-['Comic_Neue'] text-gray-700">Stay updated with all your MangaVerse activity!</p>
            </div>
            <Button variant="outline" className="manga-button border-black bg-white hover:bg-white font-['Comic_Neue']">
              Mark All as Read
            </Button>
          </motion.div>

          <Tabs defaultValue="all" className="mt-4">
            <TabsList className="w-full bg-[#FFF9EC] border-b-2 border-black">
              <TabsTrigger 
                value="all" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="mentions" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                Mentions
              </TabsTrigger>
              <TabsTrigger 
                value="likes" 
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                Likes
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4 space-y-2">
              {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </TabsContent>
            
            <TabsContent value="mentions" className="mt-4 space-y-2">
              {notifications
                .filter(notification => notification.type === 'mention')
                .map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} />
                ))}
            </TabsContent>
            
            <TabsContent value="likes" className="mt-4 space-y-2">
              {notifications
                .filter(notification => notification.type === 'like')
                .map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'like':
      return <Heart className="text-[#FF3860]" size={18} />;
    case 'comment':
      return <MessageCircle className="text-[#00A7E1]" size={18} />;
    case 'follow':
      return <UserPlus className="text-[#14B8A6]" size={18} />;
    case 'mention':
      return <Star className="text-[#FFD700]" size={18} />;
    case 'bookmark':
      return <Bookmark className="text-[#8B5CF6]" size={18} />;
    case 'system':
      return <Bell className="text-[#FF3860]" size={18} />;
    default:
      return <AlertCircle className="text-gray-500" size={18} />;
  }
};

interface NotificationItemProps {
  notification: any;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-xl border-2 border-black ${notification.read ? 'bg-white' : 'bg-[#FFE3EB]'}`}
    >
      <div className="flex items-start gap-3">
        {notification.type !== 'system' ? (
          <Avatar className="h-10 w-10 border-2 border-black">
            <AvatarImage src={notification.user.avatar} />
            <AvatarFallback className="bg-[#FFD700]">{notification.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-black bg-[#FFD700]">
            <Bell className="text-black" size={20} />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {!notification.read && (
              <Badge className="bg-[#FF3860] text-white font-['Comic_Neue'] text-xs px-2 py-0 h-5">New</Badge>
            )}
            <div className="p-1 rounded-full bg-white border border-black">
              {getNotificationIcon(notification.type)}
            </div>
            <span className="text-xs text-gray-500 font-['Comic_Neue']">{notification.time}</span>
          </div>
          
          <p className="font-['Comic_Neue'] mb-1">
            {notification.type !== 'system' ? (
              <>
                <span className="font-bold">{notification.user.name}</span> {notification.content}
              </>
            ) : (
              <span className="font-bold">{notification.content}</span>
            )}
          </p>
          
          {notification.post && (
            <div className="mt-2 p-2 bg-[#F0F0F0] rounded-md border border-gray-300 text-sm font-['Comic_Neue']">
              {notification.post}
            </div>
          )}
          
          {notification.comment && (
            <div className="mt-2 p-2 bg-[#F0F0F0] rounded-md border border-gray-300 text-sm font-['Comic_Neue']">
              "{notification.comment}"
            </div>
          )}
        </div>
        
        {notification.type === 'follow' && (
          <Button variant="outline" size="sm" className="manga-button border-2 border-[#14B8A6] text-[#14B8A6] bg-white hover:bg-white">
            Follow Back
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Notifications;
