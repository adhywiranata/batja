import React, {useState} from 'react';

import './normalize.css';
import './global.css';
import * as css from './app.style.css';

import Header from './ui-kit/Header';
import Sidebar from './ui-kit/Sidebar';
import BookCard from './ui-kit/BookCard';


const InteractionPane = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
    </>
  );
};

const App = () => {
  
  return (
    <div className={css.root}>
      <div className={css.container}>
        <InteractionPane />
        <section className={css.booklist}>
          <BookCard />
          <BookCard />
          <BookCard />
        </section>
        <section className={css.booklist}>
          <BookCard />
          <BookCard />
          <BookCard />
        </section>
        <section className={css.booklist}>
          <BookCard />
          <BookCard />
          <BookCard />
        </section>
      </div>
    </div>
  );
}

export default App;