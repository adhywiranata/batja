import React, {useContext} from 'react';

import * as css from './sidebar.css'
import {AppLocaleContext} from '../app-contexts';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const localeContext = useContext(AppLocaleContext);
  const setSidebarLocale = (locale) => localeContext.setValue(locale);

  return (
    <>
      <div
        className={css.container}
        style={{
          transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition: '0.5s',
        }}
      >
        languages: {localeContext.value.lang}
        <button onClick={() => setSidebarLocale('id')}>ID</button>
        <button onClick={() => setSidebarLocale('en')}>EN</button>
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