import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchForm from '../components/SearchForm';
import Shelf from '../components/Shelf';
import { ReactComponent as LoadingIcon } from '../assets/refresh.svg';
import { AppState } from '../redux/index';
import { useObserver } from '../hooks/useObserver';

import * as booksActions from '../redux/books/actionCreators';

const AppContainerWithRef = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  SearchingPage,
);

// forwardRef typing bypass...

/**
 * First render is caused by Intersection Observer API.
 * IDK how to deal with it
 * @param props
 * @param ref ref for Intersection Observer API
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchingPage() {
  const { loading } = useSelector((state: AppState) => state.books);
  const { divRef } = useObserver(bottomScrollHandler);

  const dispatch = useDispatch();

  function bottomScrollHandler() {
    dispatch(booksActions.fetchBooks(booksActions.addBooksActionCreator));
  }

  return (
    <>
      <div className="search">
        <header className="header">
          <h1>Explore new horizons</h1>
          <div className="searchform">
            <SearchForm />
          </div>
        </header>
        <Shelf />
      </div>

      <div className="search__loading" ref={divRef}>
        {loading && <LoadingIcon className="search__loading-icon" />}
      </div>
    </>
  );
}

export default AppContainerWithRef;
