export type UserMapper = {
  id: number;

  // Matches
  book: BookMapper | null | undefined;
  bookNonNull: BookMapper;
  bookInline: {
    id: number;
    name: string;
    relatedBooks: { id: number }[];
    nextBookInSeries: { id: number };
  }; // Inline version of BookMapper. Must keep in sync.

  books1: Array<BookMapper | null> | null;
  books2: Array<BookMapper> | null;
  books3: Array<BookMapper | null>;
  books4: Array<BookMapper>;

  books5: (BookMapper | null)[] | null;
  books6: BookMapper[] | null;
  books7: (BookMapper | null)[];
  books8: BookMapper[];

  // Mismatches
  mmBook1: { id: string };
  mmBook2: BookMapper | null;

  mmBooks1: Array<BookMapper> | boolean;
  mmBooks2: Array<BookMapper | null> | null;
  mmBooks3: Array<BookMapper | null> | null;
  mmBooks4: Array<BookMapper | null>;
};

export type BookMapper = {
  id: number;
  name: string;
  relatedBooks: { id: number }[];
  nextBookInSeries: { id: number };
};
