<template>
  <ul class="border py-2 w-72">
    <li v-for="role in roles" :key="role.id" class="py-3 px-4 flex hover:bg-gray-500">
      <h4 class="flex font-medium space-x-2 w-4/5 leading-4">
        <icon-for-role :iconFor="role.id" />
        <span>{{ role.name }}</span>
      </h4>
      <div class="grid grid-flow-col grid-cols-3 gap-3">
        <IconForCRUD :class="{ invisible: !role.create }" iconFor="create" />
        <IconForCRUD :class="{ invisible: !role.update }" iconFor="update" />
        <IconForCRUD :class="{ invisible: !role.delete }" iconFor="delete" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IconForRole from '@/components/iconFors/IconForRole.vue';
import IconForCRUD from '@/components/iconFors/IconForCRUD.vue';

export default defineComponent({
  name: 'RoleList',
  components: { IconForRole, IconForCRUD },
  setup: () => {
    const roles = [
      { id: 'deck', name: 'Deck', create: true, update: true, delete: true },
      { id: 'diskspace', name: 'DiskSpace', create: true, update: true, delete: true },
      { id: 'permission', name: 'Permission', create: true, update: true, delete: true },
      { id: 'crew_member', name: 'Crew Member', create: true, update: true, delete: true },
      { id: 'transfer_crew_member', name: 'Transfer Crew Member', update: true },
      { id: 'prune_crew_members', name: 'Prune Crew', delete: true },
      { id: 'timeout_crew_member', name: 'Timeout Crew Member', delete: true },
      { id: 'bot', name: 'Bot', create: true },
      { id: 'holokey', name: 'HoloKey', create: true, update: true, delete: true },
      { id: 'message', name: 'Message', delete: true },
    ];

    return { roles };
  },
});
</script>
