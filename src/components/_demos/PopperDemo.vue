<template>
  <button ref="button" class="border px-4 py-2" @click="togglePopper">Open Popover</button>
  <div :class="showPopper ? 'block' : 'hidden'">
    <div ref="overlay" class="absolute w-full h-full z-30 top-0 left-0" />
    <div ref="popper" class="relative z-40">
      <div class="bg-gray-600 p-4 text-white">Hello I am a Popover!</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { createPopper } from '@popperjs/core';

import useClickOutside from '@/useables/useClickOutside';

export default defineComponent({
  name: 'PopoverDemo',
  setup: () => {
    const button = ref();
    const popper = ref();
    const showPopper = ref(false);
    const togglePopper = () => {
      showPopper.value = !showPopper.value;
    };
    watch(
      () => showPopper.value,
      (showPopper) => {
        if (showPopper) {
          createPopper(button.value, popper.value, { placement: 'left' });
        }
      },
      { immediate: true }
    );

    const closePopper = () => {
      showPopper.value = false;
    };

    const { onClickOutside } = useClickOutside();
    onClickOutside(popper, () => {
      if (showPopper.value === true) {
        closePopper();
      }
    });

    return { button, popper, showPopper, togglePopper };
  },
});
</script>
