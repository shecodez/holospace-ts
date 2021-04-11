<template>
  <TextField ref="inputPasswordEl" v-model="localValue" :label="label" :type="type" :size="size">
    <template v-slot:append>
      <div @click="toggleShowPassword" class="text-gray-300 hover:text-white cursor-pointer">
        <i-mdi-eye v-if="inputType === 'text'" />
        <i-mdi-eye-off v-else />
      </div>
    </template>
  </TextField>

  <div v-show="showMeter" class="pw-str-meter mx-2" :class="passwordStrength">
    <svg
      v-for="i in 4"
      :key="i"
      :class="`pw-strength-${i}`"
      preserveAspectRatio="none"
      :data-strength="i"
      viewBox="0 0 2 1"
    >
      <rect width="100%" height="100%"></rect>
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

import TextField from '@/components/inputs/TextField.vue';
import { PasswordStrength } from '@/store/interfaces';

export default defineComponent({
  name: 'PasswordField',
  components: { TextField },
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'password',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    size: {
      type: String,
    },
    showMeter: {
      type: Boolean,
      default: false,
    },
    passwordStrength: {
      type: String as () => PasswordStrength,
      default: PasswordStrength.VERY_WEAK,
    },
  },

  setup: (props, context) => {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });

    const inputPasswordEl = ref('');
    const inputType = ref(props.type);
    const toggleShowPassword = () => {
      const type =
        (inputPasswordEl as any).value.$el.querySelector('input').getAttribute('type') === 'password'
          ? 'text'
          : 'password';
      (inputPasswordEl as any).value.$el.querySelector('input').setAttribute('type', type);
      inputType.value = type;
    };

    return { localValue, inputPasswordEl, toggleShowPassword, inputType };
  },
});
</script>

<style scoped>
.pw-str-meter {
  color: rgb(175, 175, 175);
  display: flex;
  height: 0.25rem;
}
.pw-str-meter svg {
  fill: currentColor;
  height: 100%;
  padding: 0 0.25%;
  transition: all 0.6s ease-in-out;
  width: 25%;
}
</style>