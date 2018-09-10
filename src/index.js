import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootRender = document.getElementById('table_of_train_fare')

if (rootRender) {
  ReactDOM.render(<App />, document.getElementById('table_of_train_fare'));
}
