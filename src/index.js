// import once for async/await support
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mountNode = document.querySelector('#app-root');

function bootstrapApplication() {
  ReactDOM.render(<App />, mountNode);
}

bootstrapApplication();
