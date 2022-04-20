<template>
  <Header />
  <main
    class="flex flex-col justify-center items-center"
  >
    <aside>
      <img 
        src="src/assets/profile-img.png"
        class="w-4/6 object-none outline outline-4 outline-cosmicLatte"
        style="border-radius: 100%"
      >
    </aside>
    <form
      class="text-cosmicLatte flex flex-col justify-center gap-4"
    >
      <label 
          for="name"
          class="text-2xl"
        >
          Nombre
        </label>
        <input 
          type="text" 
          id="name"
          required 
          class="w-full text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />

        <label 
          for="lastname"
          class="text-2xl"
        >
          Apellidos
        </label>
        <input 
          type="text" 
          id="lastname"
          required 
          class="w-full text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />

        <label 
          for="email"
          class="text-2xl"
        >
          Correo Electr&oacute;nico
        </label>
        <input 
          type="email"
          id="email"
          required 
          class="w-full text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />  

         <label 
          for="pass"
          class="text-2xl"
        >
          Contrase&ntilde;a
        </label>
        <input 
          type="password" 
          id="pass"
          required 
          class="w-full text-xl px-1 bg-transparent border-b border-cosmicLatte outline-none"
        />
    </form>
  </main>
</template>

<script>
  import Header from '../components/Header.vue'
export default {
  name: 'UserProfile',
  components: {
    Header,
  }
}
</script>
