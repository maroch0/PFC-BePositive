<template>
    <form
      class="w-3/12 text-cosmicLatte flex flex-col justify-center space-y-4"
    >
        <label 
          for="name"
          class="text-xl"
        >
          Nombre
        </label>
        <input 
          type="text" 
          id="name"
          required 
          class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
        />

        <label 
          for="lastname"
          class="text-xl"
        >
          Apellidos
        </label>
        <input 
          type="text" 
          id="lastname"
          required 
          class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
        />

        <label 
          for="email"
          class="text-xl"
        >
          Correo Electr&oacute;nico
        </label>
        <input 
          type="email"
          id="email"
          required 
          class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
        />  

        <label 
          for="pass"
          class="text-xl"
        >
          Contrase&ntilde;a
        </label>
        <input 
          type="password" 
          id="pass"
          required 
          class="w-full text-xl px-1 bg-transparent border-b-2 border-cosmicLatte outline-none"
        />
    </form>
</template>

<script>
export default {
    name: 'UpdateProfileForm',
}
</script>
