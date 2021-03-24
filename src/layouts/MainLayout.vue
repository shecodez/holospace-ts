<template>
  <div
    class="flex flex-wrap md:flex-nowrap h-screen text-gray-800 dark:text-gray-200 bg-cyan-500 dark:bg-red-500 overflow-hidden"
  >
    <slot name="FixedPanel"><DeckPanel /></slot>

    <div class="w-full h-full flex flex-col">
      <Banner />
      <div class="flex h-full">
        <slot name="SidePanel">
          <!-- <DiskPanel /> -->
        </slot>

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
import DeckPanel from '../components/decks/DeckPanel.vue';

import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';
import { AlertTypes, IBanner } from '@/store/interfaces';

export default defineComponent({
  components: { Banner, DeckPanel },
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
.disk-space.active > .ribbon-tail:before {
  width: 2.5rem;
  background: rgba(235, 235, 235, 0.1);
}
.disk-space .actions {
  visibility: hidden;
}
.disk-space:hover .actions {
  visibility: visible;
}
.deck.active:hover {
  animation: none;
}
.deck:hover {
  border-radius: 10%;
  animation: borders 0.5s ease-in-out;
}
.f-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes borders {
  0% {
    border-radius: 50%;
  }
  33% {
    border-radius: 15%;
  }
  66% {
    border-radius: 25%;
  }
  100% {
    border-radius: 10%;
  }
}
.is-collapsedx .d-none {
  display: none;
}
</style>
