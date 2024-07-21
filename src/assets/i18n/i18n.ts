// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from '../locales/en/translation.json';
import translationRU from '../locales/ru/translation.json';
import translationRO from '../locales/ro/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  ro: {
    translation: translationRO
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more languages can be added later
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;