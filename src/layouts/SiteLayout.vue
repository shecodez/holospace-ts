<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SiteLayout',
  props: {
    view: {
      type: String,
      //required: true,
    },
  },
});
</script>

<style></style>
