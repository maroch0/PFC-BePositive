<template>
  <div class="flex flex-col justify-center items-center space-y-4 xl:space-y-0">
    <div
      class="flex justify-center items-center w-28 h-28 md:w-38 md:h-38 lg:w-48 lg:h-48 overflow-hidden rounded-fifty outline outline-4 outline-cosmicLatte"
    >
      <img :src="image" class="object-center" />
    </div>

    <label
      for="image"
      class="w-full text-center text-base md:text-lg text-cosmicLatte cursor-pointer"
    >
      Actualizar fotograf&iacute;a
    </label>
    <input
      id="image"
      type="file"
      accept="image/*"
      class="hidden"
      @input="uploadImage"
    />
  </div>
</template>

<script>
export default {
  name: "UpdateImage",
  data() {
    return {
      image: "src/assets/profile-img.png",
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

<style></style>
