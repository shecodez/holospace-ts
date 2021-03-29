<template>
  <div ref="expander" class="expander" :class="isOpened ? 'expander--opened' : 'expander--closed'">
    <div class="expander-heading h-12">
      <div class="flex items-center h-full mx-2">
        <slot name="header">
          <span class="uppercase flex-1 truncate mx-2">{{ title }}</span>
        </slot>
        <button class="mr-4" @click="toggleExpander">
          <i-mdi-chevron-up v-if="isOpened" />
          <i-mdi-chevron-down v-else />
        </button>
      </div>
    </div>
    <div class="expander-content mb-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'Expander',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
  setup: (props) => {
    const expander = ref();
    const isOpened = ref(false);
    watch(
      () => props.isOpen,
      (isOpen) => {
        isOpened.value = isOpen;
      }
    );
    const toggleExpander = () => {
      isOpened.value = !isOpened.value;
    };

    return { expander, isOpened, toggleExpander };
  },
});
</script>

<style scoped>
.expander.expander--opened .expander-content {
  display: block;
}
.expander.expander--closed .expander-content {
  display: none;
}
</style>
