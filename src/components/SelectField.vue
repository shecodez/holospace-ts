<template>
  <div class="select-ctrl-group relative">
    <label v-show="label && !noLabel" class="text-xs font-medium ml-2" :for="label">
      {{ t(`${label}`) }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="preIcon"></slot>
      </div>
      <select
        class="block w-full bg-transparent rounded"
        :class="pl"
        v-bind="$attrs"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        :required="required"
      >
        <option v-for="opt in options" :key="opt.id" :value="opt.id">
          {{ opt.name }}
        </option>
      </select>
    </div>

    <div class="text-xs ml-2 leading-5">
      <span v-if="error" class="text-red-500">{{ error }}</span>
      <div v-else>
        <slot name="hint"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'SelectField',
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    preIcon: {
      type: Boolean,
      default: false,
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
    //post-icon
  },
  setup: (props) => {
    const { t } = useI18n();

    const pl = computed(() => (props.preIcon ? 'pl-10' : ''));

    return {
      t,
      pl,
    };
  },
});
</script>

<style>
.select-ctrl-group:focus-within label {
  color: rgb(99, 102, 241);
}
</style>
