<template>
  <Menu customize="w-full max-w-sm">
    <ul class="py-2">
      <li class="p-2">No new notifications</li>
    </ul>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'NotificationMenu',
  components: { Menu },
  setup: () => {},
});
</script>
