<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <ModalDialog :isOpen="showModal">
    <p class="mb-4">It's over 9000!</p>
    <div class="bg-blue-200 p-4">Blue box</div>
  </ModalDialog>
  <button @click="toggleModal">open modal</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ModalDialog from "./components/ModalDialog.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ModalDialog,
  },
  setup() {
    const showModal = ref(false);

    function toggleModal() {
      showModal.value = !showModal.value;
    }

    return { showModal, toggleModal };
  },
});
</script>

<style></style>
