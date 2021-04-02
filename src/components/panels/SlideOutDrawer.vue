<template>
  <div v-show="showDrawer" class="fixed w-full h-full top-0 left-0 flex">
    <div ref="backdrop" class="absolute w-full h-full bg-gray-900 opacity-50">
      <button
        class="drawer-close absolute top-4 right-4 flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        @click="closeDrawer"
      >
        <i-mdi-close />
        <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
      </button>
    </div>

    <div ref="drawer" class="flex h-full flex-col w-60 bg-gray-300 dark:bg-gray-700 shadow-lg z-50 overflow-y-overlay">
      <div class="drawer-content">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import useClickOutsite from '@/useables/useClickOutside';

export default defineComponent({
  name: 'SideOutDrawer',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  setup: (props) => {
    const { t } = useI18n();

    const drawer = ref(null);
    const showDrawer = ref(false);
    const { onClickOutside } = useClickOutsite();

    watch(
      () => props.isOpen,
      (isOpen) => {
        showDrawer.value = isOpen;
      },
      { immediate: true }
    );

    const closeDrawer = () => {
      showDrawer.value = false;
      props.onClose();
    };

    onClickOutside(drawer, () => {
      if (showDrawer.value === true) {
        closeDrawer();
      }
    });

    return { t, drawer, showDrawer, closeDrawer };
  },
});
</script>
