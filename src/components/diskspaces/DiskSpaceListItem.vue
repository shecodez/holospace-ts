<template>
  <div
    class="disk-space relative p-2 border-l-4 hover:bg-gradient-to-r from-gray-600"
    :class="isActive(id) ? 'active font-medium border-primary-500 bg-gradient-to-r' : ' border-transparent'"
  >
    <div class="ribbon-tail flex justify-between mx-2">
      <router-link :to="`/d/${ownerId}/${id}`">
        <span class="truncate mr-2">{{ name }}</span>
      </router-link>
      <div class="actions flex">
        <button class="mx-2">
          <i-mdi-cog />
          <span class="sr-only">disk space settings</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'DiskSpaceListItem',
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    ownerId: { type: String, required: true },
  },
  setup: () => {
    const route = useRoute();

    const isActive = (diskSpaceId: string) => {
      return diskSpaceId === route.params.diskSpaceId.toString();
    };

    return { route, isActive };
  },
});
</script>

<style scoped>
.disk-space:hover {
  border-color: var(--hs-primary);
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.disk-space.active > .ribbon-tail:before {
  width: 2.5rem;
  background: rgba(235, 235, 235, 0.1);
}
.disk-space .actions {
  visibility: hidden;
}
/* .disk-space.active .actions {
  visibility: visible;
} */
.disk-space:hover .actions {
  visibility: visible;
}
</style>
