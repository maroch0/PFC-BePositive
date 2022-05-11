<template>
    <div
        class="flex flex-col justify-center items-center space-y-4"
    >
        <div
            class="flex justify-center items-center w-44 md:w-38 h-44 md:h-38 overflow-hidden rounded-fifty outline outline-4 outline-cosmicLatte"
        >
            <img 
            src="src/assets/profile-img.png"
            class="object-center"
            >     
        </div>

        <label for="image"
            class="w-full text-center text-lg md:text-base text-cosmicLatte cursor-pointer"
        >
            Actualizar fotograf&iacute;a
        </label>
        <input id="image" type="file" accept="image/*" class="hidden"> 
    </div>
</template>

<script>
export default {
    name: 'UpdateImage',
}
</script>

<style>

</style>