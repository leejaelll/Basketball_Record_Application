import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

import './styles/global.css';

import { Provider } from 'react-redux';

import { legacy_createStore as createStore } from 'redux';
import counterReducer from './modules/player';

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
