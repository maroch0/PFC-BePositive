<template>
  <Header />

  <section class="flex h-5/6 overflow-hidden">
    <aside class="w-2/6 flex justify-center items-center">
      <YearMenu :years="years" v-on:changeYear="changeYearSelected" />
    </aside>

    <article class="w-4/6 h-full overflow-auto">
      <TimelineItem :data="experiences" />
    </article>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import TimelineItem from "../components/TimelineItem.vue";
import YearMenu from "../components/YearMenu.vue";

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
      allYearExperiences: [
        [
          {
            date: "01-01-2022",
            description: "Fiesta de año nuevo con los amigos.",
          },
          {
            date: "13-02-2022",
            description:
              "Consegui el regalo de san valentin que quería para mi pareja",
          },
          {
            date: "01-03-2022",
            description: "¡He sido tia!",
          },
          {
            date: "19-04-2022",
            description: "He hecho un amigo en mi nuevo trabajo.",
          },
          {
            date: "27-05-2022",
            description:
              "Encontre el vestido perfecto para la fiesta del sabado.",
          },
        ],
        [
          {
            date: "01-01-2021",
            description: "Un nuevo año me espera.",
          },
          {
            date: "13-02-2021",
            description: "Fiesta de empresa.",
          },
          {
            date: "01-03-2021",
            description: "He jugado mi primera partida de padel.",
          },
          {
            date: "19-04-2021",
            description: "Me han ascendido en el trabajo.",
          },
          {
            date: "27-05-2021",
            description: "He descubierto un sitio muy bonito en la montaña.",
          },
          {
            date: "14-06-2021",
            description: "Primeras palabras de Mateo.",
          },
          {
            date: "24-07-2021",
            description: "Me siento genial.",
          },
          {
            date: "08-08-2021",
            description: "Celebramos 10 años de matrimonio.",
          },
          {
            date: "26-10-2021",
            description: "Fin de semana de spa con las amigas",
          },
          {
            date: "03-11-2021",
            description: "Nos mudamos a la ciudad",
          },
        ],
        [
          {
            date: "01-01-2020",
            description: "Celebrando el nuevo año en una casita rural.",
          },
          {
            date: "13-02-2020",
            description: "He vuelto a tocar la guitarra.",
          },
          {
            date: "01-03-2020",
            description: "Adoptamos un perrito.",
          },
          {
            date: "19-04-2020",
            description: "Cumplo 35 y me siento genial.",
          },
          {
            date: "27-05-2020",
            description: "Termine el master.",
          },
          {
            date: "14-06-2020",
            description: "Nos vamos a Escocia.",
          },
          {
            date: "24-07-2020",
            description: "Ha sido un día genial en la playa.",
          },
          {
            date: "08-08-2020",
            description: "Termine de leer mi nuevo libro y es una pasada.",
          },
          {
            date: "26-10-2020",
            description: "Hacemos un pastel en pareja.",
          },
          {
            date: "03-11-2020",
            description: "Visito a mi amiga de Australia.",
          },
          {
            date: "09-12-2020",
            description: "Sofa, manta y Netflix.",
          },
        ],
        [
          {
            date: "13-02-2019",
            description: "Cena en el restaurante de nuestra primera cita.",
          },
          {
            date: "01-03-2019",
            description: "Estoy escribiendo un libro.",
          },
          {
            date: "19-04-2019",
            description: "Me he comprado unas gafas nuevas que son lo más.",
          },
          {
            date: "27-05-2019",
            description: "Redecoramos la casa.",
          },
          {
            date: "14-06-2019",
            description:
              "Alquilamos un pequeño apartamento en la playa para las vacaciones de verano.",
          },
          {
            date: "24-07-2019",
            description: "He quedado a comer con mi hermana.",
          },
          {
            date: "08-08-2019",
            description: "Ha sido mi primer dia en las clases de calistenia.",
          },
          {
            date: "17-09-2019",
            description: "Preparamos por primera vez curry.",
          },
          {
            date: "30-10-2019",
            description: "¡Termine mi libro!",
          },
        ],
        [
          {
            date: "13-02-2018",
            description:
              "He conseguido las entradas para el concierto de mi grupo favorito.",
          },
          {
            date: "19-04-2018",
            description: "He encontrado un nuevo trabajo.",
          },
          {
            date: "27-05-2018",
            description:
              "Preparamos una cena romantica con velas en nuestro balcon.",
          },
          {
            date: "14-06-2018",
            description: "Por fin se estreno la pelicula que queria ver.",
          },
          {
            date: "24-07-2018",
            description: "Damos un paseo en la playa por la noche.",
          },
          {
            date: "08-08-2018",
            description: "La chica de la cafeteria ha sido super maja.",
          },
          {
            date: "26-10-2018",
            description: "Me encanta mi nuevo peinado.",
          },
          {
            date: "03-11-2018",
            description: "Pasamos una tarde en pareja maravillosa.",
          },
        ],
      ],
      years: [2022, 2021, 2020, 2019, 2018],
    };
  },
  created() {
    this.experiences = this.allYearExperiences[0];
  },
  methods: {
    changeYearSelected(yearSelect) {
      if (yearSelect === 2022) {
        this.experiences = this.allYearExperiences[0];
      } else if (yearSelect === 2021) {
        this.experiences = this.allYearExperiences[1];
      } else if (yearSelect === 2020) {
        this.experiences = this.allYearExperiences[2];
      } else if (yearSelect === 2019) {
        this.experiences = this.allYearExperiences[3];
      } else if (yearSelect === 2018) {
        this.experiences = this.allYearExperiences[4];
      }
    },
  },
};
</script>
