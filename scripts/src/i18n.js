import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  de: { translation: translationDE },
  en: { translation: translationEN }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // Standard-Sprache
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
