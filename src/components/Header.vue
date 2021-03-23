<template>
  <header>
    <div class="relative bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">HoloSpace Brand</span>
              <img
                class="h-14 w-auto svg-img-primary"
                src="../assets/hs-cube.svg"
                alt="HoloSpace Brand"
              />
            </a>
          </div>

          <nav class="hidden md:flex space-x-10">
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div class="grid grid-flow-col gap-4">
              <ToggleTheme />
              <div class="btn border rounded-full">
                <router-link to="/d/1/1">Open App</router-link>
              </div>
              <div class="btn btn-primary">
                <router-link to="/login">Login</router-link>
              </div>
              <SetLocaleLang />
            </div>
          </div>
        </div>
      </div>

      <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SetLocaleLang from './SetLocaleLang.vue';
import ToggleTheme from './ToggleTheme.vue';

export default defineComponent({
  name: 'Header',
  components: { ToggleTheme, SetLocaleLang },
});
</script>

<style>
/* filter: https://codepen.io/sosuke/pen/Pjoqqp */
.svg-img-primary {
  filter: invert(39%) sepia(77%) saturate(734%) hue-rotate(206deg)
    brightness(93%) contrast(103%);
}
.svg-img-secondary {
  filter: invert(70%) sepia(47%) saturate(6253%) hue-rotate(122deg)
    brightness(95%) contrast(87%);
}
</style>
