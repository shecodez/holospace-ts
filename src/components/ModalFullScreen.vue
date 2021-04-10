<template>
  <div v-show="showModal" class="fixed z-10 w-full h-full top-0 left-0 flex items-center justify-center">
    <div ref="modal" class="fixed w-full h-full z-50 bg-gray-900 bg-opacity-90 overflow-y-auto">
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
</template>

<script lang="ts">
import { watch, ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { onKeyDown } from '@vueuse/core';

export default defineComponent({
  name: 'ModalFullScreen',
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
    onKeyDown(
      'Escape',
      () => {
        if (showModal.value === true) {
          closeModal();
        }
      },
      { target: document }
    );

    return { t, showModal, closeModal, modal };
  },
});
</script>
