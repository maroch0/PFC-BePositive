<template>
  <Header />

  <main
    id="screen-size"
    class="2xl:h-5/6 flex flex-col items-center space-y-10 mt-10 pb-4 md:mt-4"
  >
    <aside>
      <UpdateImage />
    </aside>

    <article
      class="w-5/6 md:w-3/6 lg:w-2/5 xl:w-2/6 2xl:w-1/4 flex flex-col justify-center space-y-4 pb-4"
    >
      <UpdateProfileForm />
      <button
        type="button"
        class="w-5/6 self-center btn bg-cosmicLatte rounded-full py-2 text-xl lg:hidden"
      >
        <router-link class="w-1/12 text-ruby" :to="{ name: 'login' }">
          Cerrar Sesi&oacute;n
        </router-link>
      </button>
    </article>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import UpdateImage from "../components/UpdateImage.vue";
import UpdateProfileForm from "../components/UpdateProfileForm.vue";
export default {
  name: "UserProfile",
  components: {
    Header,
    UpdateImage,
    UpdateProfileForm,
  },
};
</script>
