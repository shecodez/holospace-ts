<template>
  <Select ref="selectLocaleEl" v-model="locale" label="language" :options="getLangList" preIcon noLabel>
    <template v-slot:preIcon>
      <i-mdi-translate />
    </template>
  </Select>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import Select from './SelectField.vue';
import { useStore } from '@/store';
import AllMutationTypes from '@/store/mutation-types';

export default defineComponent({
  name: 'SetLocaleLang',
  components: { Select },
  setup: () => {
    const { locale } = useI18n();

    const store = useStore();

    const getLangList = ref([
      { id: 'en', name: 'English' },
      { id: 'ja', name: '日本語' },
    ]);
    watch(
      () => locale.value,
      (local) => {
        store.commit(AllMutationTypes.SET_Locale, local);
      }
    );

    return {
      locale,
      getLangList,
    };
  },
});
</script>
