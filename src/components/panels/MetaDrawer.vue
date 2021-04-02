<template>
  <div
    class="flex flex-col bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
    :class="metaDrawerIsMini ? 'is-mini w-20' : 'w-60'"
  >
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'MetaDrawer',
  setup: () => {
    const store = useStore();

    const metaDrawerIsMini = computed(() => store.state.app.metaDrawerIsMini);

    return {
      metaDrawerIsMini,
    };
  },
});
</script>
