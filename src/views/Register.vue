<template>
  <div
    class="flex flex-col justify-center items-center space-y-28 pt-12"
  >
    <div
      class="flex justify-center"
    >
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-3/5"
      />
    </div>

    <div class="w-2/3 flex flex-col">
      <RegisterForm />
    </div>
  
    <div class="w-full flex flex-col justify-center items-center">
      <button
        type="button"
        class="btn bg-cosmicLatte text-intenseRose w-1/4 text-2xl rounded-full py-2"
      >
        <router-link 
          class="text-2xl" 
          :to="{ name: 'login' }"
        >
          Registrarse
        </router-link>
      </button>
      <p class="text-cosmicLatte">
        ¿Ya tienes una cuenta?
        <router-link 
          class="text-lg font-bold" 
          :to="{ name: 'login' }"
        >
          Inicia Sesi&oacute;n
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'
export default {
  name: "Register",
  components: {
    RegisterForm,
  }
};
</script>

