import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const main = <h1>Hi</h1>;
  ReactDOM.render(<Root/>, root);
})