<template>
  <Header />
  <main
    class="flex flex-col justify-center items-center space-y-8"
  >
    <aside>
      <UpdateImage />
    </aside>
    
    <UpdateProfileForm />

    <button 
      type="button"
      class="w-3/12 sm:w-6/12 self-center btn bg-cosmicLatte text-ruby rounded-full py-2 text-xl md:text-lg"
    >
      Actualizar Perfil
    </button>
  </main>
</template>

<script>
import Header from '../components/Header.vue'
import UpdateImage from '../components/UpdateImage.vue'
import UpdateProfileForm from '../components/UpdateProfileForm.vue'
export default {
  name: 'UserProfile',
  components: {
    Header,
    UpdateImage,
    UpdateProfileForm,
  }
}
</script>
