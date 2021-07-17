import React from 'react';
import { BookType } from '../redux/books/types';
import { useModalContextValue } from '../contexts/ModalProvider';
import FullViewBook from './FullViewBook';

interface BookProps {
  book: BookType;
}

function Book({ book }: BookProps) {
  const { setContent, openModalWindow } = useModalContextValue();

  return (
    <div className="book">
      <div
        className="book__cover-container"
        onClick={() => {
          setContent(<FullViewBook book={book} />);
          openModalWindow();
        }}>
        <img className="book__cover" src={book.imageLinks.smallThumbnail} />
      </div>
      <p className="book__category">{book.categories?.length && book.categories[0]}</p>
      <p className="book__title">{book.title}</p>
      <p className="book__author">{book.authors?.length && book.authors}</p>
    </div>
  );
}

export default Book;
