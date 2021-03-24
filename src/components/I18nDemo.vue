<template>
  <p>{{ t('message.greeting') }}</p>
  <p>{{ t('message.hello', ['HoloSpace']) }}</p>
  <p>{{ t('message.hello2', { company: 'HS' }) }}</p>
  <p>{{ d(new Date(), 'short') }}</p>
  <p>{{ d(new Date(), 'long') }}</p>
  <p>{{ n(100, 'currency') }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'I18nDemo',
  setup: () => {
    const { t, d, n } = useI18n();
    return { t, d, n };
  },
});
</script>
