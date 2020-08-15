import React, {useState} from 'react';

import {AppLocaleContext, loadLocaleTexts} from './app-contexts';

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

  const cachedAppLocale = window.localStorage.getItem('app_locale');
  let injectedLocale = {lang: 'id', texts: loadLocaleTexts('id')};

  if (cachedAppLocale) {
    injectedLocale = JSON.parse((cachedAppLocale));
  }

  const [locale, setLocale] = useState(injectedLocale);

  return (
    <AppLocaleContext.Provider value={{
      value: {
        lang: locale.lang,
        texts: locale.texts,
      },
      setValue: (lang) => {
        const newLocale = {
          lang,
          texts: loadLocaleTexts(lang),
        };

        window.localStorage.setItem('app_locale', JSON.stringify(newLocale));
        setLocale(newLocale);
      },
    }}>
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
    </AppLocaleContext.Provider>
  );
};

export default App;