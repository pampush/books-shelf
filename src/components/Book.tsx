import React from 'react';
import { BookType } from '../redux/books/types';
//import { useModalContextValue } from '../contexts/ModalProvider';
import FullViewBook from './FullViewBook';

import { useModal } from '../hooks/useModal';

interface BookProps {
  book: BookType;
}

function Book({ book }: BookProps) {
  //const { setContent, openModalWindow } = useModalContextValue();
  const { open, divRef, closeModalWindow, openModalWindow } = useModal();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
    const node = e.target as HTMLElement;

    node && node.contains(divRef.current)
      ? closeModalWindow()
      : () => {
          return null;
        };
  };

  return (
    <>
      {open && (
        <div ref={divRef} className="modal" onClick={handleClick}>
          <FullViewBook book={book} />
        </div>
      )}

      <div className="book">
        <div className="book__cover-container" onClick={openModalWindow}>
          <img className="book__cover" loading="lazy" src={book.imageLinks.smallThumbnail} />
        </div>
        <p className="book__category">{book.categories?.length && book.categories[0]}</p>
        <p className="book__title">{book.title}</p>
        <p className="book__author">{book.authors?.length && book.authors}</p>
      </div>
    </>
  );
}

export default Book;
