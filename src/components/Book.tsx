import React from 'react';
import { BookType } from '../redux/books/types';

function Book(props: BookType) {
  return (
    <div className="book">
      <div className="book__cover-container">
        <img className="book__cover" src={props.imageLinks.smallThumbnail} />
      </div>
      <p className="book__category">{props.categories?.length && props.categories[0]}</p>
      <p className="book__title">{props.title}</p>
      <p className="book__author">{props.authors}</p>
    </div>
  );
}

export default Book;
