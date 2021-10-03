import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = "Dipu";
const el = <h1>My Name is {name}.</h1>;

ReactDOM.render(
  <h1>Hello, {name}!</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  el,
  document.getElementById('root1')
);

let counter = 0;
function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById('timer'));
}


setInterval(show, 1000);