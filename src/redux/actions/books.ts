import { ActionCreator, Dispatch } from 'redux';
import axios from 'axios';

import { BOOKS_API_ENDPOINT, MAX_RESULTS } from '../constants';
import { Book, Action } from '../types';

/**
 *  plain action type
 */

/**
 * fetch books by request string
 * @returns returns promise either fulfilled or rejected
 */
export const setBooks =
  (request: string) =>
  async (dispatch: Dispatch<Action>): Promise<string> => {
    try {
      const { data: response } = await axios.get<{
        kind: string;
        totalItems: number;
        items: Book[];
      }>(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${BOOKS_API_ENDPOINT}/volumes?q=${request}&maxResults=${MAX_RESULTS}&filter=ebooks&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      );

      dispatch(setBooksAction(response.items));
      return Promise.resolve('fulfilled');
    } catch (e) {
      console.error(e.message);
      return Promise.reject('rejected');
    }
  };

/**
 *
 * @param payload conplete book info
 * @returns returns action
 */
export const setBooksAction: ActionCreator<Action> = (payload: Book[]) => {
  return { type: 'SET_BOOKS', payload };
};
