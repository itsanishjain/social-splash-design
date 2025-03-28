
import { faker } from '@faker-js/faker';
import { Post, User } from '@/types/feedTypes';

// Create a set of consistent users
export const generateUsers = (count: number = 10): User[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.userName().toLowerCase(),
    avatar: faker.image.avatar(),
    verified: faker.datatype.boolean(0.3),
    followers: faker.number.int({ min: 0, max: 100000 }),
    following: faker.number.int({ min: 0, max: 1000 }),
  }));
};

// Create posts from our users
export const generatePosts = (users: User[], count: number = 20): Post[] => {
  return Array.from({ length: count }, () => {
    const user = faker.helpers.arrayElement(users);
    const hasImage = faker.datatype.boolean(0.7);
    
    return {
      id: faker.string.uuid(),
      content: faker.lorem.paragraph(),
      images: hasImage 
        ? Array.from(
            { length: faker.number.int({ min: 1, max: 4 }) }, 
            () => faker.image.url({ width: 640, height: 480 })
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
