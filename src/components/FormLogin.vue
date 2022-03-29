<template>
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

          <slot />

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
</template>

<script>
export default {
    name: 'FormLogin'
}
</script>
