import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "./languages/en/translation.json";
import translationAM from "./languages/am/translation.json";

const resources = {
    en: {
        translation: translationEN,
    },
    am: {
        translation: translationAM,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
