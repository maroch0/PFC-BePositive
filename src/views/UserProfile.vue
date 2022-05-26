<template>
  <Header />
  <main
    class="md:h-4/6 lg:h-screen xl:h-5/6 flex flex-col justify-center items-center space-y-14 mt-10 pb-4 md:mt-6 xl:mt-0"
  >
    <aside>
      <UpdateImage />
    </aside>

    <UpdateProfileForm />
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
