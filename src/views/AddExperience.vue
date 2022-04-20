<template>
  <Header />
  <form 
    class="w-full h-screen text-cosmicLatte flex flex-col justify-center items-center pb-56 space-y-6"
  >
    <div
      class="flex flex-col space-y-4"
    >
      <label 
        class="text-lg"
        for="experience"
      >
        Mi experiencia
      </label>
      <textarea 
        id="experience" cols="36" rows="4"
        class="text-lg px-1 bg-transparent border-b border-cosmicLatte outline-none resize-none"
      />
    </div>

    <label for="image"
      class="w-3/12 text-center py-2 outline outline-cosmicLatte rounded-full cursor-pointer"
    >
      A&ntilde;ade una imagen de tu experiencia
    </label>
    <input id="image" type="file" accept="image/*" class="hidden">
    
    <RateExperience />

    <button 
      type="button"
      class="self-center btn bg-cosmicLatte text-ruby w-3/12 rounded-full py-2 text-lg"
    >
      Conservar experiencia
    </button>
  </form>
</template>

<script>
import Header from "../components/Header.vue"
import RateExperience from "../components/RateExperience.vue"

export default {
  name: 'AddExperience',
  components: {
    Header,
    RateExperience,
  },
}
</script>
