import { Reducer } from 'redux';

import { FiltersState, FiltersActionTypes } from './types';
import { FiltersActions } from './actions';

const initialState: FiltersState = {
  sortBy: 'relevance',
  category: '',
  text: '',
};

const filtersReducer: Reducer<FiltersState, FiltersActions> = (
  state = initialState,
  action,
): FiltersState => {
  switch (action.type) {
    case FiltersActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case FiltersActionTypes.SET_SORTBY:
      return { ...state, sortBy: action.payload };
    case FiltersActionTypes.SET_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
