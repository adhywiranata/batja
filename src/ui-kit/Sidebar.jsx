import React from 'react';

import * as css from './sidebar.css'

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <>
      <div
        className={css.container}
        style={{
          transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition: '0.5s',
        }}
      >
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