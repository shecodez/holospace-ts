<template>
  <div class="users flex-1 overflow-y-overlay animate-pulse">
    <div class="on-text my-2 ml-5 w-3/5 bg-gray-300 h-4" />
    <ul>
      <li v-for="(item, i) in len" :key="i">
        <div class="py-1 px-4 flex items-center">
          <div class="bg-gray-300 w-9 h-9 rounded-full m-auto"></div>
          <span class="d-none flex-grow ml-4 bg-gray-300 h-4" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserListSkeleton',
  props: {
    len: {
      type: Number,
      default: 3,
    },
  },
});
</script>

<style scoped>
.is-mini .on-text {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
