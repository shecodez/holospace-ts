<template>
  <ModalDialog :isOpen="showModal" :onClose="closeModal" :title="t(`${l10n}.edit_disk_space`)">
    <DiskSpaceForm :diskSpace="diskSpace" :onSubmit="createDiskSpace" :onClose="closeModal" />
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
  name: 'EditDiskSpaceModal',
  components: { ModalDialog, DiskSpaceForm },
  props: {
    type: {
      type: String as () => DiskSpaceType,
      required: true,
    },
    diskSpaceId: {
      type: String,
      default: undefined,
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'diskSpaces.EditDiskSpaceModal';

    const store = useStore();

    const showModal = computed(() => store.state.diskSpaces.showEditDiskSpaceModal);

    const diskSpace = computed(() => store.getters.getDiskSpaceById(props.diskSpaceId));

    const editDiskSpace = () => {
      console.log(`EditDiskSpaceModal.vue > submitEditDiskSpace`);
      //store.commit(AllMutationTypes.UPDATE_DiskSpace, diskSpace);
    };

    const closeModal = () => {
      store.commit(AllMutationTypes.SET_EDIT_DiskSpace_MODAL, { isOpen: false, diskSpaceId: props.diskSpaceId });
    };

    return { t, l10n, showModal, closeModal, editDiskSpace, diskSpace };
  },
});
</script>
