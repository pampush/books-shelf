/**
 * expected server response
 */
export type BookRequestPayload = {
  totalItems: number;
  items: BookType[];
};

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export type BookType = {
  id: string;
  imageLinks: ImageLinks;
  title: string;
  categories: string[];
  authors: string[];
  description: string;
};

/** FETCH_REQUEST - action for toggle isLoaded state meaning data either received or not.\
 *  FETCH_ERROR - action for setting error if intercaction with server was failed. \
 *  FETCH_SUCCESS - if response was received, set new books items in the store.
 */
export enum BooksActionTypes {
  FETCH_REQUEST = '@@books/FETCH_REQUEST',
  FETCH_ERROR = '@@books/FETCH_ERROR',
  FETCH_SUCCESS = '@@books/FETCH_SUCCESS',
}

export interface BooksState {
  readonly items: Array<BookType>;
  readonly isLoaded: boolean;
  readonly errors?: Record<string, string>;
}
