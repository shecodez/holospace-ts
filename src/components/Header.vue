<template>
  <header>
    <nav>
      <router-link to="/">HoloSpace</router-link>

      <router-link to="/d/1/1">Open App</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
});
</script>

<style></style>
