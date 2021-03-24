<template>
  <p>{{ t('message.greeting') }}</p>
  <p>{{ t('message.hello', ['HoloSpace']) }}</p>
  <p>{{ t('message.hello2', { company: 'HS' }) }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'I18nDemo',
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>
