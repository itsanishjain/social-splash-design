import React from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  bio: string;
}

interface PeopleSectionProps {
  users: User[];
}

const PeopleSection = ({ users }: PeopleSectionProps) => {
  const { toast } = useToast();

  const handleFollow = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toast({
      title: "Following!",
      description: `You are now following ${name}`,
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-['Bangers'] text-xl">Popular Creators</h3>
        <Button
          variant="outline"
          size="sm"
          className="manga-button border-black bg-white hover:bg-black hover:text-white text-black"
        >
          <Filter size={16} className="mr-2" /> Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {users.map((user, index) => (
          <Link to={`/profile/${user.id}`} key={user.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-black hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-black">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-[#FFD700]">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-['Comic_Neue'] font-bold">
                      {user.name}
                    </h3>
                    {user.verified && (
                      <Badge className="bg-[#00A7E1] text-white">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 font-['Comic_Neue']">
                    @{user.username}
                  </p>
                  <p className="text-sm font-['Comic_Neue'] mt-1">{user.bio}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="manga-button border-2 border-[#FF3860] text-[#FF3860] bg-white hover:bg-white hover:text-[#FF3860] hover:border-[#FF3860]"
                onClick={(e) => handleFollow(user.name, e)}
              >
                Follow
              </Button>
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PeopleSection;
