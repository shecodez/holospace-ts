<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';
import { AppTheme } from '@/store/interfaces';
import useBreakpoints from '@/useables/useBreakpoints';

export default defineComponent({
  name: 'App',
  setup: () => {
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

    const { locale } = useI18n();

    onBeforeMount(() => store.dispatch(AllActionTypes.INIT_Locale));
    watch(
      () => locale.value,
      (lang) => {
        //axios.defaults.headers.common['Accept-Language'] = locale
        let html = document.querySelector<HTMLElement>('html');
        html?.setAttribute('lang', lang!);
      }
    );

    const { width, SCREEN } = useBreakpoints();
    watch(
      () => width.value,
      (width) => {
        if (width < SCREEN.md) {
          // setDrawerStateBeforeAutoCollapse()
          store.dispatch(AllActionTypes.SET_SIDE_DRAWER_IsOpen, false);
          store.dispatch(AllActionTypes.SET_Use_SLIDE_OUT_DRAWER, true);
          store.dispatch(AllActionTypes.SET_META_DRAWER_IsMini, true);
        } else {
          store.dispatch(AllActionTypes.SET_Use_SLIDE_OUT_DRAWER, false);
          //store.dispatch(AllActionTypes.SET_SIDE_DRAWER_IsOpen, true); // state.sideDrawerBeforeAutoCollapse
          store.dispatch(AllActionTypes.SET_META_DRAWER_IsMini, false); // state.metaDrawerBeforeAutoColapse
        }
      },
      { immediate: true }
    );

    return {
      theme,
      locale,
    };
  },
});
</script>
