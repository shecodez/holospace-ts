<template>
  <div class="badge-container relative inline-block">
    <slot></slot>
    <span
      v-show="showBadge"
      class="badge text-xs px-1 rounded-full font-semibold absolute -right-3 top-0 shadow-md"
      :class="`bg-${color}`"
    >
      {{ limitMax }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    content: {
      type: [String, Number],
      default: '',
    },
    color: {
      type: String,
      default: 'primary-500',
    },
    max: {
      type: Number,
      default: 99,
    },
  },
  setup: (props) => {
    const showBadge = ref(false);
    onMounted(() => (showBadge.value = parseInt(props.content.toString()) > 0));

    const limitMax = ref(props.content);
    onMounted(() => {
      if (parseInt(props.content.toString()) > props.max) {
        limitMax.value = `${props.max}+`;
      }
    });

    return { showBadge, limitMax };
  },
});
</script>
