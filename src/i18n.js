import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    // Укажите конфигурацию, например, ключи и переводы
    resources: {
        en: {
            translation: {},
        },
        ru: {
            translation: {},
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
