<template>
  <UserTilesSkeleton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UserTilesSkeleton from '@/components/users/UserTilesSkeleton.vue';

export default defineComponent({
  components: { UserTilesSkeleton },
  name: 'DeckCrewTab',
  props: {
    deck: {
      type: Object,
      required: true,
    },
  },
  setup: () => {},
});
</script>
