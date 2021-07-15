import { Reducer } from 'redux';

import { Book, Action } from '../types';

const initialState = {
  items: {},
  isLoaded: false,
};

export interface BooksState {
  items: { [id: string]: Book };
  isLoaded: boolean;
}
/**
 * yeah, I know about combineReducers : \
 * @param state current application state
 * @param action action invoked by a user
 * @returns new state
 */
export const books: Reducer<BooksState, Action> = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_BOOKS':
      const newBooks: { [key: string]: Book } = action.payload.reduce(
        (memo, item) => ({ ...memo, [item.id]: item }),
        {},
      );
      return {
        ...state,
        items: newBooks,
        isLoaded: true,
      };
    case 'SET_BOOKS_LOADED':
      const books = { ...state.items };
      return {
        ...state,
        items: books,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
