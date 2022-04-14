<template>
    <div class="flex space-x-4">
         <span
            class="text-xl"
        >Califica tu experiencia</span>
<!--         <label for="plus1">
            <svg 
            class="w-8 self-center" 
            :class="[
                checked ? 'fill-cosmicLatte' : 'fill-transparent stroke-cosmicLatte'
            ]"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        </label>
        <input type="radio" name="rated" id="plus1" class="hidden" value="1"> -->

        <svg 
            class="w-8 self-center" 
            :class="[
                fillIcon ? 'fill-cosmicLatte' : 'fill-transparent stroke-cosmicLatte'
            ]"
            @click="selectedIcon"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        <svg 
            class="w-8 self-center" 
            :class="[
                fillIcon ? 'fill-cosmicLatte' : 'fill-transparent stroke-cosmicLatte'
            ]"
            @click="selectedIcon"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        <svg 
            class="w-8 self-center fill-transparent stroke-cosmicLatte" 
            :class="[
                fillIcon ? 'fill-cosmicLatte' : 'fill-transparent stroke-cosmicLatte'
            ]"
            @click="selectedIcon"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        <svg 
            class="w-8 self-center fill-transparent stroke-cosmicLatte" 
            :class="[
                fillIcon ? 'fill-cosmicLatte' : 'fill-transparent stroke-cosmicLatte'
            ]"
            @click="selectedIcon"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        <svg 
            class="w-8 self-center fill-transparent stroke-cosmicLatte" 
            :class="[
                fillIcon ? 'fill-cosmicLatte' : 'fill-transparent stroke-cosmicLatte'
            ]"
            @click="selectedIcon"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: "RateExperience",
    data() {
        return {
            fillIcon: false,
        };
    },
    methods: {
        selectedIcon() {
            return this.fillIcon = !this.fillIcon;
        }
    }
}
</script>
