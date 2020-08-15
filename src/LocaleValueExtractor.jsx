import React, {useContext, useEffect} from 'react';
import {AppLocaleContext} from './app-contexts';

// will returns a text node!
const LocaleValueExtractor = ({textId, defaultText}) => {
  const appLocale = useContext(AppLocaleContext);
  return <>{appLocale.value?.texts[textId] ? appLocale.value.texts[textId].text : defaultText}</>;
};

export default LocaleValueExtractor;