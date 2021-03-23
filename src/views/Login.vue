<template>
  <Layout view="Login">
    <div class="text-center mb-10">
      <h1 class="font-bold text-xl">Hey, Welcome Back!</h1>
    </div>
    <LoginForm />
    <p>
      Need an Account?
      <router-link to="/register">Register</router-link>
    </p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '../layouts/AuthLayout.vue';
import LoginForm from '../components/auth/LoginForm.vue';

export default defineComponent({
  name: 'Login',
  components: { Layout, LoginForm },
});
</script>

<style></style>
