import { ActionCreator } from 'redux';

import { FiltersActionTypes } from './types';
import { SetCategoryAction, SetSortByAction, SetTextAction } from './actions';

export const setCategoryActionCreator: ActionCreator<SetCategoryAction> = (category: string) => ({
  type: FiltersActionTypes.SET_CATEGORY,
  payload: category,
});

export const setSortbyActionCreator: ActionCreator<SetSortByAction> = (sortby: string) => ({
  type: FiltersActionTypes.SET_SORTBY,
  payload: sortby,
});

export const setTextActionCreator: ActionCreator<SetTextAction> = (text: string) => ({
  type: FiltersActionTypes.SET_TEXT,
  payload: text,
});
