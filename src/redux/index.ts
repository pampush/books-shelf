import { combineReducers } from 'redux';
import booksReducer from './books/reducer';

import { BooksState } from './books/types';

export interface AppState {
  books: BooksState;
}

const rootReducer = combineReducers<AppState>({
  books: booksReducer,
});

export default rootReducer;
