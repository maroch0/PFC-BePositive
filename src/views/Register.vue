<template>
  <main
    class="h-full lg:h-screen flex flex-col justify-center items-center space-y-8 md:space-y-28 lg:space-y-10"
  >
    <aside class="flex justify-center mt-4 md:mt-8 2xl:mt-0">
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-4/6 md:w-3/5 xl:w-3/4 2xl:w-full"
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
