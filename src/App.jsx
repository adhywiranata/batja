import React from 'react';

import './normalize.css';
import './global.css';
import * as css from './app.style.css';

import Header from './ui-kit/Header';
import BookCard from './ui-kit/BookCard';

const App = () => (
  <div className={css.root}>
    <div className={css.container}>
      <Header />
      <section className={css.booklist}>
        <BookCard />
        <BookCard />
        <BookCard />
      </section>
    </div>
  </div>
);

export default App;