<template>
  <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-cosmicLatte">
    <!-- left -->
    <div class="flex flex-row-reverse md:contents">
      <div class="col-start-1 col-end-5 p-4 rounded-xl ml-auto">
        <h3 class="text-lg">2022</h3>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-cosmicLatte pointer-events-none"></div>
        </div>
      </div>
    </div>
    <!-- left -->
    <div class="flex flex-row-reverse md:contents">
      <div class="col-start-1 col-end-5 p-4 rounded-xl ml-auto">
        <h3 class="text-lg">2021</h3>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-cosmicLatte pointer-events-none"></div>
        </div>
      </div>
    </div>
    <!-- left -->
    <div class="flex flex-row-reverse md:contents">
      <div class="col-start-1 col-end-5 p-4 rounded-xl ml-auto">
        <h3 class="font-semibold text-2xl">2020</h3>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-cosmicLatte pointer-events-none"></div>
        </div>
        <!-- dot -->
        <div
          class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-cosmicLatte shadow"
        ></div>
      </div>
    </div>
    <!-- left -->
    <div class="flex flex-row-reverse md:contents">
      <div class="col-start-1 col-end-5 p-4 rounded-xl ml-auto">
        <h3 class="text-lg">2019</h3>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-cosmicLatte pointer-events-none"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "YearMenu"
};
</script>