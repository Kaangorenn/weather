<script setup>
const config = useRuntimeConfig();

const city = ref('');
const weather = ref(null);

const getWeather = async () => {
    const apiKey = config.public.WEERLIVE_API_KEY;
    const response = await fetch(`https://weerlive.nl/api/weerlive_api_v2.php?key=${apiKey}&locatie=${city.value}`);
    const data = await response.json();
    weather.value = data.liveweer[0]
    console.log(weather.value);
};
</script>
<template>
    <div class="px-5">
        <div v-if="weather">
            <div class="text-center">
                <NuxtImg class="h-56 md:h-72 mx-auto -mt-32 md:mt-0" :src="`/icons/${weather.image}.svg`" :alt="weather.image"></NuxtImg>
                <h1 class="text-6xl md:text-8xl text-white font-bold -mt-10 md:-mt-16  mb-5">{{ weather.temp }}°</h1>
                <div class="w-full border-t-[1px] border-white/50 mb-8"></div>
                <div class="inline-flex items-center gap-20">
                    <div class="inline-flex gap-5 items-center">
                        <NuxtImg class="h-10 fill-white -mt-2" src="/icons/sunrise.svg" alt="wind"></NuxtImg>
                        <h1 class="mb-2 text-white">{{ weather.sup }}</h1>
                    </div>
                    <div class="inline-flex gap-5 items-center">
                        <NuxtImg class="h-10 fill-white -mt-2" src="/icons/sunset.svg" alt="wind"></NuxtImg>
                        <h1 class="mb-2 text-white">{{ weather.sunder }}</h1>
                    </div>
                </div>
                <div class="w-full border-t-[1px] border-white/50 mb-8 mt-5"></div>
                <div class="text-white bg-white/10 rounded-xl backdrop-blur-md p-5 mt-5">
                    <h1 class="text-white text-lg text-left md:text-2xl">{{ weather.verw }}</h1>
                </div>
            </div>
        </div>
        <div :class="{ 'mt-5': weather }" class="bg-white/10 rounded-xl backdrop-blur-md p-5 block border-[1px] border-white/50">
            <div class="grid grid-cols-3">
                <input v-model="city" placeholder="Enter city name" class="bg-black text-white px-3 md:px-4 py-3 md:py-6 rounded-md col-span-2 placeholder:text-lg md:placeholder:text-2xl md:placeholder:-mt-[2px] md:placeholder:absolute text-md md:text-2xl" />
                <button @click="getWeather" class="text-white text-center bg-black py-2 px-5 ml-5 rounded-md text-md md:text-2xl">Check</button>
            </div>
        </div>
    </div>
</template>