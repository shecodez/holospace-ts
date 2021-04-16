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
    <div class="flex w-full">
      <template v-for="(v, i) in 4" :key="i">
        <div class="w-1/4 px-1">
          <div
            class="h-1 rounded-xl transition-colors"
            :class="
              i < score ? (score <= 2 ? 'bg-red-400' : score <= 3 ? 'bg-yellow-400' : 'bg-green-500') : 'bg-gray-200'
            "
          ></div>
        </div>
      </template>
    </div>
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

    const score = ref(0);
    watch(
      () => localValue.value,
      (input) => {
        score.value = input.toString().length;
      }
    );

    return { localValue, inputPasswordEl, toggleShowPassword, inputType, score };
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
