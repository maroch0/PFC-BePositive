<template>
<div class="flex flex-col relative border-r border-cosmicLatte dark:border-cosmicLatte">
    <!-- Raya -->                
    <div class="mb-4 mr-6">
        <time class="w-full text-xl text-cosmicLatte dark:text-cosmicLatte">2022</time>
    </div>

    <!-- Raya -->                
    <div class="mb-4 mr-6">
        <time class="w-full text-xl text-cosmicLatte dark:text-cosmicLatte">2021</time>
    </div>

    <!-- Raya -->                
    <div class="mb-4 mr-6">
        <!-- Bolita -->
        <div class="absolute w-4 h-4 bg-cosmicLatte rounded-full mt-2 -right-2 border border-cosmicLatte dark:border-cosmicLatte dark:bg-cosmicLatte"></div>
        <time class="w-full text-3xl text-cosmicLatte dark:text-cosmicLatte">2020</time>
    </div>

    <!-- Raya -->                
    <div class="mb-4 mr-6">
        <time class="w-full text-xl text-cosmicLatte dark:text-cosmicLatte">2019</time>
    </div>

    <!-- Raya -->                
    <div class="mb-4 mr-6">
       <time class="w-full text-xl text-cosmicLatte dark:text-cosmicLatte">2018</time>
    </div>
</div>
    
</template>

<script>
export default {
  name: "YearMenu",
  data() {
    return {
      years: [2022, 2021, 2020, 2019, 2018],
      selected: false,
    };
  },
};
</script>
