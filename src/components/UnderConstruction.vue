<template>
  <div class="mx-4 text-center">
    <img class="w-auto" src="@/assets/images/site-under-construction.png" alt="Under Construction" />
    <h3 class="text-2xl mb-3">{{ t('UnderConstruction.under_construction_message') }}</h3>
    <p>{{ t('UnderConstruction.we_are_working_') }}</p>
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
