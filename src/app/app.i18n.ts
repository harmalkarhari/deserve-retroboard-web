import common_en from '../assets/locales/en/common.json';
import i18n from 'i18next';

//TODO: add locale files as required
i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  defaultNS: 'common',
  resources: {
    en: {
      common: common_en,
    },
  },
});
export default i18n;
