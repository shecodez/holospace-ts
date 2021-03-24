import { createI18n } from 'vue-i18n';

import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { datetimeFormats } from './dateFormats';
import { numberFormats } from './numFormats';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
  datetimeFormats,
  numberFormats
});

export default i18n;
