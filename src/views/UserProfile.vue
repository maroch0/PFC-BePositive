<template>
  <Header />
  <main
    class="flex flex-col justify-center items-center space-y-6"
  >
    <aside>
      <UpdateImage />
    </aside>
    <form
      class="w-2/6 text-cosmicLatte flex flex-col justify-center space-y-4"
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
  </main>
</template>

<script>
  import Header from '../components/Header.vue'
  import UpdateImage from '../components/UpdateImage.vue'
export default {
  name: 'UserProfile',
  components: {
    Header,
    UpdateImage,
  }
}
</script>
