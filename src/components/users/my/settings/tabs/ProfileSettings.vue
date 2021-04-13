<template>
  <div class="mx-4">
    <div class="flex flex-wrap rounded bg-gray-300 dark:bg-gray-700 p-2 md:p-4">
      <div class="flex items-center">
        <div class="text-center">
          <div
            class="relative border-4 rounded-full w-32 h-32 f-center"
            :style="`background-color: ${useHashColor(name)}`"
          >
            <span class="text-4xl text-white">{{ name.charAt(0) }}</span>
            <img v-show="avatarUrl" class="rounded-full" :src="avatarUrl" alt="My Avatar" />
            <button
              class="absolute right-0 bottom-0 bg-white dark:bg-gray-700 border-2 border-dashed rounded-full w-9 h-9 f-center"
            >
              <i-mdi-arrow-up-bold-hexagon-outline />
            </button>
          </div>
          <span class="text-xs leading-3">
            <!-- if image error add text-red-500 to class -->
            <span class="capitalize">{{ t('min') }}: <b>128</b> ~ {{ t('max') }}: <b>1024</b></span>
            <span v-if="imgError" class="text-error-500 block">{{ imgError }}</span>
            <span v-else class="hint block">{{ t('recommended') }}: <b>512</b></span>
          </span>
        </div>

        <button v-if="!avatarUrl" class="btn btn-primary mx-4">
          {{ t(`${l10n}.upload`) }}
        </button>
        <button v-else class="btn border-2 border-red-500 text-red-500 mx-4">
          {{ t(`${l10n}.remove`) }}
        </button>
      </div>

      <div class="flex-1 space-y-4 p-4 overflow-hidden">
        <div class="flex items-center">
          <div class="flex-grow">
            <label class="text-xs uppercase font-bold">HoloTag</label>
            <h5>
              {{ name }}<span class="text-sm text-gray-500">#{{ pin }}</span>
            </h5>
          </div>
          <button class="btn btn-primary">{{ t('edit') }}</button>
        </div>

        <div class="flex items-center">
          <div class="flex-grow">
            <label class="text-xs uppercase font-bold flex items-center">
              {{ t('email') }}
              <!-- <i-mdi-check-circle-outline v-if="emailVerified" class="mx-2 text-success-500" /> -->
              <i-mdi-alert-outline class="mx-2 text-warning-500" />
            </label>
            <h5>
              {{ censoredEmail }}
              <button class="text-xs mx-2 text-primary-500 uppercase font-semibold" @click="showEmail = !showEmail">
                <span v-if="showEmail">{{ t('hide') }}</span>
                <span v-else>{{ t('show') }}</span>
              </button>
            </h5>
          </div>
          <button class="btn btn-primary">{{ t('edit') }}</button>
        </div>
        <div class="flex items-center">
          <div class="flex-grow">
            <label class="text-xs uppercase font-bold">{{ t('phone_number') }}</label>
            <h5>
              <span class="text-gray-500 text-sm">---</span>
            </h5>
          </div>
          <button class="btn btn-primary">{{ t('add') }}</button>
        </div>
      </div>
    </div>

    <div class="py-6">
      <h3 class="font-bold text-xl uppercase mb-4">{{ t(`${l10n}.password_and_2fa`) }}</h3>

      <button class="btn btn-primary mb-4">{{ t(`${l10n}.change_password`) }}</button>

      <div class="py-2">
        <h4 class="uppercase font-bold">{{ t(`${l10n}.two_factor_authentication`) }}</h4>
        <p>{{ t(`${l10n}.protect_your_holospace_account_`) }}</p>
        <!-- <button class="btn btn-primary mt-4 mb-2">{{ t(`${l10n}.enable_2fa`) }}</button> -->
      </div>
    </div>

    <div class="py-6 border-t border-red-500 border-opacity-40">
      <h3 class="font-bold text-xl uppercase text-red-500 mb-4">{{ t('danger_zone') }}</h3>

      <button class="btn bg-red-500">{{ t(`${l10n}.delete_account`) }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import TextField from '@/components/inputs/TextField.vue';
import Textarea from '@/components/inputs/Textarea.vue';
import { useHashColor } from '@/useables/useHashColor';
import Badge from '@/components/Badge.vue';

export default defineComponent({
  components: { TextField, Textarea, Badge },
  name: 'ProfileSettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'users.my.settings.tabs.ProfileSettings';

    const state = reactive({
      name: '',
      pin: 0,
      email: '',
      avatarUrl: '',
      bio: '',
    });

    const setFields = () => {
      if (!props.profile) return;

      const { name, pin, email, avatarUrl, bio } = props.profile;
      state.name = name;
      state.pin = pin;
      state.email = email;
      state.avatarUrl = avatarUrl;
      state.bio = bio;
    };
    onMounted(() => setFields());

    const showEmail = ref(false);
    const censoredEmail = ref(props.profile.email);
    const censorEmail = () => {
      const email = props.profile.email;
      if (!email) return;

      return '*'.repeat(7).concat('@', email.split('@')[1]);
    };
    watch(
      () => showEmail.value,
      (showEmail) => {
        censoredEmail.value = showEmail ? props.profile.email : censorEmail();
      },
      { immediate: true }
    );

    const saveSettings = () => {
      console.log('ProfileSettings.vue > saveSettings', state);
    };

    const imgError = ref('');

    return {
      t,
      l10n,
      ...toRefs(state),
      showEmail,
      censoredEmail,
      useHashColor,
      saveSettings,
      imgError,
    };
  },
});
</script>
