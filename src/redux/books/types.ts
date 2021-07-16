/**
 * expected server response
 */
export interface BookPayload {
  totalItems: number;
  items: BookType[];
}

export interface BookResponse {
  totalItems: number;
  items: Array<{ id: string; volumeInfo: BookType }>;
}

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
  FETCH_ADD_ITEMS = '@@books/FETCH_ADD_ITEMS',
  FETCH_TOTAL_ITEMS = '@@books/FETCH_TOTAL_ITEMS',
  FETCH_PAGE = '@@books/FETCH_PAGE',
  FETCH_ADD_PAGE = '@@books/FETCH_ADD_PAGE'
}

export interface BooksState {
  readonly items: Array<BookType>;
  readonly loading: boolean;
  readonly errors?: Record<string, string>;
  readonly totalItems: number;
  readonly page: number;
}
