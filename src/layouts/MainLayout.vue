<template>
  <div
    class="hs-bg-gradient hs-bg-position flex flex-wrap md:flex-nowrap flex-col md:flex-row h-screen text-gray-800 dark:text-gray-200 overflow-hidden"
    :style="{ backgroundImage: `url(${getBgImageUrl})` }"
  >
    <slot name="FixedSlot"><DeckCtrl /></slot>
    <div class="flex flex-1 flex-col w-full h-full overflow-hidden">
      <Banner />
      <div class="flex h-full overflow-hidden">
        <slot name="SideSlot"><DiskSpaceCtrl /></slot>
        <slot></slot>
        <slot name="MetaSlot"><UserCtrl /></slot>
      </div>
    </div>
  </div>
  <SlideOutDrawer :isOpen="useSlideOutDrawer" :onClose="closeDrawer">
    <DiskSpaceCtrl useDrawer />
  </SlideOutDrawer>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import Banner from '@/components/alerts/Banner.vue';
import DeckCtrl from '@/components/decks/DeckCtrl.vue';
import DiskSpaceCtrl from '@/components/diskspaces/DiskSpaceCtrl.vue';
import UserCtrl from '@/components/users/UserCtrl.vue';
import SlideOutDrawer from '@/components/panels/SlideOutDrawer.vue';
import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';
import { AlertTypes, IBanner } from '@/store/interfaces';

export default defineComponent({
  components: { Banner, DeckCtrl, DiskSpaceCtrl, UserCtrl, SlideOutDrawer },
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

    const getBgImageUrl = ref('/src/assets/images/flat-mountains_1920x1080.jpg');
    //const getBgGradient = ref('linear-gradient(90deg, rgba(255, 77, 77, 0.6) 10%, rgba(255, 129, 131, 0.6))');

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

    const useSlideOutDrawer = computed(() => store.state.app.sideDrawerIsOpen && store.state.app.useSlideOutDrawer);

    const closeDrawer = () => {
      store.dispatch(AllActionTypes.SET_SIDE_DRAWER_IsOpen, false);
    };

    return {
      getBgImageUrl,
      //getBgGradient,
      useSlideOutDrawer,
      closeDrawer,
    };
  },
});
</script>

<style>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent; /* thumb track */
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
  visibility: hidden;
}
*::-webkit-scrollbar:hover {
  visibility: visible;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}

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
input:disabled,
textarea:disabled,
select:disabled,
button:disabled,
.disabled {
  cursor: not-allowed;
  pointer-events: all !important;
  filter: grayscale(1);
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
  background: white;
}
.dark .banner.ribbon-tail:before {
  background: black;
}

.f-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hs-bg-position {
  background-position: center center;
}
</style>
