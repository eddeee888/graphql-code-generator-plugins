import type { BookResolvers } from './../../types.generated';
export const Book: BookResolvers = {
  relatedBooks: ({ relatedBooks }) => {
    /* This existing content is not overwritten*/
  },
  nextBookInSeries: ({ nextBookInSeries }, _arg, _ctx) => {
    /* Book.nextBookInSeries resolver is required because Book.nextBookInSeries and BookMapper.nextBookInSeries are not compatible */
    return nextBookInSeries;
  },
};
