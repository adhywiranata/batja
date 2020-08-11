// import once for async/await support
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';

import i18nId from '../compiled-lang/id.json';
import i18nEn from '../compiled-lang/en.json';

import MainApp from './App';

function loadLocaleData(locale) {
  switch (locale) {
    case 'id':
      return i18nId;
    case 'en':
      return i18nEn;
    default:
      return i18nId;
  }
}

function App(props) {
  return (
    <IntlProvider
      locale={props.locale}
      defaultLocale="id"
      messages={props.messages}
    >
      <MainApp />
    </IntlProvider>
  );
}

const mountNode = document.querySelector('#app-root');

async function bootstrapApplication(locale) {
  const messages = await loadLocaleData(locale);
  ReactDOM.render(<App locale={locale} messages={messages} />, mountNode);
}

bootstrapApplication('id');
