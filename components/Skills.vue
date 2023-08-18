<template>
    <section id="skills" class="container flex flex-col mt-4 bg-white/90">
        <h2 class="mt-4 text-3xl text-center">
            Skills
        </h2>

        <Carousel
            :wrap-around="true"
            :autoplay="1500"
            :pause-autoplay-on-hover="true"
            :items-to-show="3"
            :breakpoints="{
                480: {
                    itemsToShow: 4
                },
                640: {
                    itemsToShow: 6
                },
                768: {
                    itemsToShow: 8
                },
                1024: {
                    itemsToShow: 13
                }
            }"
            class="py-4"
        >
            <Slide v-for="slide in slides" :key="slide" class="flex flex-col transition-transform hover:scale-105">
                <a :href="slide.link" target="_blank">
                    <img class="object-contain w-16 h-16 mx-auto" :src="slide.image" :alt="`${slide.label} Logo`">

                    <p class="line-clamp-1">{{ slide.label }}</p>
                </a>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </section>
</template>

<script setup>
const slides = [
    {
        label: 'HTML',
        image: '/img/html5.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        label: 'CSS',
        image: '/img/css3.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        label: 'JavaScript',
        image: '/img/javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        label: 'Vue',
        image: '/img/vuejs.svg',
        link: 'https://vuejs.org/'
    },
    {
        label: 'Algolia',
        image: '/img/algolia.svg',
        link: 'https://www.algolia.com/'
    },
    {
        label: 'Tailwind',
        image: '/img/tailwindcss.svg',
        link: 'https://tailwindcss.com/'
    },
    {
        label: 'Laravel',
        image: '/img/laravel.svg',
        link: 'https://laravel.com/'
    },
    {
        label: 'CraftCMS',
        image: '/img/craftcms.svg',
        link: 'https://craftcms.com/'
    },
    {
        label: 'PHP',
        image: '/img/php.svg',
        link: 'https://www.php.net/'
    },
    {
        label: 'MySQL',
        image: '/img/mysql.svg',
        link: 'https://www.mysql.com/'
    },
    {
        label: 'Git',
        image: '/img/git.svg',
        link: 'https://git-scm.com/'
    },
    {
        label: 'GitHub',
        image: '/img/github.svg',
        link: 'https://github.com'
    },
    {
        label: 'Actions',
        image: '/img/github.svg',
        link: 'https://github.com/features/actions'
    },
    {
        label: 'AWS',
        image: '/img/aws.svg',
        link: 'https://aws.amazon.com/'
    }
]
</script>