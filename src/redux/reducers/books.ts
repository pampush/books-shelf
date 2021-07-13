import { Reducer } from 'redux';

import { Book } from '../types';
import { Action } from '../actions/books';

const initialState = {
  books: {},
};

/**
 * typeof redux state
 */
interface State {
  readonly books: { [id: string]: Book };
}

/**
 * yeah, I know about combineReducers : \
 * @param state current application state
 * @param action action invoked by a user
 * @returns new state
 */
export const reducer: Reducer<State, Action> = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_BOOKS':
      const newBooks = action.payload.reduce((memo, book) => ({ ...memo, [book.id]: book }), {});
      return {
        ...state,
        books: {
          ...newBooks,
        },
      };

    default:
      return state;
  }
};
