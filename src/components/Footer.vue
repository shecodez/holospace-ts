<template>
  <footer class="text-center">
    <span>{{ t('Footer.made_with_love') }} <span class="text-primary-500">shecodez</span> | NJN</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Footer',
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style></style>
