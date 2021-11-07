import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import App from './App';
const d = { data };
ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1>SensorTech</h1>
    </header>
    <App {...d} />
  </React.StrictMode>,
  document.getElementById('root')
);
