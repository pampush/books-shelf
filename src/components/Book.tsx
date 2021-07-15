import React from 'react';
import { BookType } from '../redux/books/types';

function Book(props: BookType) {
  return (
    <div className="book">
      <div className="book__cover-container">
        {/* <img className="book__cover" src={props.imageLinks} /> */}
      </div>
      <p className="book__category">{props.categories}</p>
      <p className="book__title">{props.title}</p>
      <p className="book__author">{props.authors}</p>
    </div>
  );
}

export default Book;
