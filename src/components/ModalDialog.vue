<template>
  <!-- <teleport to="body"> -->
  <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center" v-show="showModal">
    <div ref="modal-backdrop" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div
      ref="modal"
      class="modal-container bg-white dark:bg-gray-800 w-11/12 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto"
      role="dialog"
    >
      <button
        class="modal-close absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        @click="closeModal"
      >
        <icon-close />
        <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
      </button>

      <div class="modal-content py-4 text-left px-6">
        <!-- header -->
        <slot name="header">
          <div v-show="title" class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">{{ title }}</p>
            <button class="modal-close z-50" @click="closeModal">
              <icon-close />
            </button>
          </div>
        </slot>

        <!-- body -->
        <slot></slot>

        <!--Footer-->
        <slot name="footer">
          <!-- <div class="flex justify-end pt-2">
            <button class="px-4 bg-transparent p-2 rounded text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
            <button class="modal-close px-4 bg-indigo-500 p-2 rounded text-white hover:bg-indigo-400">Close</button>
          </div> -->
        </slot>
      </div>
    </div>
  </div>
  <!-- </teleport> -->
</template>

<script lang="ts">
import { watch, ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import IconClose from '/@vite-icons/mdi/close';

import useClickOutsite from '@/useables/useClickOutside';

export default defineComponent({
  name: 'ModalDialog',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  components: { IconClose },
  setup(props) {
    const { t } = useI18n();

    const modal = ref(null);
    const showModal = ref(false);
    const { onClickOutside } = useClickOutsite();

    watch(
      () => props.isOpen,
      (isOpen) => {
        showModal.value = isOpen;
      }
    );

    function closeModal() {
      showModal.value = false;
      props.onClose();
    }

    onClickOutside(modal, () => {
      if (showModal.value === true) {
        closeModal();
      }
    });

    return { t, showModal, closeModal, modal };
  },
});
</script>
