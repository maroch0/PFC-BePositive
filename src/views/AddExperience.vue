<template>
  <Header />
  <main id="screen-size" class="mt-6">
    <form
      class="h-5/6 lg:h-screen xl:h-5/6 text-cosmicLatte flex flex-col justify-center items-center px-4 pb-4 space-y-6"
    >
      <div class="w-full md:w-2/4 xl:w-1/4 flex flex-col space-y-4">
        <label class="text-lg" for="experience"> Mi experiencia </label>
        <textarea
          id="experience"
          cols="36"
          rows="4"
          class="text-lg px-1 bg-transparent border-b border-cosmicLatte outline-none resize-none"
        />
      </div>

      <label
        for="photo"
        class="w-full md:w-2/4 xl:w-3/12 text-center py-2 outline outline-cosmicLatte rounded-full cursor-pointer"
      >
        A&ntilde;ade una imagen de tu experiencia
      </label>
      <input
        id="photo"
        type="file"
        accept="image/*"
        class="hidden"
        @input="uploadImage"
      />

      <div
        v-if="image"
        class="flex justify-center items-center w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-2xl outline outline-4 outline-cosmicLatte"
      >
        <img :src="image" class="object-center" />
      </div>

      <RateExperience />

      <button
        type="button"
        class="w-full md:w-2/4 xl:w-3/12 self-center btn bg-cosmicLatte text-ruby rounded-full py-2 text-lg"
      >
        Conservar experiencia
      </button>
    </form>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import RateExperience from "../components/RateExperience.vue";

export default {
  name: "AddExperience",
  components: {
    Header,
    RateExperience,
  },
  data() {
    return {
      image: null,
    };
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>
