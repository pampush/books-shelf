/// <reference types="react-scripts" />

import { compose } from 'redux';

declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly REACT_APP_GOOGLE_BOOKS_API_KEY: string;
    }
  }

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
