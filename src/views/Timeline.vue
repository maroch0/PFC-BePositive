<template>
  <Header />

  <section class="flex h-5/6 overflow-hidden">
    <aside class="w-2/6 sm:w-1/6 flex justify-center items-center">
      <TestYearMenu />
    </aside>

    <article class="w-4/6 sm:w-5/6 h-full overflow-auto">
      <TimelineItem />
    </article>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import TimelineItem from '../components/TimelineItem.vue';
import TestYearMenu from "../components/TestYearMenu.vue"

export default {
  name: "Timeline",
  components: {
    Header,
    TestYearMenu,
    TimelineItem,
  },
};
</script>

<style scoped>
</style>