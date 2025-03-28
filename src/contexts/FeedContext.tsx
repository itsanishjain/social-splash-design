
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post, User } from '@/types/feedTypes';
import { generatePosts, generateUsers } from '@/utils/fakeData';

interface FeedContextType {
  posts: Post[];
  isLoading: boolean;
  likePost: (id: string) => void;
  bookmarkPost: (id: string) => void;
  currentUser: User | null;
}

const FeedContext = createContext<FeedContextType | undefined>(undefined);

export const FeedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate loading delay
    const loadData = async () => {
      setIsLoading(true);
      // Generate fake data
      const generatedUsers = generateUsers(15);
      setUsers(generatedUsers);
      
      // Set current user as the first user
      setCurrentUser(generatedUsers[0]);
      
      // Generate posts with the users
      const generatedPosts = generatePosts(generatedUsers, 30);
      setPosts(generatedPosts);
      
      setIsLoading(false);
    };
    
    loadData();
  }, []);

  const likePost = (id: string) => {
    setPosts(currentPosts => 
      currentPosts.map(post => {
        if (post.id === id) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          };
        }
        return post;
      })
    );
  };

  const bookmarkPost = (id: string) => {
    setPosts(currentPosts => 
      currentPosts.map(post => {
        if (post.id === id) {
          return {
            ...post,
            bookmarked: !post.bookmarked
          };
        }
        return post;
      })
    );
  };

  return (
    <FeedContext.Provider value={{ posts, isLoading, likePost, bookmarkPost, currentUser }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => {
  const context = useContext(FeedContext);
  if (context === undefined) {
    throw new Error('useFeed must be used within a FeedProvider');
  }
  return context;
};
