import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import './assets/scss/styles.scss';

import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);