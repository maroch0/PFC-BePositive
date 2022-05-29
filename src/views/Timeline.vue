<template>
  <main id="screen-size" class="h-screen md:h-full lg:h-screen xl:h-screen">
    <Header />

    <section class="flex flex-col xl:flex-row h-5/6 overflow-hidden">
      <aside
        class="lg:w-full xl:w-2/6 flex justify-center items-center overflow-auto"
      >
        <YearMenu :years="years" v-on:changeYear="changeYearSelected" />
      </aside>

      <article class="w-full h-full xl:w-4/6 overflow-auto">
        <TimelineItem :data="experiences" />
      </article>
    </section>
  </main>
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
            photo: null,
          },
          {
            date: "13-02-2022",
            description:
              "Consegui el regalo de san valentin que quería para mi pareja",
            photo: null,
          },
          {
            date: "01-03-2022",
            description: "¡He sido tia!",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "19-04-2022",
            description: "He hecho un amigo en mi nuevo trabajo.",
            photo: null,
          },
          {
            date: "27-05-2022",
            description:
              "Encontre el vestido perfecto para la fiesta del sabado.",
            photo: null,
          },
        ],
        [
          {
            date: "01-01-2021",
            description: "Un nuevo año me espera.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "13-02-2021",
            description: "Fiesta de empresa.",
            photo: null,
          },
          {
            date: "01-03-2021",
            description: "He jugado mi primera partida de padel.",
            photo: null,
          },
          {
            date: "19-04-2021",
            description: "Me han ascendido en el trabajo.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "27-05-2021",
            description: "He descubierto un sitio muy bonito en la montaña.",
            photo: null,
          },
          {
            date: "14-06-2021",
            description: "Primeras palabras de Mateo.",
            photo: null,
          },
          {
            date: "24-07-2021",
            description: "Me siento genial.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "08-08-2021",
            description: "Celebramos 10 años de matrimonio.",
            photo: null,
          },
          {
            date: "26-10-2021",
            description: "Fin de semana de spa con las amigas",
            photo: null,
          },
          {
            date: "03-11-2021",
            description: "Nos mudamos a la ciudad",
            photo: null,
          },
        ],
        [
          {
            date: "01-01-2020",
            description: "Celebrando el nuevo año en una casita rural.",
            photo: null,
          },
          {
            date: "13-02-2020",
            description: "He vuelto a tocar la guitarra.",
            photo: null,
          },
          {
            date: "01-03-2020",
            description: "Adoptamos un perrito.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "19-04-2020",
            description: "Cumplo 35 y me siento genial.",
            photo: null,
          },
          {
            date: "27-05-2020",
            description: "Termine el master.",
            photo: null,
          },
          {
            date: "14-06-2020",
            description: "Nos vamos a Escocia.",
            photo: null,
          },
          {
            date: "24-07-2020",
            description: "Ha sido un día genial en la playa.",
            photo: null,
          },
          {
            date: "08-08-2020",
            description: "Termine de leer mi nuevo libro y es una pasada.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "26-10-2020",
            description: "Hacemos un pastel en pareja.",
            photo: null,
          },
          {
            date: "03-11-2020",
            description: "Visito a mi amiga de Australia.",
            photo: null,
          },
          {
            date: "09-12-2020",
            description: "Sofa, manta y Netflix.",
            photo: "../src/assets/profile-img.png",
          },
        ],
        [
          {
            date: "13-02-2019",
            description: "Cena en el restaurante de nuestra primera cita.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "01-03-2019",
            description: "Estoy escribiendo un libro.",
            photo: null,
          },
          {
            date: "19-04-2019",
            description: "Me he comprado unas gafas nuevas que son lo más.",
            photo: null,
          },
          {
            date: "27-05-2019",
            description: "Redecoramos la casa.",
            photo: null,
          },
          {
            date: "14-06-2019",
            description:
              "Alquilamos un pequeño apartamento en la playa para las vacaciones de verano.",
            photo: null,
          },
          {
            date: "24-07-2019",
            description: "He quedado a comer con mi hermana.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "08-08-2019",
            description: "Ha sido mi primer dia en las clases de calistenia.",
            photo: null,
          },
          {
            date: "17-09-2019",
            description: "Preparamos por primera vez curry.",
            photo: null,
          },
          {
            date: "30-10-2019",
            description: "¡Termine mi libro!",
            photo: null,
          },
        ],
        [
          {
            date: "13-02-2018",
            description:
              "He conseguido las entradas para el concierto de mi grupo favorito.",
            photo: null,
          },
          {
            date: "19-04-2018",
            description: "He encontrado un nuevo trabajo.",
            photo: null,
          },
          {
            date: "27-05-2018",
            description:
              "Preparamos una cena romantica con velas en nuestro balcon.",
            photo: null,
          },
          {
            date: "14-06-2018",
            description: "Por fin se estreno la pelicula que queria ver.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "24-07-2018",
            description: "Damos un paseo en la playa por la noche.",
            photo: null,
          },
          {
            date: "08-08-2018",
            description: "La chica de la cafeteria ha sido super maja.",
            photo: null,
          },
          {
            date: "26-10-2018",
            description: "Me encanta mi nuevo peinado.",
            photo: "../src/assets/profile-img.png",
          },
          {
            date: "03-11-2018",
            description: "Pasamos una tarde en pareja maravillosa.",
            photo: null,
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
