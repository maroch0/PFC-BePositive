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

      <form
        class="w-2/5 flex flex-col space-y-14 text-ligthRose"
      >
        <div
          class="flex flex-col space-y-4"
        >
          <label 
            for=""
            class="text-2xl"
          >
            Correo Electr&oacute;nico
          </label>
          <input 
            type="email" 
            required 
            class="text-xl bg-transparent border-b border-ligthRose outline-none"
          />
        </div>

        <div
          class="flex flex-col space-y-4"
        >
          <label 
            for=""
            class="text-2xl"
          >
            Contrase&ntilde;a
          </label>
          <input 
            type="password" 
            required 
            class="text-xl bg-transparent border-b border-ligthRose outline-none"
          />
        </div>

        <div
          class="flex flex-col items-center space-y-2"
        >
          <button 
            type="button" 
            class="self-center btn outline outline-ligthRose text-ligthRose w-5/6 text-4xl rounded-full py-2"
          >
            Iniciar Sesi&oacute;n
          </button>

          <p
            class="text-ligthRose"
          >
            ¿No tienes una cuenta?
            <router-link 
              class="text-lg font-bold" 
              :to="{ name: 'register' }"
            >
              Reg&iacute;strate
            </router-link>
          </p>
        </div>
      </form>
    </article>
  </main>
</template>

<script>
export default {
  name: "Login",
};
</script>
