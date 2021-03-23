<template>
  <Select v-model="lang" :options="getLangList" preIcon>
    <template v-slot:preIcon>
      <icon-translate />
    </template>
  </Select>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import IconTranslate from '/@vite-icons/mdi/translate.vue';

import Select from './SelectField.vue';
//import { useStore } from '../store';
//import AllMutationTypes from '../store/mutation-types';

export default defineComponent({
  name: 'SetLocaleLang',
  components: { IconTranslate, Select },
  setup: () => {
    //const store = useStore();

    const lang = ref('en'); //store.state.locale.lang
    const getLangList = ref([
      { id: 'en', name: 'English' },
      { id: 'ja', name: '日本語' },
    ]);
    watch(
      () => lang.value,
      (lang) => {
        console.log('SetLocal.vue > setLang', lang);
        //store.commit(AllMutationTypes.SET_Lang, lang);
      }
    );

    return {
      lang,
      getLangList,
    };
  },
});
</script>
