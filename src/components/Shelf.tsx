import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';
import { AppState } from '../redux/';

function Shelf() {
  const { items: books } = useSelector((state: AppState) => state.books);
  console.log(books);

  return (
    <>
      {Object.values(books).map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </>
  );
}

export default Shelf;
