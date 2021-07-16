import { Action } from 'redux';
import { BooksActionTypes, BookType } from './types';

export interface BooksRequestAction extends Action {
  type: BooksActionTypes.FETCH_REQUEST;
}

export interface BooksSuccessAction extends Action {
  type: BooksActionTypes.FETCH_SUCCESS;
  payload: BookType[];
}

export interface BooksAddItemsAction extends Action {
  type: BooksActionTypes.FETCH_ADD_ITEMS;
  payload: BookType[];
}

export interface BooksFailureAction extends Action {
  type: BooksActionTypes.FETCH_ERROR;
  payload: Record<string, string>;
}

export interface BooksSetTotalItems extends Action {
  type: BooksActionTypes.FETCH_TOTAL_ITEMS;
  payload: number;
}

export interface BooksSetPageAction extends Action {
  type: BooksActionTypes.FETCH_PAGE;
  payload: number;
}

export interface BooksAddPageAction extends Action {
  type: BooksActionTypes.FETCH_ADD_PAGE;
  payload: number;
}

export type BooksActions =
  | BooksRequestAction
  | BooksSuccessAction
  | BooksAddItemsAction
  | BooksFailureAction
  | BooksSetTotalItems
  | BooksSetPageAction
  | BooksAddPageAction;
