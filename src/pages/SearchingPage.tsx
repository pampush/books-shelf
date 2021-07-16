import React, { RefObject } from 'react';
import { useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import Shelf from '../components/Shelf';
import { ReactComponent as LoadingIcon } from '../assets/refresh.svg';
import { AppState } from '../redux/index';
import Modal from '../components/Modal';

const AppContainerWithRef = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  SearchingPage,
);

// forwardRef typing bypass...
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchingPage(props: any, ref: any) {
  const { loading } = useSelector((state: AppState) => state.books);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  function handleModalClose() {
    setOpenModal(false);
  }

  return (
    <>
      <Modal open={openModal} onClose={handleModalClose}>
        <div style={{ height: '200px', backgroundColor: 'red' }}> test</div>
      </Modal>
      <div className="search">
        <header className="header">
          <h1 onClick={() => setOpenModal(true)}>Explore new horizons</h1>
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
