<template>
  <div ref="target" class="popper inline-flex">
    <button class="popper-activator inline-flex" ref="button" @click="togglePopper">
      <slot name="activator"></slot>
    </button>
    <div :class="showPopper ? 'block' : 'hidden'">
      <!-- <div ref="overlay" class="absolute w-full h-full z-30 top-0 left-0" /> -->
      <div ref="popper" class="overflow-hidden z-20 shadow-lg">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { createPopper } from '@popperjs/core';
import { onClickOutside } from '@vueuse/core';

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export default defineComponent({
  name: 'Popover',
  props: {
    placement: {
      type: String as () => Placement,
      default: true,
    },
  },
  setup: (props) => {
    const button = ref();
    const popper = ref();

    const showPopper = ref(false);
    watch(
      () => showPopper.value,
      (showPopper) => {
        if (showPopper) {
          createPopper(button.value, popper.value, { placement: props.placement });
        }
      }
    );

    const togglePopper = () => {
      showPopper.value = !showPopper.value;
    };

    const closePopper = () => {
      showPopper.value = false;
    };

    const target = ref(); // includes button and popper
    onClickOutside(target, () => {
      if (showPopper.value === true) {
        closePopper();
      }
    });

    return { button, popper, showPopper, togglePopper, target };
  },
});
</script>
