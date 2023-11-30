import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import './index.css';
import axios from 'axios';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <Provider store={store}>
    <App />
  </Provider>
);
