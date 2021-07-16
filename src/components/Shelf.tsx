import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';
import { AppState } from '../redux/';

function Shelf() {
  const { items: books, totalItems } = useSelector((state: AppState) => state.books);

  return (
    <>
      <h3 className="shelf__counter">{totalItems} books in total</h3>
      <main className="shelf">
        {/* Somehow API returns books with the same ids, but rarely  */}
        {Object.values(books).map((book, id) => (
          <Book key={`${book.id}+${id}`} {...book} />
        ))}
      </main>
    </>
  );
}

export default Shelf;
