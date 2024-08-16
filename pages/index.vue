<template>
    <div class="absolute inset-0 h-screen w-screen bg-black bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:24px_24px] -z-50"></div>
    <div class="h-screen w-screen grid place-items-center">
        <AppWeather />
    </div>
</template>
<style>
html {
    scroll-behavior: smooth;
}

body {
    background-image: linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px);
}
</style>