<template>
  <div class="absolute left-14 top-4">
    <router-link to="/">
      <span class="sr-only">HoloSpace Brand</span>
      <img class="h-14 w-auto svg-img-primary" src="@/assets/hs-cube.svg" alt="HoloSpace Brand" />
    </router-link>
  </div>
  <div
    class="auth-layout min-w-screen min-h-screen flex items-center justify-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div
      class="bg-gray-800 bg-opacity-50 text-gray-100 rounded-2xl shadow-xl w-full overflow-hidden"
      style="max-width: 600px"
    >
      <div class="md:flex w-full">
        <div class="hidden md:flex flex-col justify-center w-2/5 bg-white bg-opacity-80">
          <img src="@/assets/images/logos/hs-logo.png" alt="logo" />
        </div>

        <div class="w-full md:w-3/5 py-10 px-5 md:px-10">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  components: { Header },
  name: 'AuthLayout',
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const bgImage = ref('');
    const setAuthBgImage = () => {
      const imageUrls = ['../src/assets/images/fire-planet-ice_1920x1200.jpg'];
      bgImage.value = imageUrls[(imageUrls.length * Math.random()) | 0];
    };
    onMounted(() => setAuthBgImage());

    return { bgImage };
  },
});
</script>

<style scoped>
.auth-layout {
  background-size: cover;
  background-position: center;
}
</style>
