import React, {useState, Suspense} from 'react';
import {createGlobalStyle} from 'styled-components';

import {AppLocaleContext, loadLocaleTexts, AppThemeContext} from './app-contexts';

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

const GlobalStyle = createGlobalStyle`
  :root {
    --app-background-color: ${props => (props.isLight ? '#FAFAFA' : '#222222')};
    --app-clear-color: ${props => (props.isLight ? '#FFFFFF' : '#333333')};
    --primary-color: ${props => (props.isLight ? '#ee6c4d' : '#ee6c4d')};
    --secondary-color: ${props => (props.isLight ? '#3d5a80' : '#3d5a80')};
    --text-normal-color: ${props => (props.isLight ? '#293241' : '#FFFFFF')};
    --text-passive-color: ${props => (props.isLight ? '#888888' : '#CCCCCC')};
    --text-primary-color: ${props => (props.isLight ? '#ee6c4d' : '#ee6c4d')};
    --text-secondary-color: ${props => (props.isLight ? '#3d5a80' : '#3d5a80')};
  }
`

const App = () => {
  const cachedAppLocale = window.localStorage.getItem('app_locale');
  let injectedLocale = {lang: 'id', texts: loadLocaleTexts('id')};
  const cachedAppTheme = window.localStorage.getItem('app_theme');
  let injectedTheme = 'light';

  if (cachedAppLocale) {
    injectedLocale = JSON.parse((cachedAppLocale));
  }

  if (cachedAppTheme) {
    injectedTheme = cachedAppTheme;
  }

  const [locale, setLocale] = useState(injectedLocale);
  const [theme, setTheme] = useState(injectedTheme);

  return (
    <Suspense fallback={<div>...</div>}>
      <AppThemeContext.Provider value={{
        value: theme,
        setValue: (theme) => {
          window.localStorage.setItem('app_theme', theme);
          setTheme(theme);
        },
      }}>
        <GlobalStyle isLight={theme === 'light'} />
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
    </AppThemeContext.Provider>
  </Suspense>
  );
};

class RootApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log('REACT APP ERROR: ', error, info);
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong!</h1>;
    }

    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

export default RootApp;