/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Post } from './post-extend-user/resolvers/Post';
import { User } from './user/resolvers/User';
import { posts as User_posts } from './post-extend-user/resolvers/User/posts';
export const resolvers: Resolvers = {
  Post: { ...Post },
  User: { ...User, posts: User_posts },
};
