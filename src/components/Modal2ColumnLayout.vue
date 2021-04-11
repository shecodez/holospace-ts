<template>
  <div class="modal-2-col-layout flex w-full h-full overflow-hidden">
    <div class="w-1/3 bg-gray-300 bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 md:pt-20">
      <div class="flex flex-col h-full md:w-2/5 md:float-right overflow-hidden">
        <div class="py-4 mx-2 flex items-center">
          <slot name="leftcolheader"></slot>
        </div>

        <slot name="search"></slot>
        <div class="flex-grow overflow-y-overlay">
          <slot name="leftcolbody"></slot>
        </div>

        <div class="flex items-center justify-between py-4 mx-2 border-t hs-border">
          <slot name="leftcolfooter"></slot>
        </div>
      </div>
    </div>

    <div
      class="flex w-full md:w-2/3 bg-gray-400 bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-80 md:pt-20 overflow-hidden"
    >
      <div class="flex flex-col h-full w-full md:w-2/3 md:mx-4">
        <div class="py-4 mx-2">
          <slot name="rightcolheader"></slot>
        </div>
        <div class="flex-1 overflow-y-scroll">
          <slot></slot>
        </div>
      </div>
      <div class="absolute right-0 md:static my-5 mx-4">
        <button class="flex flex-col items-center text-white" @click="closeModal">
          <i-mdi-close />
          <span class="text-sm">{{ t('ModalDialog.esc') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Modal2ColumnLayout',
  setup: () => {
    const { t } = useI18n();

    return { t };
  },
});
</script>

<style lang="postcss" scoped>
.modal-2-col-layout li:hover {
  border-color: var(--hs-primary);
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.modal-2-col-layout li.active > .ribbon-tail:before {
  width: 2.5rem;
  background: rgba(235, 235, 235, 0.1);
}
.hs-border {
  @apply border-black border-opacity-10 dark:border-white dark:border-opacity-10;
}
</style>
