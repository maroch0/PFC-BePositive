<template>
  <form class="w-8/12 grid grid-cols-2 justify-center content-center gap-8">
    <div class="w-full flex flex-col space-y-12 ml-28">
      <div class="w-full flex flex-col space-y-2">
        <label for="name" class="text-2xl md:text-xl"> Nombre </label>
        <input
          type="text"
          id="name"
          required
          class="w-3/4 text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col space-y-2">
        <label for="gender" class="text-2xl md:text-xl"> G&eacute;nero </label>
        <select
          name="gender"
          id="gender"
          class="w-3/4 text-xl md:text-base bg-transparent border-b border-cosmicLatte outline-none"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="non-binary">No Binario</option>
        </select>
      </div>

      <div class="w-full flex flex-col space-y-2">
        <label for="email" class="text-2xl md:text-xl">
          Correo Electr&oacute;nico
        </label>
        <input
          type="email"
          id="email"
          required
          class="w-3/4 text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>
    </div>

    <div class="w-full flex flex-col space-y-12">
      <div class="w-full flex flex-col space-y-2">
        <label for="lastname" class="text-2xl md:text-xl"> Apellidos </label>
        <input
          type="text"
          id="lastname"
          required
          class="w-3/4 text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col space-y-2">
        <label for="birthDate" class="text-2xl md:text-xl">
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="birthDate"
          name="trip-start"
          class="w-3/4 text-xl md:text-base bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col space-y-2">
        <label for="pass" class="text-2xl md:text-xl">
          Contrase&ntilde;a
        </label>
        <input
          type="password"
          id="pass"
          required
          class="w-3/4 text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center col-span-2">
      <button
        type="button"
        class="btn bg-cosmicLatte text-intenseRose self-center w-2/5 text-2xl rounded-full py-2 mr-4"
      >
        Registrarse
      </button>

      <slot />
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>
