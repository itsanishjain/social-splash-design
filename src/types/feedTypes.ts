
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  content: string;
  images?: string[];
  createdAt: Date;
  userId: string;
  user: User;
  likes: number;
  liked: boolean;
  comments: number;
  reposts: number;
  bookmarked: boolean;
}
