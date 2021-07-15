import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Dispatch } from 'redux';

import { BOOKS_API_ENDPOINT, MAX_RESULTS } from '../constants';
import { BooksSuccessAction, BookFailureAction } from './actions';
import { BookType, BooksActionTypes, BookRequestPayload } from './types';
import { createBooksFromAPIResponse, ResponseBooks } from './typeGuard';

/**
 * action creator
 * @param books
 * @returns
 */
export const fetchBooksActionCreator: ActionCreator<BooksSuccessAction> = (books: BookType[]) => ({
  type: BooksActionTypes.FETCH_SUCCESS,
  payload: books,
});

/**
 * action creator is infered to: const fetchBooksActionCreator: ActionCreator
    (...args: any[]) => BooksSuccessAction
 * @param error error from async request/response
 * @returns 
 */
export const setErrorActionCreator: ActionCreator<BookFailureAction> = (
  error: Record<string, string>,
) => ({
  type: BooksActionTypes.FETCH_ERROR,
  payload: error,
});

/**
 * async thunk function to fetch {MAX_RESULTS} books from api
 * @param query user's search query
 * @returns
 */
export const fetchBooks = (query: string) => async (dispatch: Dispatch) => {
  try {
    const specificFields = `fields=(totalItems, items(id, volumeInfo(title, description, authors, imageLinks, categories)))`;

    const response = await axios.get<BookRequestPayload, AxiosResponse<ResponseBooks>>(
      `${BOOKS_API_ENDPOINT}/volumes?q=${query}&maxResults=${MAX_RESULTS}` +
        `&${specificFields}&filter=ebooks&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
    );

    const books = createBooksFromAPIResponse(response.data);

    dispatch(fetchBooksActionCreator(books.items));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.toJSON());
      dispatch(setErrorActionCreator(error.toJSON()));
    } else {
      console.error(error.message);
    }
  }
};
