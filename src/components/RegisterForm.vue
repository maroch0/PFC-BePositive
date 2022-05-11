<template>
  <form 
    class="text-cosmicLatte grid grid-cols-2 justify-center gap-8 ml-28"
  >
    <div
      class="w-3/4 flex flex-col space-y-12"
    >
      <div class="w-full flex flex-col">
        <label 
          for="name"
          class="text-2xl md:text-xl"
        >
          Nombre
        </label>
        <input 
          type="text" 
          id="name"
          required 
          class="w-full text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col">
        <label 
          for="gender"
          class="text-2xl md:text-xl"
        >
          G&eacute;nero
        </label>
        <select 
          name="gender" id="gender"
          class="w-full text-xl md:text-base bg-transparent border-b border-cosmicLatte outline-none"
        >
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="no-binario">No Binario</option>
        </select>
      </div>

      <div class="w-full flex flex-col">
        <label 
          for="email"
          class="text-2xl md:text-xl"
        >
          Correo Electr&oacute;nico
        </label>
        <input 
          type="email"
          id="email"
          required 
          class="w-full text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />    
      </div>
    </div>

    <div
      class="w-3/4 flex flex-col space-y-12"
    >
      <div class="w-full flex flex-col">
        <label 
          for="lastname"
          class="text-2xl md:text-xl"
        >
          Apellidos
        </label>
        <input 
          type="text" 
          id="lastname"
          required 
          class="w-full text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col">
        <label 
          for="birthDate"
          class="text-2xl md:text-xl"
        >
          Fecha de nacimiento
        </label>
        <input type="date" id="birthDate" name="trip-start"
          value="2004-01-01"
          class="w-full text-xl md:text-base bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>

      <div class="w-full flex flex-col">
        <label 
          for="pass"
          class="text-2xl md:text-xl"
        >
          Contrase&ntilde;a
        </label>
        <input 
          type="password" 
          id="pass"
          required 
          class="w-full text-xl md:text-base px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
      </div>          
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>
