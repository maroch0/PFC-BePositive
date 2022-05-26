<template>
  <main class="flex h-full lg:h-screen">
    <aside class="hidden lg:w-2/4 lg:flex lg:items-center">
      <img
        src="src/assets/timeline-login.png"
        alt="imagen del timeline de la app"
        class="w-full pl-12"
      />
    </aside>

    <article
      class="w-full lg:w-2/4 flex flex-col justify-center items-center space-y-28 my-4 lg:my-0"
    >
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-5/6 md:w-2/5 lg:w-2/5"
      />

      <LoginForm>
        <slot>
          <button
            type="button"
            class="self-center btn outline outline-cosmicLatte text-cosmicLatte w-full lg:w-5/6 rounded-full py-2"
          >
            <router-link class="text-xl font-bold" :to="{ name: 'user' }">
              Iniciar Sesi&oacute;n
            </router-link>
          </button>
        </slot>
      </LoginForm>
    </article>
  </main>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
