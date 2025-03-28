
import { faker } from '@faker-js/faker';
import { Post, User } from '@/types/feedTypes';

// Function to generate DiceBear avatars
const generateDiceBearAvatar = (seed: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
};

// Function to generate DiceBear illustration for post images
const generateDiceBearIllustration = (seed: string) => {
  return `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}`;
};

// Create a set of consistent users
export const generateUsers = (count: number = 10): User[] => {
  return Array.from({ length: count }, (_, index) => {
    const name = faker.person.fullName();
    const username = faker.internet.userName().toLowerCase();
    
    return {
      id: faker.string.uuid(),
      name,
      username,
      avatar: generateDiceBearAvatar(`${username}-${index}`),
      verified: faker.datatype.boolean(0.3),
      followers: faker.number.int({ min: 0, max: 100000 }),
      following: faker.number.int({ min: 0, max: 1000 }),
    };
  });
};

// Create posts from our users
export const generatePosts = (users: User[], count: number = 20): Post[] => {
  return Array.from({ length: count }, (_, index) => {
    const user = faker.helpers.arrayElement(users);
    const hasImage = faker.datatype.boolean(0.7);
    const postSeed = `post-${index}-${user.username}`;
    
    return {
      id: faker.string.uuid(),
      content: faker.lorem.paragraph(),
      images: hasImage 
        ? Array.from(
            { length: faker.number.int({ min: 1, max: 4 }) }, 
            (_, imgIndex) => generateDiceBearIllustration(`${postSeed}-img${imgIndex}`)
          ) 
        : undefined,
      createdAt: faker.date.recent({ days: 7 }),
      userId: user.id,
      user,
      likes: faker.number.int({ min: 0, max: 10000 }),
      liked: faker.datatype.boolean(0.3),
      comments: faker.number.int({ min: 0, max: 500 }),
      reposts: faker.number.int({ min: 0, max: 300 }),
      bookmarked: faker.datatype.boolean(0.2),
    };
  }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); // Sort by newest
};
