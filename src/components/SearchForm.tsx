import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import resources from '../resources.json';
import * as booksActions from '../redux/books/actionCreators';
import * as filtersActions from '../redux/filters/actionCreators';
import DatalistSelect from './searchForm/DatalistSelectField';
import SearchField from './searchForm/SearchField';
import SelectField from './searchForm/SelectField';
import { AppState } from '../redux';

function SearchForm() {
  const dispatch = useDispatch();
  const { text, sortBy, category } = useSelector((state: AppState) => state.filters);
  const { loading } = useSelector((state: AppState) => state.books);

  return (
    <>
      <div className="search-field">
        <SearchField
          type="text"
          placeholder="
          Search books"
          required={true}
          size="small"
          onChange={(text) => {
            dispatch(filtersActions.setTextActionCreator(text));
          }}
          disable={loading}
          handleSubmit={() => {
            dispatch(filtersActions.setTextActionCreator(text));
            dispatch(booksActions.setPageActionCreator(0)); // set api pagination counter to 0
            dispatch(booksActions.fetchBooks(booksActions.fetchBooksActionCreator)); // clear previous books state, and fetch new MAX_RESULTS books
          }}
          value={text}
        />
      </div>
      <div className="datalist-select-field">
        <DatalistSelect
          label="Book category"
          options={resources['datalist-options']}
          placeholder="All"
          size="small"
          value={category}
          onChange={(category) => {
            dispatch(filtersActions.setCategoryActionCreator(category));
          }}
          handleSelect={(category) => {
            dispatch(filtersActions.setCategoryActionCreator(category));
            dispatch(booksActions.setPageActionCreator(0));
            dispatch(booksActions.fetchBooks(booksActions.fetchBooksActionCreator));
          }}
        />
      </div>
      <div className="select-field">
        <SelectField
          label="Sort by"
          size="small"
          options={resources['select-options']}
          value={sortBy}
          onChange={(option) => {
            dispatch(filtersActions.setSortbyActionCreator(option));
            dispatch(booksActions.setPageActionCreator(0));
            dispatch(booksActions.fetchBooks(booksActions.fetchBooksActionCreator));
          }}
        />
      </div>
    </>
  );
}

export default SearchForm;
