import * as i18n from 'i18next';
import { HttpBackendOptions } from 'i18next-http-backend';

export const i18nextOptions: i18n.InitOptions & {
  backend: HttpBackendOptions;
} = {
  supportedLngs: ['de', 'en'],
  fallbackLng: 'en',
  debug: true,
  returnEmptyString: false,
  ns: ['navigation', 'transaction-research', 'user-management'],
  backend: {
    loadPath: 'assets/locales/{{lng}}.{{ns}}.json',
  },
  detection: {
    order: ['cookie'],
    lookupCookie: 'lang',
    caches: ['cookie'],
    cookieMinutes: 10080, // 7 days
  },
};

export default i18nextOptions;
