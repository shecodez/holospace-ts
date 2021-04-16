<template>
  <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
    <input
      class="hs-toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      type="checkbox"
      :id="id"
      v-model="localValue"
      name="toggle"
    />
    <label
      for="toggle"
      class="hs-toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 bg-opacity-40 cursor-pointer"
    />
  </div>
  <label v-if="label" for="toggle" class="ml-2">{{ label }}</label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Switch',
  props: {
    id: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  setup: (props, context) => {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });

    return { localValue };
  },
});
</script>

<style lang="postcss">
.hs-toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.hs-toggle-checkbox:checked + .hs-toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
}
</style>
