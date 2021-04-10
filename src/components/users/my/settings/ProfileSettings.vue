<template>
  <div class="mx-4">
    <div class="flex flex-wrap rounded bg-gray-300 dark:bg-gray-700 p-2 md:p-6">
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
        <button class="btn border-2 border-red-500 text-red-500 mx-4">
          {{ t(`${l10n}.remove`) }}
        </button>
      </div>

      <div class="flex-1 p-4">
        <TextField v-model="name" :label="`${t('name')}`" />
        <TextField v-model="email" :label="t('email')">
          <template v-slot:append>
            <i-mdi-alert class="text-warning-500" />
          </template>
        </TextField>
        <Textarea v-model="bio" :label="t('bio')" />

        <div class="text-right mt-4">
          <button class="btn bg-success-500">{{ t(`${l10n}.save`) }}</button>
        </div>
      </div>
    </div>

    <div class="mt-10 rounded bg-gray-300 dark:bg-gray-700 p-6">
      <h3 class="uppercase font-bold">{{ t(`${l10n}.two_factor_authentication`) }}</h3>
      <p>{{ t(`${l10n}.coming_soon`) }}</p>
    </div>

    <div class="my-6">
      <button class="btn bg-red-500">{{ t(`${l10n}.delete_account`) }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

import TextField from '@/components/inputs/TextField.vue';
import Textarea from '@/components/inputs/Textarea.vue';
import { useHashColor } from '@/useables/useHashColor';

export default defineComponent({
  components: { TextField, Textarea },
  name: 'ProfileSettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'users.my.settings.ProfileSettings';

    const state = reactive({
      name: '',
      email: '',
      avatarUrl: '',
      bio: '',
    });

    const setFields = () => {
      if (!props.profile) return;

      const { name, email, avatarUrl, bio } = props.profile;
      state.name = name;
      state.email = email;
      state.avatarUrl = avatarUrl;
      state.bio = bio;
    };
    onMounted(() => setFields());

    const saveSettings = () => {
      console.log('ProfileSettings.vue > saveSettings', state);
    };

    const imgError = ref('');

    return { t, l10n, ...toRefs(state), useHashColor, saveSettings, imgError };
  },
});
</script>
