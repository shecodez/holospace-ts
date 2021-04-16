<template>
  <div class="flex flex-wrap space-x-3">
    <div v-for="language in languages" :key="language.id" class="flex-2">
      <div
        class="relative bg-green-300 rounded-full f-center"
        :class="`w-${getPercent(language.id)} h-${getPercent(language.id)}`"
      />
      <span class="">{{ language.name }} {{ getPercent(language.id) }}%</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    const languages = [
      { id: SUPPORTED_LOCALE.ENGLISH, name: 'English', speakers: 33 },
      { id: SUPPORTED_LOCALE.JAPANESE, name: '日本語', speakers: 18 },
      { id: SUPPORTED_LOCALE.KOREAN, name: '한국어', speakers: 22 },
      { id: SUPPORTED_LOCALE.CHINESE_SIMPLIFIED, name: '简体中文', speakers: 11 },
      { id: SUPPORTED_LOCALE.CHINESE_TRADITIONAL, name: '繁體中文', speakers: 7 },
      { id: SUPPORTED_LOCALE.NORWEGIAN, name: 'Norsk', speakers: 5 },
      { id: SUPPORTED_LOCALE.SPANISH, name: 'Español', speakers: 8 },
      { id: SUPPORTED_LOCALE.DUTCH, name: 'Nederlands', speakers: 3 },
      { id: SUPPORTED_LOCALE.PORTUGUESE, name: 'Brazilian', speakers: 1 },
      { id: SUPPORTED_LOCALE.FRENCH, name: 'Français', speakers: 19 },
      { id: SUPPORTED_LOCALE.SWEDISH, name: 'Svenska', speakers: 14 },
      { id: SUPPORTED_LOCALE.UKRAINIAN, name: 'Українська', speakers: 2 },
      { id: SUPPORTED_LOCALE.GERMAN, name: 'Deutsch', speakers: 26 },
    ];

    const totalSpeakers = languages.reduce((sum, { speakers }) => sum + speakers, 0);

    const getPercent = (languageId: SUPPORTED_LOCALE) => {
      const speakers = languages.find((x) => x.id === languageId)?.speakers;
      return Math.round((Number(speakers) / totalSpeakers) * 100);
    };

    return { languages, totalSpeakers, getPercent };
  },
});
</script>
