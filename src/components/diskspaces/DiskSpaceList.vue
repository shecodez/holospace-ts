<template>
  <Expander :isOpen="isOpen" :key="`${type}-ds-expander`">
    <template v-slot:header>
      <button class="p-2 rounded-full" @click="showCreateDiskSpaceModal">
        <i-mdi-plus />
        <span class="sr-only">add {{ type }} space</span>
      </button>
      <span class="flex-1 truncate mx-2">{{ t(`${l10n}.${type}_space`) }}</span>
    </template>

    <ul>
      <template v-for="disk in diskSpaces" :key="disk.id">
        <DiskSpaceListItem v-bind="disk" />
      </template>
    </ul>
  </Expander>
  <CreateDiskSpaceModal :type="type" />
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import Expander from '@/components/Expander.vue';
import DiskSpaceListItem from '@/components/diskspaces/DiskSpaceListItem.vue';
import CreateDiskSpaceModal from '@/components/diskspaces/CreateDiskSpaceModal.vue';

import { useStore } from '@/store';
import { DiskSpaceType } from '@/store/interfaces';
import AllMutationTypes from '@/store/mutation-types';

export default defineComponent({
  name: 'DiskSpaceList',
  components: { Expander, DiskSpaceListItem, CreateDiskSpaceModal },
  props: {
    type: {
      type: String as () => DiskSpaceType,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'diskSpaces.DiskSpaceList';

    const store = useStore();

    const diskSpaces = computed(() => store.getters.getDiskSpacesByType(props.type as DiskSpaceType));

    const showCreateDiskSpaceModal = () => {
      store.commit(AllMutationTypes.SET_MODAL_DiskSpace_Type, props.type);
      store.commit(AllMutationTypes.SET_CREATE_DiskSpace_MODAL, true);
    };

    // const setModal = () => {
    //   store.commit(AllMutationTypes.SET_Disk_SETTINGS_MODAL, true);
    // };

    return {
      t,
      l10n,
      diskSpaces,
      showCreateDiskSpaceModal,
    };
  },
});
</script>
