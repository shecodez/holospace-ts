<template>
  <div v-show="showModal" class="fixed z-50 w-full h-full top-0 left-0 flex items-center justify-center">
    <div ref="backdrop" class="absolute w-full h-full bg-black opacity-90" />

    <div
      ref="modal"
      class="relative bg-white dark:bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg overflow-y-auto"
      role="dialog"
    >
      <div class="text-left">
        <slot name="header">
          <div v-show="title" class="flex justify-between items-center py-3 px-6">
            <h3 class="text-xl font-bold">{{ title }}</h3>
            <button @click="closeModal">
              <i-mdi-close />
            </button>
          </div>
        </slot>

        <div class="py-2 px-6">
          <slot></slot>
        </div>

        <div class="flex justify-between dark:bg-gray-700 py-3 px-6">
          <button @click="closeModal" class="py-2 font-semibold">
            <i-mdi-keyboard-backspace class="inline-block mr-2" />
            <span class="capitalize">{{ t('back') }}</span>
          </button>
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { watch, ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { onClickOutside } from '@vueuse/core';

export default defineComponent({
  name: 'ModalConfirm',
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
  setup: (props) => {
    const { t } = useI18n();

    const showModal = ref(false);
    watch(
      () => props.isOpen,
      (isOpen) => {
        showModal.value = isOpen;
      }
    );

    const closeModal = () => {
      showModal.value = false;
      props.onClose();
    };

    const modal = ref();
    onClickOutside(modal, () => {
      if (showModal.value === true) {
        closeModal();
      }
    });

    return { t, showModal, closeModal, modal };
  },
});
</script>
