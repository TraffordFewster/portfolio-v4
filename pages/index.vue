<template>
    <div class="flex flex-col w-full mt-4 md:flex-row">
        <div class="flex flex-col items-center justify-center flex-1 p-8 rounded text-gray-950 bg-white/90 md:bg-transparent">
            <div class="text-center md:p-8 md:rounded md:bg-white/90 md:shadow md:shadow-white">
                <h1 class="text-5xl font-bold">Trafford Fewster</h1>
                <h2 class="text-2xl">Full-Stack Developer</h2>
                <h3 class="text-xl">Currently Working @ <a class="transition-colors border-b border-solid border-black/50 hover:border-black" href="https://destinationcore.com">DestinationCore</a></h3>
            </div>
        </div>

        <div class="flex items-center justify-center flex-1 p-4">
            <img class="block object-cover rounded-full shadow-white ring-4 ring-white shadow w-[450px] h-[450px]" src="https://trafford.dev/_nuxt/img/portrait.e4eea00.webp" alt="Trafford Fewster" />
        </div>
    </div>

    <Skills />

    <Projects />
</template>