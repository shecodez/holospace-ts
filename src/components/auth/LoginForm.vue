<template>
  <form>
    <input v-model="email" type="email" class="rounded text-pink-500" />
    <input v-model="password" type="password" class="rounded text-pink-500" />
    <button @click="submitForgot">Forgot password?</button>

    <div class="flex">
      <div class="w-full mb-5">
        <button
          class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-2 py-2 font-semibold"
          :disabled="!valid"
          @click="submitLogin"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
export default defineComponent({
  name: 'LoginForm',

  setup: () => {
    const email = ref('');
    const password = ref('');
    const valid = ref(true);

    onMounted(() => {
      //email.value.focus();
    });

    const submitForgot = () => {
      console.log(`LoginForm.vue > submitForgot ${email.value}`);
    };

    const submitLogin = () => {
      console.log(`LoginForm.vue > submitLogin ${email.value}`);
    };

    return { email, password, valid, submitForgot, submitLogin };
  },
});
</script>

<style></style>
