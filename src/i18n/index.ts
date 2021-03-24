import { createI18n } from 'vue-i18n';

import messages from '@intlify/vite-plugin-vue-i18n/messages';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  messages,
  silentFallbackWarn: true,
});

export default i18n;
