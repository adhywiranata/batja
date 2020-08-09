import React from 'react';

import './normalize.css';
import './global.css';
import {root, container} from './app.style.css';

import Header from './ui-kit/Header';
import BookCard from './ui-kit/BookCard';

const App = () => (
  <div className={root}>
    <div className={container}>
      <Header />
      <section>
        <BookCard />
      </section>
    </div>
  </div>
);

export default App;