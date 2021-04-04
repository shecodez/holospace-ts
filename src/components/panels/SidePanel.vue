<template>
  <div class="flex flex-col w-60 bg-gray-300 bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80" v-if="sidePanelIsOpen">
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
  name: 'SidePanel',
  setup: () => {
    const store = useStore();

    const sidePanelIsOpen = computed(() => store.state.app.sideDrawerIsOpen && !store.state.app.useSlideOutDrawer);

    return {
      sidePanelIsOpen,
    };
  },
});
</script>
