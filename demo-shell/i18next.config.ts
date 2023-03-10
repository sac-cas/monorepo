import {
  I18NEXT_SERVICE,
  I18NextLoadResult,
  ITranslationService,
} from 'angular-i18next';
import {
  APP_INITIALIZER,
  LOCALE_ID,
  PLATFORM_ID,
  Provider,
} from '@angular/core';
import { isPlatformBrowser, registerLocaleData } from '@angular/common';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18nextOptions from './i18next.options';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

const getAppInitializer = (namespaces: string[]): Function => {
  return (i18next: ITranslationService, platformId: any) => {
    return () => {
      if (!isPlatformBrowser(platformId)) {
        return Promise.resolve();
      }
      const promise: Promise<I18NextLoadResult> = i18next
        .use(HttpApi)
        .use(LanguageDetector)
        .init({ ...i18nextOptions, ns: namespaces });
      return promise;
    };
  };
};

export const getI18nextProvider = (namespaces: string[]): Provider[] => {
  return [
    {
      provide: APP_INITIALIZER,
      deps: [I18NEXT_SERVICE, PLATFORM_ID],
      useFactory: getAppInitializer(namespaces),
      multi: true,
    },
    {
      provide: LOCALE_ID,
      deps: [I18NEXT_SERVICE],
      useFactory: localeIdFactory,
    },
  ];
};
