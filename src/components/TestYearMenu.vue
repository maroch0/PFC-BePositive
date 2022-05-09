<template>
<div class="flex flex-col relative border-r border-cosmicLatte dark:border-cosmicLatte">
    <div v-for="(year, index) in years" :key="index">
        <!-- Raya -->                
        <div class="mb-4 mr-6">
            <!-- Bolita -->
            <div
                v-if="selected && yearSelect === year"
            >
                <div class="absolute w-3 h-3 bg-cosmicLatte rounded-full mt-1.5 -right-1.5 border border-cosmicLatte dark:border-cosmicLatte dark:bg-cosmicLatte"></div>
            </div>
            <button 
                type="button"
                class="w-full text-xl text-cosmicLatte dark:text-cosmicLatte"
                @click="yearSelected"
            >
                <p>
                    {{ year }}
                </p>
            </button>
            {{ selected }}
        </div>
    </div>
</div>
    
</template>

<script>
export default {
  name: "TestYearMenu",
  data() {
    return {
      years: [2022, 2021, 2020, 2019, 2018],
      selected: false,
      yearSelect: String,
    };
  },
  computed: {
      
  },
  methods: {
      yearSelected() {
          this.year = this.yearSelect;
          return this.selected = true;
      }
  }
};
</script>
