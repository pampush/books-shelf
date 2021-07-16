import React from 'react';
import { useDispatch } from 'react-redux';
import * as booksActions from '../redux/books/actionCreators';

interface ObserverProviderProps {
  children: JSX.Element;
}

function ObserverProvider({ children }: ObserverProviderProps) {
  const divRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  function bottomScrollHandler() {
    dispatch(booksActions.fetchBooks(booksActions.addBooksActionCreator));
  }

  React.useEffect(() => {
    if (!divRef) return;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const callback: IntersectionObserverCallback = function (entry) {
      if (entry[0].isIntersecting) {
        bottomScrollHandler();
      }
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(divRef.current as HTMLDivElement);

    return () => {
      console.log('unobserve');
      observer.unobserve(divRef.current as HTMLDivElement);
    };
  });

  // ????
  return React.cloneElement(children, { ref: divRef });
}

export default ObserverProvider;
