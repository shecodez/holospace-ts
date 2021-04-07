<template>
  <div class="input-ctrl-group relative mb-2">
    <label v-show="label" class="text-xs font-medium ml-2" :for="label">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="input-wrapper relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="preIcon"></slot>
      </div>
      <textarea
        class="block w-full rounded bg-transparent focus:ring-primary-500"
        :class="[padL, padR]"
        v-bind="$attrs"
        :rows="rows"
        v-model="localValue"
        :required="required"
        autocomplete="off"
      />
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <slot name="postIcon"></slot>
      </div>
    </div>
    <div class="text-xs ml-2 leading-5">
      <span v-if="error" class="text-error-500">{{ error }}</span>
      <div v-else>
        <slot name="hint"></slot>
        <p v-show="max" class="text-right mr-2" :class="lenError">
          {{ `${cLen}/${max}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TextArea',
  props: {
    label: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default: 3,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    max: {
      type: Number,
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
    postIcon: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props, context) => {
    const { t } = useI18n();

    const cLen = ref(0);

    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });

    watch(
      () => props.modelValue,
      (input) => {
        cLen.value = input.toString().length;
      }
    );

    const lenError = computed(() => {
      let max = props.max || Infinity;
      return cLen.value > max ? 'text-error-500' : '';
    });

    const padL = computed(() => (props.preIcon ? 'pl-10' : ''));
    const padR = computed(() => (props.postIcon ? 'pr-10' : ''));

    return {
      t,
      localValue,
      cLen,
      lenError,
      padL,
      padR,
    };
  },
});
</script>

<style>
.input-ctrl-group:focus-within label {
  color: var(--hs-primary);
}
.c-secondary .input-ctrl-group:focus-within label {
  color: var(--hs-secondary);
}
</style>
