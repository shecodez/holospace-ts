<template>
  <div
    class="flex flex-col w-0 md:w-60 bg-gray-300 bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 is-collapsed"
    v-if="sideDrawerIsOpen"
  >
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer">
      <!-- <Ad /> -->
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'SideDrawer',
  setup: () => {
    const store = useStore();

    const sideDrawerIsOpen = computed(() => store.state.app.sideDrawerIsOpen); //&& !store.state.app.usePopOutSideDrawer

    return {
      sideDrawerIsOpen,
    };
  },
});
</script>
