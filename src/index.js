import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module';

// Initialize Google Tag Manager
const tagManagerArgs = {
  gtmId: 'AW-16872205079',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster,
// you can change unregister() to register() below.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
