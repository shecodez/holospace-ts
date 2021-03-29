<template>
  <div
    class="flex flex-wrap md:flex-nowrap h-screen text-gray-800 dark:text-gray-200 bg-blue-500 dark:bg-red-500 overflow-hidden"
  >
    <slot name="FixedPanel"><DeckPanel /></slot>
    <div class="w-full h-full flex flex-col">
      <Banner />
      <div class="flex h-full">
        <slot name="SidePanel"><DiskSpacePanel /></slot>
        <slot></slot>
        <slot name="MetaPanel">
          <!-- <UserPanel /> -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import Banner from '@/components/Banner.vue';
import DeckPanel from '@/components/decks/DeckPanel.vue';
import DiskSpacePanel from '@/components/diskspaces/DiskSpacePanel.vue';

import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';
import { AlertTypes, IBanner } from '@/store/interfaces';

export default defineComponent({
  components: { Banner, DeckPanel, DiskSpacePanel },
  name: 'MainLayout',
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const setConfirmEmailReminder = (): void => {
      // if (!store.getters.authUserEmailConfirmed)
      const banner = {
        type: AlertTypes.INFO,
        text: t('alerts.confirm_email_reminder'),
        isDismissible: true,
      } as IBanner;
      banner.color = banner.type.toLowerCase();
      store.dispatch(AllActionTypes.SET_Banner, banner);
    };
    onMounted(() => setConfirmEmailReminder());
  },
});
</script>

<style>
button {
  position: relative;
}
button:before {
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  color: inherit;
  content: '';
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
button:hover:before {
  opacity: 0.08;
}
.hover-border-solid:hover {
  border-style: solid;
}
.ribbon-tail:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  /* TODO: calc dynamic width w/ JS */
  background: transparent;
  clip-path: polygon(50% 50%, 0 100%, 100% 100%);
  transform: rotate(270deg);
}
.banner.ribbon-tail:before {
  width: 3rem;
  background: black;
}

.f-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.is-collapsedx .d-none {
  display: none;
}
</style>
