import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from 'Router';
import { veniastore } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={veniastore}>
    <Router />
  </Provider>
);