import reducer from '../../redux/index';
import { initialState as initBooks } from '../../redux/books/reducer';
import { initialState as initFilters } from '../../redux/filters/reducer';
import { addBooksActionCreator } from '../../redux/books/actionCreators';

const initialStore = { books: { ...initBooks }, filters: { ...initFilters } };

describe('reducer tests', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialStore);
  });

  test('should handle a book being added to an empty list', () => {
    const book = [
      { id: 'test', imageLinks: [], title: 'test', categories: [], authors: [], description: [] },
    ];
    expect(reducer(initialStore, addBooksActionCreator(book)).books.items).toHaveLength(1);
  });
});
