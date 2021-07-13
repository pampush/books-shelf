import React from 'react';
import { ReactComponent as SearchButton } from '../assets/search.svg';
import { useDispatch } from 'react-redux';

import { setBooks } from '../redux/actions/books';

function SearchForm() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="search-text">
        <span className="search-text__icon-container" onClick={() => dispatch(setBooks())}>
          <SearchButton className="search-text__search-icon" />
        </span>
        <input
          className="search__field search-text__field"
          type="text"
          placeholder="search"
          required
        />
      </div>
      <div className="book-categories">
        <span>Book category</span>
        <input list="book-categories" className="search__field" placeholder="choose category" />
        <datalist id="book-categories">
          <option value="all">all</option>
          <option value="novel">novel</option>
          <option value="science">science</option>
        </datalist>
      </div>
      <div className="sortby">
        <span>Sort by</span>
        <select className="search__field">
          <option value="relevance">relevance</option>
          <option value="date">date</option>
          <option value="price">price</option>
        </select>
      </div>
    </>
  );
}

export default SearchForm;
