<template>
  <div class="mx-4 text-center">
    <h3 class="text-2xl mb-3">This content is under construction</h3>
    <p>She is working on it...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'UnderConstruction',
  setup: () => {
    const { t } = useI18n();

    return { t };
  },
});
</script>
