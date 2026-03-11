<template>
  <section id="skills" class="space-y-12">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">Technical Expertise</h2>
      <p class="text-zinc-400 max-w-2xl">A collection of technologies and tools I use to bring ideas to life.</p>
    </div>

    <div class="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
      <Carousel
        :wrap-around="true"
        :autoplay="2000"
        :pause-autoplay-on-hover="true"
        :items-to-show="3"
        :breakpoints="{
          480: { itemsToShow: 4 },
          640: { itemsToShow: 6 },
          768: { itemsToShow: 8 },
          1024: { itemsToShow: 10 }
        }"
      >
        <Slide v-for="slide in slides" :key="slide.label" class="p-4">
          <a :href="slide.link" target="_blank" class="flex flex-col items-center gap-3 group">
            <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-zinc-800/50 group-hover:bg-zinc-700/50 group-hover:scale-110 transition-all duration-300">
              <img class="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all" :src="slide.image" :alt="`${slide.label} Logo`">
            </div>
            <p class="text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">{{ slide.label }}</p>
          </a>
        </Slide>

        <template #addons>
          <Navigation class="hidden sm:block" />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
const slides = [
    {
        label: 'HTML',
        image: '/img/icons/html5.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        label: 'CSS',
        image: '/img/icons/css3.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        label: 'JavaScript',
        image: '/img/icons/javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        label: 'Vue',
        image: '/img/icons/vuejs.svg',
        link: 'https://vuejs.org/'
    },
    {
        label: 'Algolia',
        image: '/img/icons/algolia.svg',
        link: 'https://www.algolia.com/'
    },
    {
        label: 'Tailwind',
        image: '/img/icons/tailwindcss.svg',
        link: 'https://tailwindcss.com/'
    },
    {
        label: 'Laravel',
        image: '/img/icons/laravel.svg',
        link: 'https://laravel.com/'
    },
    {
        label: 'CraftCMS',
        image: '/img/icons/craftcms.svg',
        link: 'https://craftcms.com/'
    },
    {
        label: 'PHP',
        image: '/img/icons/php.svg',
        link: 'https://www.php.net/'
    },
    {
        label: 'MySQL',
        image: '/img/icons/mysql.svg',
        link: 'https://www.mysql.com/'
    },
    {
        label: 'Git',
        image: '/img/icons/git.svg',
        link: 'https://git-scm.com/'
    },
    {
        label: 'GitHub',
        image: '/img/icons/github.svg',
        link: 'https://github.com'
    },
    {
        label: 'Actions',
        image: '/img/icons/github.svg',
        link: 'https://github.com/features/actions'
    },
    {
        label: 'AWS',
        image: '/img/icons/aws.svg',
        link: 'https://aws.amazon.com/'
    },
    {
        label: 'Lua',
        image: '/img/icons/lua.svg',
        link: 'https://www.lua.org/'
    }
]
</script>

<style scoped>
:deep(.carousel__prev),
:deep(.carousel__next) {
  @apply text-emerald-400/50 hover:text-emerald-400 transition-colors bg-zinc-800/50 rounded-full w-10 h-10 border border-zinc-700/50 backdrop-blur-sm;
}

:deep(.carousel__prev) {
  @apply -left-4 sm:-left-6;
}

:deep(.carousel__next) {
  @apply -right-4 sm:-right-6;
}
</style>