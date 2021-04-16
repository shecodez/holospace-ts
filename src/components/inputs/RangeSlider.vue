<template>
  <div class="hs-slider relative w-full">
    <input
      class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
      type="range"
      v-model="localValue"
      :step="1"
      :min="min"
      :max="max"
      @input="handleInput"
      :disabled="disabled"
    />
    <div class="relative z-10 h-2">
      <div class="track absolute z-10 inset-0 rounded-md" :class="`bg-${trackColor}`" />
      <div
        class="fill absolute z-20 inset-y-0 rounded-md"
        :class="`bg-${progressColor}`"
        :style="`left: ${(min / (max - min)) * 100}%; right: ${100 - ((localValue - min) / (max - min)) * 100}%`"
      />
      <div v-if="noLabel" class="thumb absolute z-30 w-2 h-5 bg-primary-50" :style="`left: ${localValue}%`" />
      <div
        v-else
        class="thumb absolute z-30 w-10 h-10 border-4 rounded-full bg-gray-400 dark:bg-gray-600 f-center"
        :class="localValue > 35 ? (localValue > 80 ? 'border-red-400' : 'border-yellow-400') : 'border-green-400'"
        :style="`left: ${localValue}%`"
      >
        <span class="text-xs font-bold">{{ localValue }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Slider',
  props: {
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    trackColor: {
      type: String,
      default: 'gray-400',
    },
    progressColor: {
      type: String,
      default: 'primary-500',
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup: (props, context) => {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });

    const handleInput = () => {
      let value = ((Number(props.modelValue) - props.min) / (props.max - props.min)) * 100;
      localValue.value = Math.round(value);
    };

    return { localValue, handleInput };
  },
});
</script>

<style>
.hs-slider input[type='range']::-webkit-slider-thumb {
  pointer-events: all;
  width: 2.5rem;
  height: 2.5rem;
  -webkit-appearance: none;
  /* @apply w-6 h-6 appearance-none pointer-events-auto; */
}

.hs-slider .thumb {
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
}
</style>
