import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './state/Store';
import './index.css';

// Saves current state to browser storage
window.setInterval(()=> {
  window.sessionStorage.setItem('state', JSON.stringify(Store.getState()));
}, 300);

ReactDOM.render (
  <App store={Store}  />,
  document.getElementById('root')
);
