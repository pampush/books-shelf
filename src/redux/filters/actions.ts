import { Action } from 'redux';
import { FiltersActionTypes } from './types';

export interface SetCategoryAction extends Action {
  type: FiltersActionTypes.SET_CATEGORY;
  payload: string;
}

export interface SetSortByAction extends Action {
  type: FiltersActionTypes.SET_SORTBY;
  payload: string;
}

export interface SetTextAction extends Action {
  type: FiltersActionTypes.SET_TEXT;
  payload: string;
}

export type FiltersActions = SetCategoryAction | SetSortByAction | SetTextAction;
