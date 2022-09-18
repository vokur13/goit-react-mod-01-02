import React from 'react';
// import React { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
// import './js/component-1';
// import PropTypes from 'prop-types';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ================================================
// const elem1 = React.createElement('span', { children: 'Hello' });
// const elem2 = React.createElement('span', { children: 'World!' });
// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello World!!!',
// });

// const jsxElement = <div>Hello World!!!</div>;

// console.log(jsxElement);

// ReactDOM.render(element, document.querySelector('#root'));
// ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);
