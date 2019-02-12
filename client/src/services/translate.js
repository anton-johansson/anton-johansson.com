import React from 'react';
import english from '../translations/en';
import swedish from '../translations/sv';
import getLanguageCode from './get-language-code';

const translations = {
  en: english,
  sv: swedish
}

export default labelKey => {
  const languageCode = getLanguageCode();
  const translation = translations[languageCode][labelKey] || `%${labelKey}%`;
  if (Array.isArray(translation)) {
    return translation.map(value => {
      return <p>{value}</p>
    });
  } else {
    return translation;
  }
};
