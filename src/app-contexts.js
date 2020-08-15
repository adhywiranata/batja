import {createContext} from 'react';

import idTexts from '../lang/id.json';
import enTexts from '../lang/en.json';

export const loadLocaleTexts = (lang) => {
  switch(lang) {
    case 'id': return idTexts;
    case 'en': return enTexts;
    default  : return idTexts;
  }
};

export const defaultLocaleContextValue = {
  value: {
    lang: 'id',
    texts: loadLocaleTexts('id'),
  },
  setValue: (lang, cb) => {
    cb({
      lang,
      texts: loadLocaleTexts(),
    });
  },
};

export const AppLocaleContext = createContext(defaultLocaleContextValue);

export const AppThemeContext = createContext('light');