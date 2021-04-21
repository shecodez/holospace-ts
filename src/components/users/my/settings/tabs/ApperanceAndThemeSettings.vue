<template>
  <div class="mb-8">
    <h3 class="text-xs font-bold uppercase pt-2 pb-4">Background Image</h3>
    <div class="relative">
      <div class="w-full max-h-64 bg-gray-900 rounded border-4 overflow-hidden">
        <img src="@/assets/images/flat-mountains_1920x1080.jpg" alt="Background Image" />
      </div>
      <div class="absolute -bottom-8 right-8">
        <button class="bg-primary-500 w-16 h-16 rounded-full m-2 f-center shadow-xl border-2 border-dashed">
          <i-mdi-arrow-up-bold-hexagon-outline class="text-2xl text-white" />
          <span class="sr-only">Upload</span>
        </button>
      </div>
    </div>

    <h3 class="text-xs font-bold uppercase py-4 mt-2">Background Gradient</h3>
    <div class="flex items-center justify-between mb-4 text-sm">
      <span class="capitalize font-medium">No Background Gradient</span>
      <button>{{ noBgGradient }}</button>
    </div>
    <div class="overflow-hidden">
      <div class="h-24 hs-bg-gradient" :class="noBgGradient ? 'disabled' : ''"></div>
    </div>
    <button :disabled="noBgGradient" class="btn btn-primary mt-4">Edit Background Gradient</button>
  </div>

  <div class="my-8 border-t hs-border">
    <h3 class="text-xs font-bold uppercase py-4">Theme colors</h3>

    <ul class="grid grid-flow-col grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-4">
      <li v-for="c in themeColors" :key="c.id">
        <div class="hs-theme-color-preview relative h-24 w-full flex">
          <div class="hs-bg-opacity-80 hs-fixed" :class="`bg-${c.id}-100 dark:bg-${c.id}-900`" />
          <div class="hs-bg-opacity-80 hs-side" :class="`bg-${c.id}-300 dark:bg-${c.id}-700`">
            <div class="w-full h-3" :class="`bg-${c.id}-300 dark:bg-${c.id}-700`" />
          </div>
          <div class="hs-bg-opacity-80 hs-stretch" :class="`bg-${c.id}-400 dark:bg-${c.id}-600`">
            <div class="w-full h-3" :class="`bg-${c.id}-400 dark:bg-${c.id}-600`" />
          </div>
          <div class="hs-bg-opacity-80 hs-meta" :class="`bg-${c.id}-200 dark:bg-${c.id}-800`">
            <div class="w-full h-3" :class="`bg-${c.id}-200 dark:bg-${c.id}-800`" />
          </div>
        </div>

        <label class="inline-flex items-center mt-3">
          <input type="radio" name="color" class="form-radio h-5 w-5 text-primary-400" :checked="c.checked" />
          <span class="ml-2 dark:text-white capitalize">{{ c.name }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

enum THEME_COLOR {
  GRAY = 'gray',
  GOLD = 'yellow',
  BLUE = 'blue',
  ROSE = 'pink',
}

export default defineComponent({
  name: 'ApperanceAndThemeSettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'users.my.options.tabs.ApperanceAndThemeSettings';

    const noBgGradient = ref(true);
    // profile { backgroundImageUrl, backgroundGradient, themeColor, theme, font, spacing }
    // font: [12, 14, 16, 18, 20, 24] default 16px
    // spacing: [0, 4, 8, 16, 24] default 16px
    const themeColors = [
      { id: THEME_COLOR.GRAY, name: 'gray (default)', checked: true },
      { id: THEME_COLOR.BLUE, name: 'blue', checked: false },
      { id: THEME_COLOR.ROSE, name: 'pink', checked: false },
      { id: THEME_COLOR.GOLD, name: 'gold', checked: false },
    ];

    return { t, l10n, noBgGradient, themeColors };
  },
});
</script>

<style lang="postcss">
.hs-bg-opacity-80 {
  @apply bg-opacity-80 dark:bg-opacity-80;
}
.hs-fixed {
  @apply w-2/12 h-full;
}
.hs-side {
  @apply w-4/12 h-full;
}
.hs-stretch {
  @apply w-full h-full;
}
.hs-meta {
  @apply w-4/12 h-full flex flex-col-reverse;
}
.hs-bg-gradient {
  background-image: linear-gradient(90deg, rgba(77, 77, 255, 0.6) 10%, rgba(131, 129, 255, 0.6));
}
.dark .hs-bg-gradient {
  background-image: linear-gradient(90deg, rgba(255, 77, 77, 0.6) 10%, rgba(255, 129, 131, 0.6));
}
</style>
