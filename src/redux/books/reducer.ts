import { Reducer } from 'redux';

import { BooksActionTypes, BooksState } from './types';
import { BooksActions } from './actions';
import { MAX_RESULTS } from '../_constants';
//import { MAX_RESULTS } from '../_constants';

export const initialState: BooksState = {
  items: [],
  loading: false,
  errors: {},
  totalItems: 0,
  page: 0,
};

const booksReducer: Reducer<BooksState, BooksActions> = (
  state = initialState,
  action,
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        page: MAX_RESULTS,
      };
    case BooksActionTypes.FETCH_ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false,
      };
    case BooksActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BooksActionTypes.FETCH_ERROR:
      const newError = action.payload;
      return {
        ...state,
        errors: newError,
      };
    case BooksActionTypes.FETCH_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.payload,
      };
    case BooksActionTypes.FETCH_PAGE:
      return { ...state, page: action.payload };

    case BooksActionTypes.FETCH_ADD_PAGE:
      const newPage = state.page + action.payload;
      return {
        ...state,
        page: newPage,
      };

    default:
      return state;
  }
};

export default booksReducer;
