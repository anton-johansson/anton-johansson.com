import React from 'react';
import english from '../translations/en';
import swedish from '../translations/sv';
import getLanguageCode from './get-language-code';

const translations = {
  en: english,
  sv: swedish
}

const injectParams = (value, params) => {
    let output = value;
    Object.keys(params).forEach(key => {
        output = output.replace(`\${${key}}`, params[key]);
    });
    return output;
};

export default (labelKey, params = {}) => {
    const languageCode = getLanguageCode();
    const translation = translations[languageCode][labelKey];
    if (translation === undefined) {
        return `%${labelKey}%`;
    }
    if (Array.isArray(translation)) {
        return <div>{translation.map((value, index) => <p key={index}>{injectParams(value, params)}</p>)}</div>
    } else {
        return injectParams(translation, params);
    }
};