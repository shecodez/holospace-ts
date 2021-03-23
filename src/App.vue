<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';
import { useStore } from './store';
import AllActionTypes from './store/action-types';
import { AppThemes } from './store/interfaces';

export default defineComponent({
  name: 'App',
  setup: () => {
    const store = useStore();

    onBeforeMount(() => store.dispatch(AllActionTypes.INIT_Theme));

    const isDark = computed(() => {
      return store.getters.isDarkTheme;
    });
    watch(
      () => isDark.value,
      (isDark) => {
        let html = document.querySelector<HTMLElement>('html');
        isDark
          ? html?.classList.add(AppThemes.DARK)
          : html?.classList.remove(AppThemes.DARK);
      }
    );

    return {
      isDark,
    };
  },
});
</script>
