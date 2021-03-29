<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from './store';
import AllActionTypes from './store/action-types';
import { AppTheme } from './store/interfaces';

export default defineComponent({
  name: 'App',
  setup: () => {
    const { locale } = useI18n();
    const store = useStore();

    onBeforeMount(() => store.dispatch(AllActionTypes.INIT_Theme));
    const theme = computed(() => {
      return store.state.app.theme;
    });
    watch(
      () => theme.value,
      (theme) => {
        let html = document.querySelector<HTMLElement>('html');
        theme === AppTheme.DARK ? html?.classList.add(AppTheme.DARK) : html?.classList.remove(AppTheme.DARK);
      }
    );

    onBeforeMount(() => store.dispatch(AllActionTypes.INIT_Locale));
    watch(
      () => locale.value,
      (lang) => {
        // if newLangVal !== oldLangVal set newLangVal
        //axios.defaults.headers.common['Accept-Language'] = locale
        let html = document.querySelector<HTMLElement>('html');
        html?.setAttribute('lang', lang!);
      }
    );

    return {
      theme,
      locale,
    };
  },
});
</script>
