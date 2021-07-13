import React from 'react';
import cover from '../assets/pexels-yogendra-singh-731510.jpg';

function Book() {
  return (
    <div className="book">
      <div className="book__cover-container">
        <img className="book__cover" src={cover} />
      </div>
      <p className="book__category">Computers</p>
      <p className="book__title">Node js разработка серверных приложений</p>
      <p className="book__author">Дейл Карнеги</p>
    </div>
  );
}

export default Book;
