// import once for async/await support
import 'regenerator-runtime/runtime.js';
// import for polyfills
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mountNode = document.querySelector('#app-root');

function bootstrapApplication() {
  ReactDOM.render(<App />, mountNode);
}

bootstrapApplication();
