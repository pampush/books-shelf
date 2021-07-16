import axios, { AxiosResponse } from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';

import store from '../store';

import { BOOKS_API_ENDPOINT, MAX_RESULTS } from '../_constants';
import {
  BooksSuccessAction,
  BooksFailureAction,
  BooksSetTotalItems,
  BooksSetPageAction,
  BooksRequestAction,
  BooksAddItemsAction,
} from './actions';
import { BookType, BooksActionTypes, BookResponse } from './types';
import { createBooksFromAPIResponse } from './typeGuard';
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
export const setErrorActionCreator: ActionCreator<BooksFailureAction> = (
  error: Record<string, string>,
) => ({
  type: BooksActionTypes.FETCH_ERROR,
  payload: error,
});

export const setTotalItemsActionCreator: ActionCreator<BooksSetTotalItems> = (
  totalItems: number,
) => ({
  type: BooksActionTypes.FETCH_TOTAL_ITEMS,
  payload: totalItems,
});

export const setPageActionCreator: ActionCreator<BooksSetPageAction> = (page: number) => ({
  type: BooksActionTypes.FETCH_PAGE,
  payload: page,
});

export const setRequestActionCreator: ActionCreator<BooksRequestAction> = () => ({
  type: BooksActionTypes.FETCH_REQUEST,
});

export const addBooksActionCreator: ActionCreator<BooksAddItemsAction> = (books: BookType[]) => ({
  type: BooksActionTypes.FETCH_ADD_ITEMS,
  payload: books,
});

/**
 * async thunk function to fetch {MAX_RESULTS} books from api
 * @param query user's search query
 * @returns
 */
export const fetchBooks = (action: ActionCreator<AnyAction>) => async (dispatch: Dispatch) => {
  try {
    dispatch(setRequestActionCreator());
    const { books, filters } = store.getState();

    const specificFields = `fields=(totalItems, items(id, volumeInfo(title, description, authors, imageLinks, categories)))`;

    if (books.totalItems && books.page >= books.totalItems) return null;

    const { data: response } = await axios.get<BookResponse, AxiosResponse<BookResponse>>(
      `${BOOKS_API_ENDPOINT}/volumes?q=${filters.text}+subject:${
        filters.category !== 'All' && filters.category ? `"${filters.category}"` : ''
      }&orderBy=${filters.sortBy}&maxResults=${MAX_RESULTS}&startIndex=${books.page}` +
        `&${specificFields}&filter=ebooks&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
    );

    const appBooks = createBooksFromAPIResponse(response);

    if (!appBooks) return null;

    dispatch(setTotalItemsActionCreator(appBooks.totalItems));

    dispatch(
      setPageActionCreator(
        appBooks.totalItems - MAX_RESULTS > 0
          ? books.page + MAX_RESULTS
          : appBooks.totalItems - books.page,
      ),
    );

    dispatch(action(appBooks.items));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.toJSON());
      dispatch(setErrorActionCreator(error.toJSON()));
    } else {
      console.error(error.message);
      dispatch(setErrorActionCreator({ message: error.message as string }));
    }
  }
};
