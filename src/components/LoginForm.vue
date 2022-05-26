<template>
  <form class="w-5/6 lg:w-2/4 flex flex-col space-y-14 text-cosmicLatte">
    <div class="flex flex-col space-y-4">
      <label for="email" class="text-2xl"> Correo Electr&oacute;nico </label>
      <input
        type="email"
        id="email"
        required
        class="text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
      />
    </div>

    <div class="flex flex-col space-y-4">
      <label for="pass" class="text-2xl"> Contrase&ntilde;a </label>
      <input
        type="password"
        id="pass"
        required
        class="text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
      />
    </div>

    <div class="flex flex-col items-center space-y-2">
      <slot />

      <p class="text-cosmicLatte">
        ¿No tienes una cuenta?
        <router-link class="text-lg font-bold" :to="{ name: 'register' }">
          Reg&iacute;strate
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>
