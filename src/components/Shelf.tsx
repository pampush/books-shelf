import React from 'react';
//import { useSelector } from 'react-redux';

import Book from './Book';

function Shelf() {
  //const books = useSelector({ books } => books)

  return (
    <>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  );
}

export default Shelf;
