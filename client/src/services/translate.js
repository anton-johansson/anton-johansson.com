import english from '../translations/en';
import swedish from '../translations/sv';
import getLanguageCode from './get-language-code';

const translations = {
  en: english,
  sv: swedish
}

export default labelKey => {
  const languageCode = getLanguageCode();
  return translations[languageCode][labelKey] || `%${labelKey}%`;
};
