<template>
  <Header />

  <section class="flex h-5/6 overflow-hidden">
    <aside class="w-2/6 flex justify-center items-center">
      <YearMenu 
        :years="years"
        v-on:changeYear="changeYearSelected"
       />
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
  [
    {
      date: "01-01-2022",
      description: "Un nuevo año me espera."
    },
    {
      date: "13-02-2022",
      description: "Fiesta de empresa."
    },
    {
      date: "01-03-2022",
      description: "He hecho un nuevo amigo."
    },
    {
      date: "19-04-2022",
      description: "Me han ascendido en el trabajo."
    },
    {
      date: "27-05-2022",
      description: "He descubierto un sitio muy bonito en la montaña."
    },
    {
      date: "14-06-2022",
      description: "Primeras palabras de Mateo."
    },
    {
      date: "24-07-2022",
      description: "Me siento genial."
    },
    {
      date: "08-08-2022",
      description: "Celebramos 10 años de matrimonio"
    },
    {
      date: "26-10-2022",
      description: "Fin de semana de spa con las amigas"
    },
    {
      date: "03-11-2022",
      description: "Nos mudamos a la ciudad"
    },
  ],
  [
    {
      date: "01-01-2021",
      description: "Un nuevo año me espera."
    },
    {
      date: "13-02-2021",
      description: "Fiesta de empresa."
    },
    {
      date: "01-03-2021",
      description: "He hecho un nuevo amigo."
    },
    {
      date: "19-04-2021",
      description: "Me han ascendido en el trabajo."
    },
    {
      date: "27-05-2021",
      description: "He descubierto un sitio muy bonito en la montaña."
    },
    {
      date: "14-06-2021",
      description: "Primeras palabras de Mateo."
    },
    {
      date: "24-07-2021",
      description: "Me siento genial."
    },
    {
      date: "08-08-2021",
      description: "Celebramos 10 años de matrimonio"
    },
    {
      date: "26-10-2021",
      description: "Fin de semana de spa con las amigas"
    },
    {
      date: "03-11-2021",
      description: "Nos mudamos a la ciudad"
    },
  ],
  [
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
  ],
  [
    {
      date: "01-01-2019",
      description: "Un nuevo año me espera."
    },
    {
      date: "13-02-2019",
      description: "Fiesta de empresa."
    },
    {
      date: "01-03-2019",
      description: "He hecho un nuevo amigo."
    },
    {
      date: "19-04-2019",
      description: "Me han ascendido en el trabajo."
    },
    {
      date: "27-05-2019",
      description: "He descubierto un sitio muy bonito en la montaña."
    },
    {
      date: "14-06-2019",
      description: "Primeras palabras de Mateo."
    },
    {
      date: "24-07-2019",
      description: "Me siento genial."
    },
    {
      date: "08-08-2019",
      description: "Celebramos 10 años de matrimonio"
    },
    {
      date: "26-10-2019",
      description: "Fin de semana de spa con las amigas"
    },
    {
      date: "03-11-2019",
      description: "Nos mudamos a la ciudad"
    },
  ],
  [
    {
      date: "01-01-2018",
      description: "Un nuevo año me espera."
    },
    {
      date: "13-02-2018",
      description: "Fiesta de empresa."
    },
    {
      date: "01-03-2018",
      description: "He hecho un nuevo amigo."
    },
    {
      date: "19-04-2018",
      description: "Me han ascendido en el trabajo."
    },
    {
      date: "27-05-2018",
      description: "He descubierto un sitio muy bonito en la montaña."
    },
    {
      date: "14-06-2018",
      description: "Primeras palabras de Mateo."
    },
    {
      date: "24-07-2018",
      description: "Me siento genial."
    },
    {
      date: "08-08-2018",
      description: "Celebramos 10 años de matrimonio"
    },
    {
      date: "26-10-2018",
      description: "Fin de semana de spa con las amigas"
    },
    {
      date: "03-11-2018",
      description: "Nos mudamos a la ciudad"
    },
  ]
]

export default {
  name: "Timeline",
  components: {
    Header,
    YearMenu,
    TimelineItem,
  },
  data() {
    return {
      experiences: Array,
      allYearExperiences: all_experiences,
      years: [2022, 2021, 2020, 2019, 2018],
    };
  },
  created() {
    this.experiences = all_experiences[0];
  },
  methods: {
    changeYearSelected(yearSelect) {
      if (yearSelect === 2022) {
        this.experiences = all_experiences[0];
      } else if (yearSelect === 2021) {
        this.experiences = all_experiences[1];
      } else if (yearSelect === 2020) {
        this.experiences = all_experiences[2];
      } else if (yearSelect === 2019) {
        this.experiences = all_experiences[3];
      } else if (yearSelect === 2018) {
        this.experiences = all_experiences[4];
      }
    },
  },
};
</script>