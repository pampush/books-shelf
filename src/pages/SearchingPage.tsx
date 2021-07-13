import React from 'react';
import SearchForm from '../components/SearchForm';
import Shelf from '../components/Shelf';

function SearchingPage() {
  return (
    <div className="search">
      <header className="header">
        <h1>Explore new horizons</h1>
        <div className="searchform">
          <SearchForm />
        </div>
      </header>
      <main className="shelf">
        <Shelf />
      </main>
    </div>
  );
}

export default SearchingPage;
