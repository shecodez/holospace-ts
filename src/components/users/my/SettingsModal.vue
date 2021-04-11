<template>
  <ModalFullScreen :isOpen="showModal" :onClose="closeModal">
    <div v-if="userProfile" class="flex w-full h-full overflow-hidden">
      <div class="w-1/3 bg-gray-300 bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 md:pt-20">
        <div class="flex flex-col h-full md:w-2/5 md:float-right overflow-hidden">
          <div class="py-4 mx-2 flex items-center">
            <i-mdi-cog class="text-xl flex-shrink-0" />
            <h3 class="font-bold text-xl uppercase mx-2 truncate">{{ t('settings') }}</h3>
          </div>
          <!-- <TextInput label="search..." noLabel preIcon class="px-2">
            <template v-slot:preIcon>
              <i-mdi-magnify />
            </template>
          </TextInput> -->
          <ul class="settings flex-grow overflow-y-overlay">
            <li v-for="(setting, i) in settings" :key="`s-${i}`">
              <div v-if="setting.header" class="py-2 mx-3">
                <h3 class="text-xs font-bold uppercase">{{ t(`${l10n}.${setting.id}`) }}</h3>
              </div>
              <div v-else-if="setting.divider" class="border-b hs-border mx-2 pb-2" />
              <div
                v-else
                class="setting relative p-2 border-l-4 hover:bg-gradient-to-r from-gray-600 cursor-pointer"
                :class="isActive(i) ? 'active font-medium border-primary-500 bg-gradient-to-r' : 'border-transparent'"
                @click="setActive(i)"
              >
                <div class="ribbon-tail flex items-center overflow-hidden">
                  <IconForSetting :iconFor="setting.id" />
                  <span class="mx-2 capitalize truncate">{{ t(`${l10n}.${setting.id}`) }}</span>
                </div>
              </div>
            </li>
          </ul>

          <div class="flex items-center justify-between py-4 mx-2 border-t hs-border">
            <div class="grid grid-flow-col gap-2 ml-1">
              <button>
                <i-mdi-information />
                <span class="sr-only">About</span>
              </button>
              <span class="text-sm text-gray-500">v{{ version }}</span>
            </div>

            <div class="grid grid-flow-col grid-cols-2 gap-2 mr-1">
              <ToggleTheme />
              <button class="f-center rounded-full">
                <!-- mdi-location-exit -->
                <i-mdi-logout class="text-red-500" />
                <span class="sr-only">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex w-full md:w-2/3 bg-gray-400 bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-80 md:pt-20 overflow-hidden"
      >
        <div class="flex flex-col h-full w-full md:w-2/3 md:mx-4">
          <div class="py-4 mx-2">
            <h3 class="font-bold text-xl uppercase mx-2">{{ t(`${l10n}.${settings[activeIdx].id}`) }}</h3>
          </div>
          <div class="flex-1 overflow-y-scroll">
            <TabForSettingsModal :contentFor="settings[activeIdx].id" :profile="userProfile" />
          </div>
        </div>
        <div class="absolute right-0 md:static my-5 mx-4">
          <button class="flex flex-col items-center text-white" @click="closeModal">
            <i-mdi-close />
            <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
          </button>
        </div>
      </div>
    </div>
  </ModalFullScreen>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import ModalFullScreen from '@/components/ModalFullScreen.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import IconForSetting from '@/components/iconFors/IconForSetting.vue';
import TabForSettingsModal from './settings/TabForSettingsModal.vue';

import { useStore } from '@/store';
import { users } from '@/data/mock';

export default defineComponent({
  name: 'SettingsModal',
  components: { ModalFullScreen, ToggleTheme, IconForSetting, TabForSettingsModal },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'users.my.SettingsModal';

    const store = useStore();

    const version = computed(() => store.getters.getVersion);
    const userProfile = users[1];

    const settings = [
      { divider: true },
      { id: 'account_settings', header: 'Account Settings' },
      { id: 'profile', name: '@Me (profile)' },
      { id: 'captains_log', name: "Captain's Log" },
      { id: 'crew_regs', name: 'Crew Regs', description: 'Privacy & Safety' },
      { id: 'subscriptions', name: 'Subscriptions' },
      { id: 'memberships', name: 'Memberships' },
      //{ link: 'exe.holospace-app.com', id: "", name: "HoloSpace-X" },
      { divider: true },
      { id: 'app_settings', header: 'App Settings' },
      { id: 'voice_&_visuals', name: 'Voice & Visuals' },
      { id: 'notifications', name: 'Notifications' },
      { id: 'appearance_&_themes', name: 'Appearance & Themes' },
      { id: 'language', name: 'Language' },
      { divider: true },
      { id: 'get_in_touch', header: 'Get in touch' },
      { id: 'help_&_support', name: 'Help & Support' },
      { id: 'send_feedback', name: 'Send Feedback' },
    ];

    const activeIdx = ref(2);
    const isActive = (index: number) => {
      return index === activeIdx.value;
    };
    const setActive = (index: number) => {
      activeIdx.value = index;
    };

    return { t, l10n, version, userProfile, settings, isActive, setActive, activeIdx };
  },
});
</script>

<style lang="postcss" scoped>
.setting:hover {
  border-color: var(--hs-primary);
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.setting.active > .ribbon-tail:before {
  width: 2.5rem;
  background: rgba(235, 235, 235, 0.1);
}
.hs-border {
  @apply border-black border-opacity-10 dark:border-white dark:border-opacity-10;
}
</style>
