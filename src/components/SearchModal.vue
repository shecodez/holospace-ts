<template>
  <ModalFullScreen :isOpen="showModal" :onClose="closeModal">
    <div class="flex items-center justify-center h-screen">
      <button
        class="absolute top-2 right-2 flex flex-col items-center mt-4 mr-4 text-white text-sm"
        @click="closeModal"
      >
        <i-mdi-close />
        <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
      </button>

      <div class="relative pt-10 w-3/5 m-auto">
        <TextField :placeholder="t('search...')" size="lg">
          <template v-slot:prepend>
            <i-mdi-magnify />
          </template>
        </TextField>
      </div>
    </div>
  </ModalFullScreen>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import ModalFullScreen from '@/components/ModalFullScreen.vue';
import TextField from '@/components/inputs/TextField.vue';

export default defineComponent({
  name: 'SearchModal',
  components: { ModalFullScreen, TextField },
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
    const search = ref('');

    return { t, search };
  },
});
</script>
