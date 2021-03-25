<template>
  <TextInput ref="inputPasswordEl" v-model="localValue" :label="label" postIcon>
    <template v-slot:postIcon>
      <div @click="toggleShowPW">
        <IconEyeShow v-show="showPW" />
        <IconEyeHide v-show="!showPW" />
      </div>
    </template>
  </TextInput>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import IconEyeHide from '/@vite-icons/mdi/eye';
import IconEyeShow from '/@vite-icons/mdi/eye-off';

import TextInput from '@/components/TextInput.vue';

export default defineComponent({
  name: 'PasswordInput',
  props: {
    label: {
      type: String,
      required: true,
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
    preIcon: {
      type: Boolean,
      default: false,
    },
    postIcon: {
      type: Boolean,
      default: false,
    },
  },
  components: { IconEyeHide, IconEyeShow, TextInput },
  setup: (props, context) => {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });

    const showPW = ref(false);
    const toggleShowPW = () => {
      showPW.value = !showPW.value;
    };
    watch(
      () => showPW.value,
      (showPW) => {
        if (showPW) {
          console.log('PasswordInput.vue set Input type = text');
        }
        console.log('PasswordInput.vue set Input type = password');
      }
    );

    return { localValue, showPW, toggleShowPW };
  },
});
</script>
