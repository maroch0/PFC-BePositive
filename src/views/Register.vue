<template>
  <div
    class="flex flex-col justify-center items-center space-y-20 pt-12"
  >
    <div
      class="flex justify-center"
    >
      <img
        src="src/assets/logo-bepositive.png"
        alt="BePositive logo"
        class="w-3/5"
      />
    </div>

    <div class="w-2/3 flex flex-col justify-center content-center">
      <form 
        class="text-ligthRose grid grid-cols-2 gap-8"
      >
        <div
          class="flex flex-col justify-center items-start space-y-8"
        >
          <label 
            for=""
            class="text-2xl"
          >
            Nombre
          </label>
          <input 
            type="text" 
            required 
            class="w-3/4 text-xl bg-transparent border-b border-ligthRose outline-none"
          />

          <label 
            for=""
            class="text-2xl"
          >
            G&eacute;nero
          </label>
          <select 
            name="genero" id=""
            class="w-3/4 text-xl bg-transparent border-b border-ligthRose outline-none"
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="no-binario">No Binario</option>
          </select>

          <label 
            for=""
            class="text-2xl"
          >
            Correo Electr&oacute;nico
          </label>
          <input 
            type="email" 
            required 
            class="w-3/4 text-xl bg-transparent border-b border-ligthRose outline-none"
          />
        </div>

        <div
          class="flex flex-col justify-center items-end space-y-8"
        >
          <label 
            for=""
            class="text-2xl"
          >
            Apellidos
          </label>
          <input 
            type="text" 
            required 
            class="w-3/4 text-xl bg-transparent border-b border-ligthRose outline-none"
          />

          <label for="start">Fecha de nacimiento:</label>
          <input type="date" id="start" name="trip-start"
            value="2004-01-01"
            class="w-3/4 text-xl bg-transparent border-b border-ligthRose outline-none"
          />

          <label 
            for=""
            class="text-2xl"
          >
            Contrase&ntilde;a
          </label>
          <input 
            type="password" 
            required 
            class="w-3/4 text-xl bg-transparent border-b border-ligthRose outline-none"
          />
        </div>
      </form>
    </div>
  
    <div class="w-2/3 flex flex-col justify-center items-center">
      <button
        type="button"
        class="btn bg-ligthRose text-intenseRose w-1/4 text-2xl rounded-full py-2"
      >
        Registrarse
      </button>
      <p class="text-ligthRose">
        ¿Ya tienes una cuenta?
        <router-link 
          class="text-lg font-bold" 
          :to="{ name: 'login' }"
        >
          Inicia Sesi&oacute;n
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
