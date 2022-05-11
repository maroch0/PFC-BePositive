<template>
  <main 
    class="flex h-full"
  >
    <aside
      class="w-2/4 sm:hidden flex items-center"
    >
      <img
        src="src/assets/timeline-login.png"
        alt="imagen del timeline de la app"
        class="w-full md:w-11/12 pl-12"
      />
    </aside>

    <article
      class="w-2/4 sm:w-full flex flex-col justify-center items-center space-y-28"
    >
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-2/5 md:w-2/6"
      />

      <LoginForm>
        <slot>
          <button 
            type="button" 
            class="self-center btn outline outline-cosmicLatte text-cosmicLatte w-5/6 md:w-full rounded-full py-2"
          >
            <router-link 
              class="text-xl font-bold" 
              :to="{ name: 'user' }"
            >
              Iniciar Sesi&oacute;n
            </router-link>
          </button>
        </slot>
      </LoginForm>      
    </article>
  </main>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: "Login",
  components: {
    LoginForm,
  }
};
</script>
