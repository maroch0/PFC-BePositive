<template>
  <Header />

  <section class="flex h-5/6 overflow-hidden">
    <aside class="w-2/6 flex justify-center items-center">
      <YearMenu :years="years" />
    </aside>

    <article class="w-4/6 h-full overflow-auto">
      <TimelineItem :data="experiences" />
    </article>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import TimelineItem from '../components/TimelineItem.vue';
import YearMenu from "../components/YearMenu.vue"

const all_experiences = [
  {
    date: "01-01-2020",
    description: "Un nuevo año me espera."
  },
  {
    date: "13-02-2020",
    description: "Fiesta de empresa."
  },
  {
    date: "01-03-2020",
    description: "He hecho un nuevo amigo."
  },
  {
    date: "19-04-2020",
    description: "Me han ascendido en el trabajo."
  },
  {
    date: "27-05-2020",
    description: "He descubierto un sitio muy bonito en la montaña."
  },
  {
    date: "14-06-2020",
    description: "Primeras palabras de Mateo."
  },
  {
    date: "24-07-2020",
    description: "Me siento genial."
  },
  {
    date: "08-08-2020",
    description: "Celebramos 10 años de matrimonio"
  },
  {
    date: "26-10-2020",
    description: "Fin de semana de spa con las amigas"
  },
  {
    date: "03-11-2020",
    description: "Nos mudamos a la ciudad"
  },
];
export default {
  name: "Timeline",
  components: {
    Header,
    YearMenu,
    TimelineItem,
  },
  data() {
    return {
      experiences: all_experiences,
      years: [2022, 2021, 2020, 2019, 2018],
    };
  },
};
</script>