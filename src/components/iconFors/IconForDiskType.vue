<template>
  <div :class="iconColor">
    <i-ph-chats v-show="iconFor === 'TEXT'" />
    <i-mdi-microphone v-show="iconFor === 'VOIP'" />
    <i-heroicons-solid-cube-transparent v-show="iconFor === 'HOLO'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForDiskType',
  props: {
    iconFor: {
      type: String, //String as () => DiskSpaceType
      required: true,
    },
    iconColor: {
      type: String,
      default: '',
    },
  },
  setup: () => {},
});
</script>
