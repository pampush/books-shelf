import { combineReducers, Reducer } from 'redux';
import { books, BooksState } from './books';

const appReducer: Reducer<AppState> = combineReducers<AppState>({
  books,
});

interface AppState {
  books: BooksState;
}

// const rootReducer = (state: AppState, action: Action) => {
//   return appReducer(state, action);
// };

export default appReducer;
