<template>
  <div class="relative grid grid-flow-col overflow-y-overlay">
    <ul>
      <li v-for="lang in languages" :key="lang.id">
        <div v-if="lang.header" class="">
          <h3 class="hs-h3">{{ lang.header }}</h3>
        </div>
        <div
          v-else
          class="hs-bg-opacity-80 p-2 hover:bg-gray-600 border-l-4 hover:border-primary-500"
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

    <div ref="resizeDivEl" class="hidden md:flex items-center h-full w-full bg-gray-400 dark:bg-gray-600">
      <span class="absolute top-0 right-2">{{ `width: ${width} | height: ${height}` }}</span>
      <svg ref="chartSvgEl" width="500" height="500">
        <g
          class="lang"
          v-for="node in d3Nodes.children"
          :key="node.data.id"
          :style="{ transform: `translate(${node.x}px, ${node.y}px)` }"
        >
          <circle class="lang__circle" :r="node.r" :fill="useHashColor(node.data.name)" />
          <text class="lang__label">{{ node.data.name }}</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import { hierarchy, pack } from 'd3';
import { useI18n } from 'vue-i18n';

//import useChart from '@/use/chart';
import { useHashColor } from '@/useables/useHashColor';

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
  name: 'LanguageSettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const { locale } = useI18n();

    const resizeDivEl = ref(null);
    const chartSvgEl = ref(null); // <SVGSVGElement>
    const { width, height } = useElementSize(resizeDivEl);

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
      { id: SUPPORTED_LOCALE.PORTUGUESE, name: 'Brazilian', speakers: 1 },
      { id: SUPPORTED_LOCALE.FRENCH, name: 'Français', speakers: 19 },
      { id: SUPPORTED_LOCALE.SWEDISH, name: 'Svenska', speakers: 14 },
      { id: SUPPORTED_LOCALE.UKRAINIAN, name: 'Українська', speakers: 2 },
      { id: SUPPORTED_LOCALE.GERMAN, name: 'Deutsch', speakers: 22 },
      { id: 'latin_america', header: 'Latin America' },
      { id: SUPPORTED_LOCALE.SPANISH, name: 'Español', speakers: 8 },
    ]);

    // for D3 to correctly parse the data it has to be in a specific format.
    const formattedData = computed(() => {
      return {
        name: 'Top Level',
        children: languages.value
          .filter((l) => !!l.name)
          .map((language) => ({
            ...language,
            size: language.speakers,
            parent: 'Top Level',
          })),
      };
    });

    const d3Nodes = computed(() => {
      // Generate a D3 hierarchy

      const rootHierarchy = hierarchy(formattedData.value)
        .sum((d) => d.size)
        .sort((a, b) => {
          return b.value! - a.value!;
        });

      // Pack the circles inside the viewbox
      return pack().size([500, 500]).padding(10)(rootHierarchy);
    });

    return { locale, languages, resizeDivEl, chartSvgEl, width, height, d3Nodes, useHashColor };
  },
});

//const totalSpeakers = languages.reduce((sum, { amount }) => sum + amount, 0);
</script>

<style scoped>
svg {
  display: block;
  margin: 0 auto;
}

.lang {
  text-anchor: middle;
}
.lang__label {
  fill: #fff;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
