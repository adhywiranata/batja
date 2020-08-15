import React from 'react';
import classnames from 'classnames';
import {FiMenu, FiSearch } from 'react-icons/fi';
import {FormattedMessage} from 'react-intl';

import * as css from './header.css';

const NAV_ITEMS = [
  'Popular',
  'Front-End',
  'DevOps',
  'Back-End',
  'Product Dev',
  'Soft Skill',
];

const Header = ({activeNav = 'Popular', toggleSidebar}) => (
  <header>
      <div className={css.rootnav}>
        <button className={css.clearbtn} onClick={toggleSidebar}>
          <FiMenu className={css.action__icon} />
        </button>
        <span className={css.logo}>ba.tja</span>
        <FiSearch className={css.action__icon} />
      </div>
      <h1>
        <FormattedMessage
          id="3RRC6J"
          defaultMessage="Jelajah Jendela Ilmu."
          description="Title of header UI"
        />
      </h1>
      <div className={css.container}>
        <nav className={css.nav}>
          <ul className={css.list}>
            {NAV_ITEMS.map((navitem, idx) => (
              <li
                key={idx}
                className={classnames(...[
                  css.list__item,
                  activeNav === navitem ? css.list__item_active : null,
                ])}
              >
                <span>{navitem}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
);

export default Header;
