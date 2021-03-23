<template>
  <button class="px-2 py-2 rounded-full" @click="toggleTheme()">
    <icon-light v-if="isDark" />
    <icon-dark v-else />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import IconLight from '/@vite-icons/mdi/brightness-5.vue';
import IconDark from '/@vite-icons/mdi/weather-night.vue';
import { useStore } from '../store';
import AllActionTypes from '../store/action-types';
import { AppThemes } from '../store/interfaces';

export default defineComponent({
  name: 'ToggleTheme',
  components: { IconLight, IconDark },
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
