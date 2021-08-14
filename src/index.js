import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Find all widget divs
const WidgetDivs = document.querySelector('#metu');

// Inject our React App into each
ReactDOM.render(
  <React.StrictMode>
    <App domElement={Div} />
  </React.StrictMode>,
  Div
);
