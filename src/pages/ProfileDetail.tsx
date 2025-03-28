
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, UserPlus, Flag } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useFeed } from "@/contexts/FeedContext";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import { useToast } from "@/components/ui/use-toast";

const ProfileDetail = () => {
  const { id } = useParams();
  const { currentUser, posts } = useFeed();
  const { toast } = useToast();
  
  // In a real app, you would fetch the user data based on the ID
  // For now, we'll create a mock user for demonstration
  const profileUser = {
    id: id || "user-1",
    name: "Sakura Miyazaki",
    username: "sakura_art",
    avatar: "https://i.pravatar.cc/150?img=29",
    verified: true,
    followers: 2543,
    following: 365,
    bio: "Digital manga artist | Tokyo-based | Working on my new series 'Lunar Knights'",
    joined: "March 2022"
  };
  
  // Filter posts to show only this user's posts (in a real app you'd fetch these)
  const userPosts = posts.slice(0, 3); // Just use the first 3 posts as a sample
  
  const handleFollow = () => {
    toast({
      title: "Success!",
      description: `You are now following ${profileUser.name}`,
    });
  };
  
  const handleMessage = () => {
    toast({
      title: "Message started",
      description: `New conversation with ${profileUser.name}`,
    });
  };

  return (
    <div className="flex min-h-screen bg-[#FFF9EC] dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="manga-panel w-full p-4 md:p-6 max-w-4xl mx-auto">
          <div>
            {/* Back button and header */}
            <div className="flex items-center mb-4">
              <Link to="/search" className="mr-4">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ArrowLeft size={20} />
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
            
            {/* Header with cover image */}
            <div className="relative mb-16">
              <div className="h-48 w-full bg-gradient-to-r from-[#FFD700] to-[#FF3860] rounded-t-lg border-4 border-black"></div>
              <motion.div
                className="absolute -bottom-12 left-6 border-4 border-black bg-white rounded-full p-1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={profileUser.avatar}
                  alt={profileUser.name}
                  className="w-24 h-24 rounded-full"
                />
              </motion.div>
              <div className="absolute right-6 top-52 flex space-x-2">
                <Button 
                  onClick={handleMessage}
                  className="manga-button bg-white hover:bg-white border-black text-black"
                >
                  <MessageSquare size={18} className="mr-1" />
                  Message
                </Button>
                <Button 
                  onClick={handleFollow}
                  className="manga-button bg-[#FF3860] hover:bg-[#FF3860] border-black text-white"
                >
                  <UserPlus size={18} className="mr-1" />
                  Follow
                </Button>
              </div>
            </div>

            {/* Profile info */}
            <div className="px-6 mt-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">
                  {profileUser.name}
                </h1>
                {profileUser.verified && (
                  <Badge className="ml-2 bg-[#00A7E1] text-white border-2 border-black">Verified</Badge>
                )}
              </div>
              <p className="text-gray-600 mb-2">
                @{profileUser.username}
              </p>
              <p className="mb-4">
                {profileUser.bio}
              </p>

              <div className="flex gap-4 mb-6">
                <div className="font-bold">
                  <span className="mr-1">{profileUser.following}</span>
                  <span className="text-gray-600">Following</span>
                </div>
                <div className="font-bold">
                  <span className="mr-1">{profileUser.followers}</span>
                  <span className="text-gray-600">Followers</span>
                </div>
                <div className="text-gray-600">
                  Joined {profileUser.joined}
                </div>
              </div>

              <div className="mb-6">
                <Badge className="bg-[#FF3860] mr-2 border-2 border-black">
                  Manga Artist
                </Badge>
                <Badge className="bg-[#FFD700] border-2 border-black">
                  Popular Creator
                </Badge>
              </div>
            </div>

            {/* Tabs for different content */}
            <Tabs defaultValue="posts" className="mt-4">
              <TabsList className="w-full bg-[#FFF9EC] border-b-2 border-black">
                <TabsTrigger
                  value="posts"
                  className="flex-1 text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
                >
                  Posts
                </TabsTrigger>
                <TabsTrigger
                  value="media"
                  className="flex-1 text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
                >
                  Media
                </TabsTrigger>
                <TabsTrigger
                  value="likes"
                  className="flex-1 text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
                >
                  Likes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-4 space-y-4">
                {userPosts.length > 0 ? (
                  userPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))
                ) : (
                  <Card className="border-4 border-dashed border-gray-300 bg-white">
                    <CardContent className="p-8 text-center">
                      <p className="text-xl font-bold mb-4">
                        No posts yet!
                      </p>
                      <p className="mb-6">
                        {profileUser.name} hasn't posted anything yet.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="media" className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gray-200 rounded-lg border-2 border-black overflow-hidden"
                    >
                      <img
                        src={`https://picsum.photos/300/300?random=${item + 10}`}
                        alt="Gallery item"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="likes" className="mt-4 space-y-4">
                {posts
                  .filter((post) => post.liked)
                  .slice(0, 2)
                  .map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
