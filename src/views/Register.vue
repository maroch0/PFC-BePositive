<template>
  <main class="h-screen flex flex-col justify-center items-center space-y-28">
    <aside class="flex justify-center">
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="2xl:w-3/4 xl:w-2/4 lg:w-2/4"
      />
    </aside>

    <div class="w-full text-cosmicLatte flex justify-center items-center">
      <RegisterForm>
        <slot>
          <p class="text-cosmicLatte">
        ¿Ya tienes una cuenta?
        <router-link class="text-lg font-bold" :to="{ name: 'login' }">
          Inicia Sesi&oacute;n
        </router-link>
      </p>
        </slot>
      </RegisterForm>
    </div>
  </main>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
  name: "Register",
  components: {
    RegisterForm,
  },
};
</script>
