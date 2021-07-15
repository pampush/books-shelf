export type Book = {
  id: string;
  cover: string;
  title: string;
  categories: string[];
  authors: string[];
  description: string;
};

export type State = {
  books: {
    items: {
      [key: string]: Book;
    };
    isLoaded: boolean;
  };
};

export type Action =
  | { type: 'SET_BOOKS'; payload: Book[] }
  | { type: 'SET_BOOKS_LOADED'; payload: boolean };
