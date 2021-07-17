import React from 'react';

import { BookType } from '../redux/books/types';

interface FullViewBookProps {
  book: BookType;
}

function FullViewBook({ book }: FullViewBookProps) {
  return (
    <div className="fbook">
      <div className="fbook__meta">
        <div className="fbook__cover-container">
          <img className="fbook__cover" src={book.imageLinks.smallThumbnail} />
        </div>
        <p className="fbook__category">{book.categories?.length && book.categories.join(', ')}</p>
        <p className="fbook__title">{book.title}</p>
      </div>
      <div className="fbook__info">
        <p className="fbook__author">{book.authors?.length && book.authors.join(', ')}</p>
        <p className="fbook__description">{book.description}</p>
      </div>
    </div>
  );
}

export default FullViewBook;
