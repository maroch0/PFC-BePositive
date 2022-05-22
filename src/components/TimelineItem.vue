<template>
  <section class="timeline">
    <div
      v-for="(item, i) in data"
      :key="i"
      :class="i % 2 ? 'timeline-item left' : 'timeline-item right'"
    >
      <article
        class="content text-cosmicLatte"
        :class="
          i % 2
            ? 'flex flex-col justify-end items-end'
            : 'flex flex-col justify-end items-start'
        "
      >
        <h2 class="italic font-thin text-lg mb-1">{{ item.date }}</h2>
        <p class="leading-tight text-xl text-justify">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "TimelineItem",
  props: ["data"],
};
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
/* barra vertical */
.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background-color: #fff8e8;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
}

.timeline-item {
  padding: 10px 20px;
  position: relative;
  width: 50%;
}

.timeline-item::after {
  content: "";
  position: absolute;
  /* dot size */
  width: 20px;
  height: 20px;
  /* vertical position dot par */
  right: -9px;

  background-color: #fff8e8;
  top: 35px;
  border-radius: 50%;
  z-index: 1;
}
/* vertical position dot par */
.left {
  left: 0;
}
/* vertical position dot impar */
.right {
  left: 49.9%;
}

.right::after {
  left: -10px;
}

.content {
  padding: 20px 40px;
}

/* Responsive on screens less than 600px wide */
@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .left::after,
  .right::after {
    left: 21px;
  }

  .right {
    left: 0%;
  }
}
</style>
