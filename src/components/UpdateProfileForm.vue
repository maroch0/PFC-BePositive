<template>
  <form
    class="w-5/6 md:w-3/6 lg:w-2/5 xl:w-2/6 text-cosmicLatte flex flex-col justify-center space-y-6 xl:space-y-4"
  >
    <label for="name" class="text-xl"> Nombre </label>
    <input
      type="text"
      id="name"
      required
      class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
    />

    <label for="lastname" class="text-xl"> Apellidos </label>
    <input
      type="text"
      id="lastname"
      required
      class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
    />

    <label for="email" class="text-xl"> Correo Electr&oacute;nico </label>
    <input
      type="email"
      id="email"
      required
      class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
    />

    <label for="pass" class="text-xl"> Contrase&ntilde;a </label>
    <input
      type="password"
      id="pass"
      required
      class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
    />

    <button
      type="button"
      class="w-5/6 self-center btn bg-cosmicLatte text-ruby rounded-full py-2 text-xl"
    >
      Actualizar Perfil
    </button>
  </form>
</template>

<script>
export default {
  name: "UpdateProfileForm",
};
</script>
