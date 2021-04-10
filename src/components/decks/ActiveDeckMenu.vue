<template>
  <Menu customize="w-40">
    <ul class="py-2">
      <li class="p-2 hover:bg-gray-600">Send HoloKey</li>
      <li class="p-2 hover:bg-gray-600">Contact Captain</li>
      <li class="p-2 hover:bg-gray-600">Edit Deck</li>
      <li class="p-2 text-red-500">Leave Deck</li>
    </ul>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'ActiveDeckMenu',
  components: { Menu },
  setup: () => {},
});
</script>
