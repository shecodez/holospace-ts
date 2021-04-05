<template>
  <div v-show="showDrawer" class="fixed z-50 w-full h-full top-0 left-0 flex">
    <div ref="backdrop" class="absolute w-full h-full bg-gray-900 opacity-50" />
    <div
      ref="drawer"
      class="relative flex h-full flex-col w-60 bg-gray-300 dark:bg-gray-700 shadow-lg overflow-hidden overflow-y-overlay"
    >
      <div class="drawer-content w-full h-full text-black dark:text-white">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { onClickOutside } from '@vueuse/core';

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

    const showDrawer = ref(false);
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

    const drawer = ref(null);
    onClickOutside(drawer, () => {
      if (showDrawer.value === true) {
        closeDrawer();
      }
    });

    return { t, drawer, showDrawer, closeDrawer };
  },
});
</script>
