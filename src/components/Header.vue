<template>
  <header class="flex justify-center items-center">
    <div class="w-full lg:w-11/12 flex justify-around md:justify-between mt-4">
      <div class="hidden md:block md:w-1/4">
        <img
          src="/src/assets/logo-bepositive.png"
          alt="BePositive logo"
          class="w-6/12 ml-4 lg:ml-0"
        />
      </div>

      <nav class="flex justify-end space-x-6 md:mr-4 lg:mr-0 self-center">
        <router-link
          class="text-base md:text-lg text-cosmicLatte self-center"
          :class="{
            'border-none': path !== '/user',
            'border-b-4 border-cosmicLatte text-cosmicLatte': path === '/user',
          }"
          :to="{ name: 'user' }"
        >
          Hola, Nombre
        </router-link>

        <router-link
          class="text-base md:text-lg text-cosmicLatte self-center"
          :class="{
            'border-none': path !== '/timeline',
            'border-b-4 border-cosmicLatte text-cosmicLatte':
              path === '/timeline',
          }"
          :to="{ name: 'timeline' }"
        >
          Timeline
        </router-link>

        <router-link
          class="text-base md:text-lg rounded-full py-1 px-2 lg:py-2 lg:px-4 self-center"
          :class="{
            'text-ruby bg-cosmicLatte': path !== '/experience',
            'text-cosmicLatte outline outline-cosmicLatte':
              path === '/experience',
          }"
          :to="{ name: 'experience' }"
        >
          A&ntilde;adir experiencia
        </router-link>

        <router-link
          class="hidden w-1/12 lg:flex self-center"
          :to="{ name: 'login' }"
        >
          <img src="/src/assets/logout.png" alt="logout icon" class="w-4/6" />
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      path: window.location.pathname,
    };
  },
};
</script>
