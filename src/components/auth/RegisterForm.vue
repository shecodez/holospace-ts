<template>
  <form>
    <input v-model="username" type="text" class="rounded text-pink-500" />
    <input v-model="email" type="email" class="rounded text-pink-500" />
    <input v-model="password" type="password" class="rounded text-pink-500" />

    <input v-model="terms" type="terms" class="rounded text-pink-500" />
    <button :disabled="!valid" @click="submitRegister">Register</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "RegisterForm",

  setup: () => {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const terms = ref(false);
    const valid = ref(true);

    const submitRegister = () => {
      console.log(`RegisterForm.vue > submitRegister ${username.value}`);
    };

    return { username, email, password, terms, valid, submitRegister };
  },
});
</script>

<style></style>
