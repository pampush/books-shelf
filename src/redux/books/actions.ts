import { Action } from 'redux';
import { BooksActionTypes, BookType } from './types';

export interface BooksRequestAction extends Action {
  type: BooksActionTypes.FETCH_REQUEST;
}

export interface BooksSuccessAction extends Action {
  type: BooksActionTypes.FETCH_SUCCESS;
  payload: BookType[];
}

export interface BookFailureAction extends Action {
  type: BooksActionTypes.FETCH_ERROR;
  payload: Record<string, string>;
}

export type BooksActions = BooksRequestAction | BooksSuccessAction | BookFailureAction;
