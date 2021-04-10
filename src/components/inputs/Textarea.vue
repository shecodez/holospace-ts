<template>
  <TextField :label="label" v-model="localValue" :required="required" :max="max" :hint="hint" :error="error">
    <slot name="prepend"></slot>
    <textarea
      class="flex-1 bg-transparent border-none focus:ring-transparent"
      :class="setSize(size)"
      v-bind="$attrs"
      :rows="rows"
      v-model="localValue"
      :required="required"
      autocomplete="off"
    />
    <slot name="append"></slot>
  </TextField>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue';

import TextField from './TextField.vue';

export default defineComponent({
  name: 'Textarea',
  components: { TextField },
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
    },
    rows: {
      type: Number,
      default: 3,
    },
    required: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
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

    const charCount = ref(0);
    const lenError = ref('');
    watch(
      () => props.modelValue,
      (input) => {
        charCount.value = input.toString().length;
        let max = props.max || Infinity;
        lenError.value = charCount.value > max ? 'text-error-500' : '';
      }
    );

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

    return { localValue, charCount, lenError, setSize };
  },
});
</script>
