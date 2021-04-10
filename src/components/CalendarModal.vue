<template>
  <ModalFullScreen :isOpen="showModal" :onClose="closeModal">
    <button class="absolute top-4 right-4 flex flex-col items-center mt-4 mr-4 text-white text-sm" @click="closeModal">
      <i-mdi-close />
      <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
    </button>
    <h2>Calendar</h2>
  </ModalFullScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import ModalFullScreen from '@/components/ModalFullScreen.vue';

export default defineComponent({
  name: 'CalendarModal',
  components: { ModalFullScreen },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();

    return { t };
  },
});
</script>
