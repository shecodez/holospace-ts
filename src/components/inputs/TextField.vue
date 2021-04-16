<template>
  <div class="form-group" :class="hint || max ? '' : 'mb-2'">
    <label v-show="label" class="hs-label" :class="error && 'text-error-500'">
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>
    <div
      class="input-group relative w-full flex items-center border rounded"
      :class="error ? 'border-error-500 ring-1 ring-error-500' : 'border-gray-800 dark:border-gray-200'"
    >
      <div class="ml-2"><slot name="prepend"></slot></div>
      <slot>
        <input
          class="flex-1 bg-transparent border-none focus:ring-transparent"
          :class="setSize(size)"
          v-bind="$attrs"
          :type="type"
          v-model="localValue"
          :required="required"
          autocomplete="off"
        />
      </slot>
      <div class="mr-2"><slot name="append"></slot></div>
    </div>
    <div class="text-xs">
      <span v-if="error" class="text-error-500">{{ error }}</span>
      <div v-else class="flex justify-between">
        <slot name="hint">
          <span class="flex-grow">{{ hint }}</span>
        </slot>
        <span v-if="max" :class="lenError">{{ `${charCount}/${max}` }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: 'TextField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
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
    max: {
      type: Number,
    },
    size: {
      type: String, // sm, lg
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

<style lang="postcss">
input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.form-group:focus-within label {
  color: var(--hs-primary);
}
.form-group:focus-within .input-group {
  @apply border-primary-500 ring-1 ring-primary-500;
}
.c-secondary .form-group:focus-within label {
  color: var(--hs-secondary);
}
.c-secondary .form-group:focus-within .input-group {
  @apply border-secondary-500 ring-1 ring-secondary-500;
}

.hs-label {
  @apply text-xs font-semibold uppercase my-2 block;
}
</style>
