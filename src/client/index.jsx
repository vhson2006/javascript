import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<App />, document.querySelector('#root'));
