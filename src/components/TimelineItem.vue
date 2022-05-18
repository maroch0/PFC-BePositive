<template>
  <section class="timeline">
    <div
      v-for="(item, i) in data"
      :key="i"
      :class='i % 2 ? "timeline-item left" : "timeline-item right"'
    >
      <article 
        class="content text-cosmicLatte"
        :class='i % 2 ? "flex flex-col justify-end items-end" : "flex flex-col justify-end items-start"'
      >
        <h2 class="italic font-thin text-lg mb-1">{{item.date}}</h2>
        <p class="leading-tight text-xl text-justify">{{item.description}}</p>
      </article>
    </div>
  </section>
</template>

<script>
const experiences = [
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
  name: "TimelineItem",
  data() {
    return {
      data: experiences
    };
  },
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
  background-color: #FFF8E8;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
}

.timeline-item {
  padding: 10px 80px;
  position: relative;
  width: 50%;
}

.timeline-item::after {
  content: "";
  position: absolute;
  /* dot size */
  width: 20px;
  height: 20px;

  right: -10.2px;
  background-color: #FFF8E8;
  top: 28px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}
/* dot horizontal position */
.right {
  left: 50%;
}

.right::after {
  left: -10px;
}

.content {
  padding: 20px 30px;
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