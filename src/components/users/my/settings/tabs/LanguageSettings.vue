<template>
  <div class="relative grid grid-flow-col overflow-y-overlay">
    <ul>
      <li v-for="lang in languages" :key="lang.id">
        <div v-if="lang.header" class="border-t hs-border">
          <h3 class="hs-h3 py-1">{{ lang.header }}</h3>
        </div>
        <div
          v-else
          class="hs-bg-opacity-80 px-2 py-1 hover:bg-gray-600 border-l-4 hover:border-primary-500"
          :class="
            lang.id === locale
              ? 'bg-gray-400 dark:bg-gray-600 border-l-4 border-primary-500'
              : 'border-l-4 border-transparent'
          "
        >
          <label class="inline-flex items-center mt-1 cursor-pointer">
            <input type="radio" name="lang" class="h-5 w-5 text-primary-400" :checked="lang.id === locale" />
            <span class="ml-2 hs-h4">{{ lang.name }}</span>
          </label>
        </div>
      </li>
    </ul>

    <div ref="chartDivEl" class="hidden md:flex items-center bg-gray-400 dark:bg-gray-600">
      <span class="absolute top-0 right-2">{{ `width: ${width} | height: ${height}` }}</span>
      <BubbleChart :data="formatData" packed />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

import BubbleChart from '@/components/charts/BubbleChart.vue';

export enum SUPPORTED_LOCALE {
  ENGLISH = 'en',
  JAPANESE = 'ja',
  KOREAN = 'ko',
  CHINESE_SIMPLIFIED = 'zh-TW',
  CHINESE_TRADITIONAL = 'zh-CN',
  NORWEGIAN = 'no-NO',
  SPANISH = 'es',
  DUTCH = 'nl-NL',
  PORTUGUESE = 'pt-BR',
  FRENCH = 'fr',
  SWEDISH = 'sv-SE',
  UKRAINIAN = 'uk-UA',
  GERMAN = 'de',
}

export default defineComponent({
  components: { BubbleChart },
  name: 'LanguageSettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const { locale } = useI18n();

    const chartDivEl = ref(null);
    const { width, height } = useElementSize(chartDivEl);

    const languages = ref([
      { id: 'north_america', header: 'North America' }, // TODO: create Region.NORTH_AMERICA Enum
      { id: SUPPORTED_LOCALE.ENGLISH, name: 'English (US)', speakers: 33 },
      { id: 'asia', header: 'Asia' },
      { id: SUPPORTED_LOCALE.JAPANESE, name: '日本語', speakers: 18 },
      { id: SUPPORTED_LOCALE.KOREAN, name: '한국어', speakers: 22 },
      { id: SUPPORTED_LOCALE.CHINESE_SIMPLIFIED, name: '简体中文', speakers: 11 },
      { id: SUPPORTED_LOCALE.CHINESE_TRADITIONAL, name: '繁體中文', speakers: 7 },
      { id: 'europe', header: 'Europe' },
      { id: SUPPORTED_LOCALE.NORWEGIAN, name: 'Norsk', speakers: 5 },
      { id: SUPPORTED_LOCALE.DUTCH, name: 'Nederlands', speakers: 3 },
      { id: SUPPORTED_LOCALE.FRENCH, name: 'Français', speakers: 19 },
      { id: SUPPORTED_LOCALE.SWEDISH, name: 'Svenska', speakers: 14 },
      { id: SUPPORTED_LOCALE.UKRAINIAN, name: 'Українська', speakers: 2 },
      { id: SUPPORTED_LOCALE.GERMAN, name: 'Deutsch', speakers: 22 },
      { id: 'latin_america', header: 'Latin America' },
      { id: SUPPORTED_LOCALE.SPANISH, name: 'Español', speakers: 8 },
      { id: SUPPORTED_LOCALE.PORTUGUESE, name: 'Brazilian', speakers: 1 },
    ]);

    // for D3 to correctly parse the data it has to be in a specific format.
    const formatData = computed(() => {
      return {
        name: 'Top Level',
        children: languages.value
          .filter((x) => !!x.name) // filter out headers
          .map((language) => ({
            ...language,
            size: language.speakers,
            parent: 'Top Level',
          })),
      } as any; // TODO: figure out this type
    });

    return { locale, languages, formatData, width, height };
  },
});

//const totalSpeakers = languages.reduce((sum, { amount }) => sum + amount, 0);
</script>
