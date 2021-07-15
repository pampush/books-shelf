import { Reducer } from 'redux';
import { BooksActionTypes, BooksState } from './types';
import { BooksActions } from './actions';

const initialState: BooksState = {
  items: [],
  isLoaded: false,
  errors: {},
};

const booksReducer: Reducer<BooksState, BooksActions> = (
  state = initialState,
  action,
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_SUCCESS:
      // const newBooks: Record<string, BookType> = action.payload.reduce(
      //   (memo, item) => ({ ...memo, [item.id]: item }),
      //   {},
      // );
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case BooksActionTypes.FETCH_REQUEST:
      return {
        ...state,
        isLoaded: true,
      };
    case BooksActionTypes.FETCH_ERROR:
      const newError = action.payload;
      return {
        ...state,
        errors: newError,
      };
    default:
      return state;
  }
};

export default booksReducer;
