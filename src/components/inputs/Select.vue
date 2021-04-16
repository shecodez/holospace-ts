<template>
  <TextField :label="label" v-model="localValue" :required="required" :hint="hint" :error="error">
    <slot name="prepend"></slot>
    <select
      class="w-full bg-transparent border-none focus:ring-transparent"
      :class="setSize(size)"
      v-bind="$attrs"
      v-model="localValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :required="required"
    >
      <option v-if="defaultOption" value="">{{ defaultOption }}</option>
      <option v-for="opt in options" :key="opt.id" :value="opt.id" class="dark:bg-gray-800">
        {{ opt.name }}
      </option>
    </select>
  </TextField>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import TextField from './TextField.vue';

export default defineComponent({
  name: 'Select',
  components: { TextField },
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    defaultOption: {
      type: String,
    },
    size: {
      type: String,
      default: '', // sm, lg
    },
    hint: {
      type: String,
      default: '',
    },
    error: {
      type: String,
    },
  },
  setup: (props, context) => {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });

    const setSize = (size: string) => {
      switch (size) {
        case 'lg':
          return 'p-3';
        case 'sm':
          return 'p-1';
        default:
          // normal
          return '';
      }
    };

    return { localValue, setSize };
  },
});
</script>
