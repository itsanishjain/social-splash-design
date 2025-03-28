
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Edit, Phone, Video, Info, Image, Smile, Send, MoreHorizontal, ChevronRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from '@/components/Sidebar';

// Mock conversation data
const conversations = [
  {
    id: 1, 
    user: { name: 'Mika Tanaka', username: 'mikatanaka', avatar: 'https://i.pravatar.cc/150?img=21' },
    lastMessage: 'Did you see the latest chapter?',
    time: '5m',
    unread: 3,
    online: true
  },
  {
    id: 2, 
    user: { name: 'Kento Yamada', username: 'kentoyamada', avatar: 'https://i.pravatar.cc/150?img=22' },
    lastMessage: 'The artwork is amazing!',
    time: '1h',
    unread: 0,
    online: true
  },
  {
    id: 3, 
    user: { name: 'Yui Nakamura', username: 'yuinakamura', avatar: 'https://i.pravatar.cc/150?img=23' },
    lastMessage: 'Thanks for the recommendation',
    time: '2h',
    unread: 0,
    online: false
  },
  {
    id: 4, 
    user: { name: 'Takashi Sato', username: 'takashisato', avatar: 'https://i.pravatar.cc/150?img=24' },
    lastMessage: 'Did you get my manga collection photo?',
    time: '1d',
    unread: 1,
    online: false
  },
  {
    id: 5, 
    user: { name: 'Anime Club', username: 'animeclub', avatar: 'https://i.pravatar.cc/150?img=25' },
    lastMessage: 'Hiroshi: When is the next meeting?',
    time: '2d',
    unread: 0,
    online: false,
    isGroup: true,
    members: 15
  },
];

// Mock messages for selected conversation
const mockMessages = [
  { id: 1, sender: 'them', text: 'Hey there! Did you see the latest One Piece chapter?', time: '10:05 AM' },
  { id: 2, sender: 'me', text: 'Not yet! No spoilers please 🙏', time: '10:07 AM' },
  { id: 3, sender: 'them', text: "Don't worry, I won't spoil anything. But it's AMAZING!", time: '10:08 AM' },
  { id: 4, sender: 'me', text: "I can't wait to read it tonight!", time: '10:10 AM' },
  { id: 5, sender: 'them', text: 'The artwork in this chapter is spectacular. Oda really outdid himself.', time: '10:12 AM' },
  { id: 6, sender: 'them', text: 'Check out this panel (no spoilers)', time: '10:13 AM', image: 'https://picsum.photos/300/200?random=100' },
  { id: 7, sender: 'me', text: 'Wow! The detail is incredible!', time: '10:15 AM' },
  { id: 8, sender: 'them', text: 'Have you been keeping up with any other manga series lately?', time: '10:20 AM' },
  { id: 9, sender: 'me', text: "I'm reading Jujutsu Kaisen and My Hero Academia weekly. Also started Chainsaw Man recently!", time: '10:22 AM' },
  { id: 10, sender: 'them', text: 'Chainsaw Man is fantastic! Such a unique art style and story.', time: '10:25 AM' },
  { id: 11, sender: 'them', text: 'Did you see the latest chapter?', time: '10:35 AM' },
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };
  
  return (
    <div className="flex min-h-screen bg-[#FFF9EC]">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="h-screen flex flex-col">
          <div className="flex h-full">
            {/* Conversation List */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-80 border-r-4 border-black bg-white overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b-2 border-black bg-[#FFF9EC]">
                <h1 className="text-2xl font-['Bangers'] mb-3">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-500" size={16} />
                  <Input 
                    type="text" 
                    placeholder="Search messages..." 
                    className="pl-9 h-10 border-2 border-black rounded-full bg-white font-['Comic_Neue']"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="w-full bg-[#FFF9EC] border-b-2 border-black grid grid-cols-2">
                    <TabsTrigger 
                      value="all" 
                      className="font-['Bangers'] text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger 
                      value="unread" 
                      className="font-['Bangers'] text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white"
                    >
                      Unread
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="m-0">
                    {conversations.map((conversation) => (
                      <ConversationItem 
                        key={conversation.id} 
                        conversation={conversation}
                        isSelected={selectedConversation.id === conversation.id}
                        onClick={() => setSelectedConversation(conversation)}
                      />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="unread" className="m-0">
                    {conversations
                      .filter(conv => conv.unread > 0)
                      .map((conversation) => (
                        <ConversationItem 
                          key={conversation.id} 
                          conversation={conversation}
                          isSelected={selectedConversation.id === conversation.id}
                          onClick={() => setSelectedConversation(conversation)}
                        />
                      ))}
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="p-3 border-t-2 border-black bg-[#FFF9EC]">
                <Button className="w-full manga-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-black">
                  <Edit size={16} className="mr-2" /> New Message
                </Button>
              </div>
            </motion.div>
            
            {/* Messages Area */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="hidden md:flex flex-1 flex-col bg-[#FFF9EC]"
            >
              {selectedConversation ? (
                <>
                  {/* Conversation Header */}
                  <div className="p-3 border-b-4 border-black bg-white flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 border-2 border-black">
                        <AvatarImage src={selectedConversation.user.avatar} />
                        <AvatarFallback className="bg-[#FFD700]">{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="flex items-center">
                          <h2 className="font-['Comic_Neue'] font-bold">{selectedConversation.user.name}</h2>
                          {selectedConversation.online && (
                            <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
                          )}
                        </div>
                        {selectedConversation.isGroup ? (
                          <p className="text-xs text-gray-500">{selectedConversation.members} members</p>
                        ) : (
                          <p className="text-xs text-gray-500">@{selectedConversation.user.username}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Phone size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Video size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Info size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Message List */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {mockMessages.map((message) => (
                        <MessageBubble key={message.id} message={message} />
                      ))}
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div className="p-3 border-t-4 border-black bg-white">
                    <div className="flex items-center">
                      <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                        <Image size={20} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                        <Smile size={20} />
                      </Button>
                      <div className="flex-1 mx-2">
                        <Input 
                          type="text" 
                          placeholder="Type a message..." 
                          className="border-2 border-black rounded-full h-10 font-['Comic_Neue']"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                      </div>
                      <Button 
                        className="rounded-full h-10 w-10 bg-[#FF3860] hover:bg-[#FF3860] text-white p-0"
                        onClick={handleSendMessage}
                      >
                        <Send size={18} />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                  <div className="w-24 h-24 rounded-full bg-[#FFD700] border-4 border-black flex items-center justify-center mb-4">
                    <Edit size={40} className="text-black" />
                  </div>
                  <h2 className="text-2xl font-['Bangers'] mb-2">Your Messages</h2>
                  <p className="text-gray-500 text-center font-['Comic_Neue'] mb-4">
                    Send private messages to friends about your favorite manga series!
                  </p>
                  <Button className="manga-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-black">
                    <Edit size={16} className="mr-2" /> New Message
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ConversationItemProps {
  conversation: any;
  isSelected: boolean;
  onClick: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({ 
  conversation, 
  isSelected, 
  onClick 
}) => {
  return (
    <div 
      className={`p-3 cursor-pointer transition-colors border-b border-gray-200 ${
        isSelected ? 'bg-[#FFE3EB]' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="relative">
          <Avatar className="h-12 w-12 border-2 border-black">
            <AvatarImage src={conversation.user.avatar} />
            <AvatarFallback className="bg-[#FFD700]">{conversation.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {conversation.online && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
          )}
        </div>
        <div className="ml-3 flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h3 className="font-['Comic_Neue'] font-bold truncate">{conversation.user.name}</h3>
            <span className="text-xs text-gray-500">{conversation.time}</span>
          </div>
          <p className="text-sm text-gray-600 truncate font-['Comic_Neue']">{conversation.lastMessage}</p>
        </div>
        <div className="ml-2 flex flex-col items-end">
          {conversation.unread > 0 && (
            <Badge className="bg-[#FF3860] h-5 w-5 flex items-center justify-center p-0 rounded-full">
              {conversation.unread}
            </Badge>
          )}
          <ChevronRight size={16} className="text-gray-400 mt-1" />
        </div>
      </div>
    </div>
  );
};

interface MessageBubbleProps {
  message: any;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isMe = message.sender === 'me';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[75%] ${isMe ? 'bg-[#00A7E1] text-white' : 'bg-white'} p-3 rounded-lg border-2 border-black`}>
        {message.image && (
          <div className="mb-2 rounded-md overflow-hidden border border-gray-300">
            <img src={message.image} alt="Shared" className="w-full" />
          </div>
        )}
        <p className="font-['Comic_Neue']">{message.text}</p>
        <div className={`text-xs mt-1 ${isMe ? 'text-white/70' : 'text-gray-500'} text-right`}>
          {message.time}
        </div>
      </div>
    </motion.div>
  );
};

export default Messages;
