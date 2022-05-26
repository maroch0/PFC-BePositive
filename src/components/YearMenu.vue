<template>
  <div
    class="flex xl:flex-col justify-center items-center xl:relative xl:border-r border-cosmicLatte dark:border-cosmicLatte"
  >
    <div v-for="(year, index) in years" :key="index">
      <!-- Raya -->
      <div class="mb-4 mr-6">
        <!-- Bolita -->
        <div v-if="selected && yearSelect === year">
          <div
            class="xl:absolute xl:w-4 xl:h-4 bg-cosmicLatte xl:rounded-full mt-2 xl:-right-2 border border-cosmicLatte dark:border-cosmicLatte dark:bg-cosmicLatte"
          ></div>
        </div>
        <button
          type="button"
          class="w-full flex justify-center content-center"
          @click="yearSelected(index)"
        >
          <p
            class="text-xl text-cosmicLatte dark:text-cosmicLatte"
            :class="{
              'text-3xl': yearSelect === year,
            }"
          >
            {{ year }}
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YearMenu",
  data() {
    return {
      yearSelect: undefined,
      selected: false,
    };
  },
  props: ["years"],
  created() {
    this.yearSelect = this.years[0];
    this.selected = true;
  },
  methods: {
    yearSelected(index) {
      this.yearSelect = this.years[index];
      this.selected = true;
      this.$emit("changeYear", this.yearSelect);
    },
  },
};
</script>
