import React from 'react';

import * as css from './bookcard.style.css';

const BookCard = () => {
  return (
    <div className={css.card}>
      <h2 className={css.title}>The Phoenix Project</h2>
      <span className={css.subtitle}>Gene Kim</span>
    </div>
  )
};

export default BookCard;
