import 'es5-shim';
import 'es6-shim';
import 'es7-shim';
import 'url-search-params-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { unregister } from './registerServiceWorker';
import './scss/index.scss';
import store from './redux/store';
import App from './app';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

unregister();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
