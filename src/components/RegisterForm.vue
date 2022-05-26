<template>
  <form
    class="lg:w-8/12 flex flex-col justify-center content-center space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 2xl:gap-10"
  >
    <div class="w-full flex flex-col space-y-8 lg:space-y-12 lg:ml-10 xl:ml-18">
      <div class="w-full flex flex-col lg:space-y-2">
        <label for="name" class="text-xl md:text-2xl"> Nombre </label>
        <input
          type="text"
          id="name"
          required
          class="w-full lg:w-5/6 xl:w-3/4 text-base lg:text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col lg:space-y-2">
        <label for="gender" class="text-xl md:text-2xl"> G&eacute;nero </label>
        <select
          name="gender"
          id="gender"
          class="w-full lg:w-5/6 xl:w-3/4 text-base lg:text-xl bg-transparent border-b border-cosmicLatte outline-none"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="non-binary">No Binario</option>
        </select>
      </div>

      <div class="w-full flex flex-col lg:space-y-2">
        <label for="email" class="text-xl md:text-2xl">
          Correo Electr&oacute;nico
        </label>
        <input
          type="email"
          id="email"
          required
          class="w-full lg:w-5/6 xl:w-3/4 text-base lg:text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>
    </div>

    <div class="w-full flex flex-col space-y-8 lg:space-y-12 lg:ml-10">
      <div class="w-full flex flex-col lg:space-y-2">
        <label for="lastname" class="text-xl md:text-2xl"> Apellidos </label>
        <input
          type="text"
          id="lastname"
          required
          class="w-full lg:w-5/6 xl:w-3/4 text-base lg:text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col lg:space-y-2">
        <label for="birthDate" class="text-xl md:text-2xl">
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="birthDate"
          name="trip-start"
          class="w-full lg:w-5/6 xl:w-3/4 text-base lg:text-xl bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col lg:space-y-2">
        <label for="pass" class="text-xl md:text-2xl">
          Contrase&ntilde;a
        </label>
        <input
          type="password"
          id="pass"
          required
          class="w-full lg:w-5/6 xl:w-3/4 text-base lg:text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-center lg:col-span-2">
      <button
        type="button"
        class="btn bg-cosmicLatte text-ruby self-center w-full lg:w-2/5 2xl:w-2/6 text-xl md:text-2xl rounded-full py-2 2xl:mr-4"
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
