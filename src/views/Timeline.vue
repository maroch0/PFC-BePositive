<template>
  <Header />

  <section class="flex h-5/6 overflow-hidden">
    <aside class="w-2/6 flex justify-center items-center">
      <YearMenu />
    </aside>

    <article class="w-4/6 h-full overflow-auto">
      <TimelineItem />
    </article>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import TimelineItem from '../components/TimelineItem.vue';
import YearMenu from "../components/YearMenu.vue"

export default {
  name: "Timeline",
  components: {
    Header,
    YearMenu,
    TimelineItem,
  },
};
</script>

<style scoped>
</style>