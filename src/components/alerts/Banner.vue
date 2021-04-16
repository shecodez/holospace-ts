<template>
  <div v-show="showBanner" class="bg-white dark:bg-black max-h-14 h-12 overflow-hidden">
    <div
      class="banner ribbon-tail relative items-center flex h-full p-2 border-l-4 bg-opacity-30"
      :class="`border-${color}-600 bg-${color}-700 text-${color}-600`"
    >
      <slot name="customIcon">
        <IconForAlert :type="type" />
      </slot>
      <!-- max character count 200 + click ...modal of full text -->
      <div class="flex-grow mx-4">
        <p class="line-clamp-3">{{ text }}</p>
        <button v-show="onClickAction" class="px-2">{{ actionBtnText }}</button>
      </div>
      <button class="mr-6" v-show="isDismissible" @click="dismissBanner">
        <i-mdi-close-circle :class="`text-${color}-600`" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import IconForAlert from '../iconFors/IconForAlert.vue';
import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';

export default defineComponent({
  name: 'Banner',
  components: { IconForAlert },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const showBanner = computed(() => store.getters.showBanner);
    const type = computed(() => store.state.app.banner?.type);
    const color = computed(() => store.state.app.banner?.color);
    const text = computed(() => store.state.app.banner?.text);
    const isDismissible = computed(() => store.state.app.banner?.isDismissible);
    const actionBtnText = computed(() => store.state.app.banner?.actionBtnText);
    const onClickAction = computed(() => store.state.app.banner?.onClickAction);

    const dismissBanner = () => {
      store.dispatch(AllActionTypes.CLEAR_Banner);
    };

    return { t, showBanner, type, color, text, isDismissible, actionBtnText, onClickAction, dismissBanner };
  },
});
</script>

<style></style>
