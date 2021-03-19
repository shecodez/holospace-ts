<template>
  <Layout view="Register">
    <h2>Create an Account</h2>
    <RegisterForm />
    <p>
      Have an Account?
      <router-link to="/login">Login</router-link>
    </p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '../layouts/AuthLayout.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';

export default defineComponent({
  name: 'Register',
  components: { Layout, RegisterForm },
});
</script>

<style></style>
