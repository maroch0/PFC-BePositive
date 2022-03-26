<template>
  <main class="flex space-y-8">
    <aside>
      <img
        src="src/assets/timeline-login.png"
        alt="imagen del timeline de la app"
        class="w-3/4"
      />
    </aside>

    <article>
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-2/4"
      />

      <div class="flex flex-col content-around">
        <form>
          <div>
            <label for="">Correo Electr&oacute;nico</label>
            <input type="email" required />
          </div>

          <div>
            <label for="">Contrase&ntilde;a</label>
            <input type="password" required />
          </div>

          <button type="button" class="btn outline w-1/4 rounded-xl">
            Iniciar Sesi&oacute;n
          </button>
        </form>

        <p>
          ¿No tienes una cuenta?
          <router-link class="text-lg" :to="{ name: 'register' }">
            Register
          </router-link>
        </p>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>