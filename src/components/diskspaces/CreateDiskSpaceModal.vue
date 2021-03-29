<template>
  <ModalDialog :isOpen="showModal" :onClose="closeModal" :title="t(`${l10n}.create_disk_space`)">
    <DiskSpaceForm :diskSpaceType="type" :onSubmit="createDiskSpace" :onClose="closeModal" />
  </ModalDialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import ModalDialog from '@/components/ModalDialog.vue';
import DiskSpaceForm from '@/components/diskspaces/DiskSpaceForm.vue';
import { useStore } from '@/store';
import AllMutationTypes from '@/store/mutation-types';
import { DiskSpaceType } from '@/store/interfaces';

export default defineComponent({
  name: 'CreateDiskSpaceModal',
  components: { ModalDialog, DiskSpaceForm },
  props: {
    type: {
      type: String as () => DiskSpaceType,
      required: true,
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'diskSpaces.CreateDiskSpaceModal';

    const store = useStore();

    const showDiskSpaceModal = computed(() => store.state.diskSpaces.showCreateDiskSpaceModal);
    const diskSpaceModalType = computed(() => store.state.diskSpaces.modalDiskSpaceType);
    const showModal = computed(() => showDiskSpaceModal.value && diskSpaceModalType.value === props.type);

    const createDiskSpace = () => {
      console.log(`CreateDiskSpaceModal.vue > submitCreateDiskSpace`);
      //store.commit(AllMutationTypes.CREATE_DiskSpace, diskSpace);
    };

    const closeModal = () => {
      store.commit(AllMutationTypes.SET_CREATE_DiskSpace_MODAL, false);
      store.commit(AllMutationTypes.SET_MODAL_DiskSpace_Type, undefined);
    };

    return { t, l10n, showModal, closeModal, createDiskSpace };
  },
});
</script>
