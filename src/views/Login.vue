<template>
  <main 
    class="flex h-full"
  >
    <aside
      class="w-2/4 flex items-center"
    >
      <img
        src="src/assets/timeline-login.png"
        alt="imagen del timeline de la app"
        class="w-full pl-12"
      />
    </aside>

    <article
      class="w-2/4 flex flex-col justify-center items-center space-y-28"
    >
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-2/5"
      />

      <LoginForm>
        <slot>
          <button 
            type="button" 
            class="self-center btn outline outline-ligthRose text-ligthRose w-5/6 text-2xl rounded-full py-2"
          >
            Iniciar Sesi&oacute;n
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
