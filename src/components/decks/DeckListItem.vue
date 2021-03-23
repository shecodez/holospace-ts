<template>
  <li class="p-2">
    <a :href="`/d/${id}/${ids}`">
      <div class="bg-purple-300 deck w-12 h-12 rounded-full f-center">
        <span>{{ name.charAt(0) }}</span>
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeckListItem',
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    ids: { type: String, required: true },
  },
  setup() {},
});
</script>
