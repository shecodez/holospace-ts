<template>
  <!-- TODO: make this DRY -->
  <SideDrawer v-if="useDrawer">
    <template v-slot:header>
      <ActiveDeck />
    </template>
    <div class="flex-grow overflow-y-overlay">
      <div class="grid grid-cols-1 divide-y divide-white divide-opacity-10">
        <DiskSpaceList :type="type.TEXT" />
        <DiskSpaceList :type="type.VOIP" />
        <DiskSpaceList :type="type.HOLO" />
      </div>
    </div>
  </SideDrawer>
  <SidePanel v-else>
    <template v-slot:header>
      <ActiveDeck />
    </template>
    <div class="flex-grow overflow-y-overlay">
      <div class="grid grid-cols-1 divide-y divide-white divide-opacity-10">
        <DiskSpaceList :type="DiskSpaceType.TEXT" :isOpen="isOpen.TEXT" />
        <DiskSpaceList :type="DiskSpaceType.VOIP" :isOpen="isOpen.VOIP" />
        <DiskSpaceList :type="DiskSpaceType.HOLO" :isOpen="isOpen.HOLO" />
      </div>
    </div>
  </SidePanel>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import ActiveDeck from '@/components/decks/ActiveDeck.vue';
import SidePanel from '@/components/panels/SidePanel.vue';
import SideDrawer from '@/components/panels/SideDrawer.vue';
import DiskSpaceList from './DiskSpaceList.vue';
import { useStore } from '@/store';
import { DiskSpaceType } from '@/store/interfaces';

export default defineComponent({
  name: 'DiskSpaceCtrl',
  components: { SidePanel, SideDrawer, ActiveDeck, DiskSpaceList },
  props: {
    useDrawer: {
      type: Boolean,
      default: false,
    },
  },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const isLoading = computed(() => store.state.diskSpaces.isLoading);

    const diskSpace = computed(() => store.state.diskSpaces.activeDiskSpace);
    const isOpen = reactive({
      TEXT: true,
      VOIP: true,
      HOLO: true,
    });
    watch(
      () => diskSpace.value,
      (diskSpace) => {
        isOpen.TEXT = diskSpace?.type === DiskSpaceType.TEXT;
        isOpen.VOIP = diskSpace?.type === DiskSpaceType.VOIP;
        isOpen.HOLO = diskSpace?.type === DiskSpaceType.HOLO;
      },
      { immediate: true }
    );

    return {
      t,
      isLoading,
      DiskSpaceType,
      isOpen,
    };
  },
});
</script>
