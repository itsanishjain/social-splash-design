
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useFeed } from "@/contexts/FeedContext";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";

const Profile = () => {
  const { currentUser, posts } = useFeed();

  // Filter posts to show only the current user's posts
  const userPosts = posts.filter((post) => post.userId === currentUser?.id);

  return (
    <div className="flex min-h-screen bg-[#FFF9EC]">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="manga-panel w-full p-4 md:p-6 max-w-4xl mx-auto">
          {currentUser && (
            <div>
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
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-24 h-24 rounded-full"
                  />
                </motion.div>
                <div className="absolute right-6 top-52">
                  <Button className="manga-button bg-white hover:bg-white border-black text-black font-bold">
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* Profile info */}
              <div className="px-6 mt-4">
                <h1 className="text-2xl font-bold font-['Bangers']">
                  {currentUser.name}
                </h1>
                <p className="text-gray-600 mb-2">@{currentUser.username}</p>
                <p className="mb-4 font-['Comic_Neue']">
                  Manga enthusiast | Digital artist | Cat lover 🐱 | Joined
                  April 2023
                </p>

                <div className="flex gap-4 mb-6">
                  <div className="font-bold">
                    <span className="mr-1">{currentUser.following}</span>
                    <span className="text-gray-600">Following</span>
                  </div>
                  <div className="font-bold">
                    <span className="mr-1">{currentUser.followers}</span>
                    <span className="text-gray-600">Followers</span>
                  </div>
                </div>

                <div className="mb-6">
                  <Badge className="bg-[#FF3860] mr-2 border-2 border-black">
                    Otaku Level 9000
                  </Badge>
                  {currentUser.verified && (
                    <Badge className="bg-[#00A7E1] mr-2 border-2 border-black">
                      Verified Artist
                    </Badge>
                  )}
                  <Badge className="bg-[#FFD700] border-2 border-black">
                    Premium Member
                  </Badge>
                </div>
              </div>

              {/* Tabs for different content */}
              <Tabs defaultValue="posts" className="mt-4">
                <TabsList className="w-full bg-[#FFF9EC] border-b-2 border-black">
                  <TabsTrigger
                    value="posts"
                    className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
                  >
                    Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="media"
                    className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
                  >
                    Media
                  </TabsTrigger>
                  <TabsTrigger
                    value="likes"
                    className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
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
                        <p className="text-xl font-['Bangers'] mb-4">
                          No posts yet!
                        </p>
                        <p className="font-['Comic_Neue'] mb-6">
                          Share your first adventure with the community!
                        </p>
                        <Button className="manga-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-black">
                          Create New Post
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="media" className="mt-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <div
                        key={item}
                        className="aspect-square bg-gray-200 rounded-lg border-2 border-black overflow-hidden"
                      >
                        <img
                          src={`https://picsum.photos/300/300?random=${item}`}
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
                    .slice(0, 3)
                    .map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
