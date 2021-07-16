import React from 'react';
import ObserverProvider from './components/ObserverProvider';

import SearchingPage from './pages/SearchingPage';

function App() {
  return (
    <div className="app">
      <ObserverProvider>
        <SearchingPage />
      </ObserverProvider>
    </div>
  );
}

export default App;
