import React, {useContext} from 'react';

import * as css from './sidebar.css'
import {AppLocaleContext, AppThemeContext} from '../app-contexts';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const localeContext = useContext(AppLocaleContext);
  const themeContext = useContext(AppThemeContext);
  const setSidebarLocale = (locale) => localeContext.setValue(locale);
  const setSidebarTheme = (theme) => themeContext.setValue(theme);

  return (
    <>
      <div
        className={css.container}
        style={{
          transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition: '0.5s',
        }}
      >
        <div>
          languages: {localeContext.value?.lang}
          <button onClick={() => setSidebarLocale('id')}>ID</button>
          <button onClick={() => setSidebarLocale('en')}>EN</button>
        </div>
        <div>
          theme: {themeContext.value}
          <button onClick={() => setSidebarTheme('light')}>Light</button>
          <button onClick={() => setSidebarTheme('dark')}>Dark</button>
        </div>
      </div>
      <div
        className={css.overlay}
        style={{
          display: isSidebarVisible ? 'block' : 'none',
          transition: '0.5s',
        }}
        onClick={toggleSidebar}
      />
    </>
  )
};

export default Sidebar;