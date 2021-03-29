<template>
  <button class="px-2 py-2 rounded-full" @click="toggleTheme()">
    <i-mdi-brightness-5 v-if="isDark" />
    <i-mdi-weather-night v-else />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '../store';
import AllActionTypes from '../store/action-types';

export default defineComponent({
  name: 'ToggleTheme',
  setup: () => {
    const store = useStore();

    const isDark = computed(() => {
      return store.getters.isDarkTheme;
    });
    const toggleTheme = () => {
      store.dispatch(AllActionTypes.TOGGLE_Theme);
    };

    return {
      isDark,
      toggleTheme,
    };
  },
});
</script>
