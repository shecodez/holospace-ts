<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
        v-show="showModal"
      >
        <div class="flex item-center justify-center">
          <div
            class="modal relative bg-white shadow-xl w-1/2 p-4 rounded-lg"
            role="dialog"
            ref="modal"
          >
            <button class="absolute right-2 top-2" @click="closeModal">
              <icon-close />
            </button>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { watch, ref } from "vue";
import IconClose from "/@vite-icons/mdi/close.vue";
import useClickOutsite from "../composables/useClickOutside";

const props = {
  isOpen: {
    type: Boolean,
    default: false,
  },
};

const components = {
  IconClose,
};

export default {
  name: "ModalDialog",
  props,
  components,
  setup(props) {
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
    }

    onClickOutside(modal, () => {
      if (showModal.value === true) {
        closeModal();
      }
    });

    return { showModal, closeModal, modal };
  },
};
</script>

<style></style>
