<template>
  <ModalFullScreen :isOpen="showModal" :onClose="closeModal">
    <Modal2ColumnLayout v-if="userProfile" :closeModal="closeModal">
      <template v-slot:leftcolheader>
        <i-mdi-cog class="text-xl flex-shrink-0" />
        <h3 class="font-bold text-xl uppercase mx-2 truncate">{{ t('settings') }}</h3>
      </template>
      <template v-slot:leftcolbody>
        <ul class="settings flex-grow overflow-y-overlay">
          <li v-for="(setting, i) in settings" :key="`s-${i}`">
            <div v-if="setting.header" class="py-2 mx-3">
              <h3 class="text-xs font-bold uppercase">{{ t(`${l10n}.${setting.id}`) }}</h3>
            </div>
            <div v-else-if="setting.divider" class="border-b hs-border mx-2 p-0" />
            <div
              v-else
              class="setting relative p-2 border-l-4 hover:bg-gradient-to-r from-gray-600 cursor-pointer"
              :class="isActive(i) ? 'active font-medium border-primary-500 bg-gradient-to-r' : 'border-transparent'"
              @click="setActive(i)"
            >
              <div
                class="ribbon-tail flex items-center overflow-hidden"
                :class="setting.color && `text-${setting.color}`"
              >
                <IconForSetting :iconFor="setting.id" />
                <span class="mx-2 capitalize truncate">
                  {{ t(`${l10n}.${setting.id}`) }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </template>
      <template v-slot:leftcolfooter>
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
      </template>

      <template v-slot:rightcolheader>
        <h3 class="font-bold text-xl uppercase mx-2">{{ t(`${l10n}.${settings[activeIdx].id}`) }}</h3>
      </template>

      <div class="mx-4 h-full">
        <IndexForSettingCtrl
          :tabFor="settings[activeIdx].id"
          :profile="{ ...userProfile, email: 'test@example.com' }"
        />
      </div>
    </Modal2ColumnLayout>
    <div v-else>Loading...</div>
  </ModalFullScreen>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import ModalFullScreen from '@/components/ModalFullScreen.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import IconForSetting from '@/components/iconFors/IconForSetting.vue';
import IndexForSettingCtrl from './tabs/IndexForSettingCtrl.vue';
import Modal2ColumnLayout from '@/components/Modal2ColumnLayout.vue';
import { useStore } from '@/store';
import { users } from '@/data/mock';

export default defineComponent({
  name: 'SettingsModal',
  components: { ModalFullScreen, ToggleTheme, IconForSetting, IndexForSettingCtrl, Modal2ColumnLayout },
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
    const l10n = 'users.my.settings.SettingsModal';

    const store = useStore();

    const version = computed(() => store.getters.getVersion);
    const userProfile = users[1];

    const settings = [
      { divider: true },
      { id: 'account_settings', header: 'Account Settings' },
      { id: 'profile', name: '@Me (profile)' },
      { id: 'privacy_&_security', name: 'Privacy & Security' },
      { id: 'subscriptions', name: 'Subscriptions' },
      { id: 'memberships', name: 'Memberships' },
      { id: 'subroutines', name: 'Subroutine' },
      //{ link: 'exe.holospace-app.com', id: "", name: "HoloSpace-X" },
      { divider: true },
      { id: 'vr', name: 'VR', color: 'primary-500' },
      { divider: true },
      { id: 'app_settings', header: 'App Settings' },
      { id: 'audio_&_video', name: 'Audio & Video' },
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

<style lang="postcss">
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
.hs-h3 {
  @apply text-xs font-bold uppercase;
}
.hs-h4 {
  @apply text-sm font-semibold capitalize;
}
</style>
