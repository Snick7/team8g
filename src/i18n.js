import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru/translation.json";
import kz from "./locales/kz/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    kz: {
      translation: kz,
    },
  },

  lng: localStorage.getItem("language") || "ru",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;