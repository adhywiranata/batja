import React from 'react';

import * as css from './bookcard.style.css';

const BookCard = () => {
  return (
    <div className={css.card}>
      <div className={css.cover}>
        <img className={css.cover__img} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516785582l/38191426._SY475_.jpg" />
      </div>
      <h2 className={css.title}>The Phoenix Project</h2>
      <span className={css.subtitle}>Gene Kim</span>
    </div>
  )
};

export default BookCard;
