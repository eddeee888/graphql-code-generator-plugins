import type { BookResolvers } from './../../types.generated';
export const Book: BookResolvers = {
  /* Implement Book resolver logic here */
  author: () => {
    /* Book.author resolver is required because Book.author exists but BookMapper.author does not */
  },
  mainGenre: () => {
    /* Book.mainGenre resolver is required because Book.mainGenre exists but BookMapper.mainGenre does not */
  },
};
