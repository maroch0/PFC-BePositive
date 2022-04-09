<template>
    <header class="flex justify-center items-center">
        <div class="flex justify-between w-11/12 mt-4">
            <img
                src="src/assets/logo-bepositive.png"
                alt="BePositive logo"
                class="w-1/10"
            />

            <nav class="flex space-x-6">
                <router-link 
                    class="text-lg text-ligthRose self-center" 
                    :to="{ name: 'user'}"
                >
                    Hola, Nombre
                </router-link>

                <router-link 
                    class="text-lg text-ligthRose self-center" 
                    :to="{ name: 'timeline'}"
                >
                    Timeline
                </router-link>

                <router-link 
                    class="text-lg rounded-full py-2 px-4 self-center"
                    :class="{
                        'text-intenseRose bg-ligthRose': path != '/experience',
                        'text-ligthRose outline outline-ligthRose': path === '/experience'
                    }"
                    :to="{ name: 'experience'}"
                >
                    A&ntilde;adir experiencia
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            path: window.location.pathname,
        };
    },
}
</script>
