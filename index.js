import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = "Dipu";

ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>My Name is {name}.</h1>,
  document.getElementById('root1')
);