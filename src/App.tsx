import React from 'react';

import ObserverProvider from './components/ObserverProvider';
import ModalProvider from './contexts/ModalProvider';
import SearchingPage from './pages/SearchingPage';

function App() {
  return (
    <div className="app">
      <ModalProvider>
        <ObserverProvider>
          <SearchingPage />
        </ObserverProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
