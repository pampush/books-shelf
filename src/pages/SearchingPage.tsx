import React, { RefObject } from 'react';
import { useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import Shelf from '../components/Shelf';
import { ReactComponent as LoadingIcon } from '../assets/refresh.svg';
import { AppState } from '../redux/index';
import Modal from '../components/Modal';
import { useModalContextValue } from '../contexts/ModalProvider';

const AppContainerWithRef = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  SearchingPage,
);

// forwardRef typing bypass...

/**
 * First render is caused by Intersection Observer API.
 * IDK how to deal with it
 * @param props
 * @param ref ref for Intersection Observer API
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchingPage(props: any, ref: any) {
  const { loading } = useSelector((state: AppState) => state.books);

  const { content, open, closeModalWindow } = useModalContextValue();

  function handleModalClose() {
    closeModalWindow();
  }

  return (
    <>
      <Modal open={open} onClose={handleModalClose}>
        {content}
      </Modal>

      <div className="search">
        <header className="header">
          <h1>Explore new horizons</h1>
          <div className="searchform">
            <SearchForm />
          </div>
        </header>
        <Shelf />
      </div>

      <div className="search__loading" ref={ref as RefObject<HTMLDivElement>}>
        {loading && <LoadingIcon className="search__loading-icon" />}
      </div>
    </>
  );
}

export default AppContainerWithRef;
