<template>
  <div v-show="showModal" class="fixed z-50 w-full h-full top-0 left-0 flex items-center justify-center">
    <div ref="backdrop" class="absolute w-full h-full bg-gray-900 opacity-50">
      <button
        class="modal-close absolute top-4 right-4 flex flex-col items-center mt-4 mr-4 text-white text-sm"
        @click="closeModal"
      >
        <i-mdi-close />
        <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
      </button>
    </div>

    <div
      ref="modal"
      class="relative bg-white dark:bg-gray-800 w-11/12 md:max-w-lg mx-auto rounded shadow-lg overflow-y-auto"
      role="dialog"
    >
      <div class="modal-content py-4 text-left px-6">
        <slot name="header">
          <div v-show="title" class="flex justify-between items-center pb-3">
            <h3 class="text-xl font-bold">{{ title }}</h3>
            <button @click="closeModal">
              <i-mdi-close />
            </button>
          </div>
        </slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { watch, ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import useClickOutsite from '@/useables/useClickOutside';

export default defineComponent({
  name: 'ModalDialog',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { t } = useI18n();

    const modal = ref(null);
    const showModal = ref(false);
    const { onClickOutside } = useClickOutsite();

    watch(
      () => props.isOpen,
      (isOpen) => {
        showModal.value = isOpen;
      }
    );

    function closeModal() {
      showModal.value = false;
      props.onClose();
    }

    onClickOutside(modal, () => {
      if (showModal.value === true) {
        closeModal();
      }
    });

    return { t, showModal, closeModal, modal };
  },
});
</script>
