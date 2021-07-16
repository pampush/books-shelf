import { combineReducers } from 'redux';

import booksReducer from './books/reducer';
import filtersReducer from './filters/reducer';
import { BooksState } from './books/types';
import { FiltersState } from './filters/types';

export interface AppState {
  books: BooksState;
  filters: FiltersState;
}

const rootReducer = combineReducers<AppState>({
  books: booksReducer,
  filters: filtersReducer,
});

export default rootReducer;
