<template>
  <section id="projects" class="space-y-12">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">Featured Projects</h2>
      <p class="text-zinc-400 max-w-2xl">A selection of my recent work and personal projects.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="project in projects" 
        :key="project.title"
        class="group relative flex flex-col p-6 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300 shadow-sm overflow-hidden"
      >
        <div class="flex flex-col h-full gap-4">
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm text-zinc-400 leading-relaxed line-clamp-4" v-html="project.description"></p>
          </div>

          <div class="mt-auto space-y-4">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded-full">
                {{ tag }}
              </span>
            </div>

            <div v-if="project.links" class="flex flex-wrap gap-4 border-t border-zinc-800 pt-4">
              <a 
                v-for="link in project.links" 
                :key="link.label"
                :href="link.link"
                target="_blank"
                class="text-xs font-medium text-zinc-100 hover:text-emerald-400 flex items-center gap-1 transition-colors"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const projects = [
    {
        title: 'DestinationCore Business Login',
        description: 'A custom CraftCMS plugin built for business owners to manage their content. Overcame documentation hurdles through reverse engineering, resulting in a user-friendly, robust solution.',
        tags: ['CraftCMS', 'PHP', 'Plugin Development'],
        links: [
            { label: 'DestinationCore', link: 'https://destinationcore.com' },
            { label: 'CraftCMS', link: 'https://craftcms.com' }
        ]
    },
    {
        title: 'Availability Search Engine',
        description: 'High-performance Laravel-based search engine running on AWS Lambda. Integrates multiple data providers to deliver real-time accommodation and experience availability.',
        tags: ['Laravel', 'AWS Lambda', 'Elasticsearch'],
        links: [
            { label: 'Visit Peak District', link: 'https://www.visitpeakdistrict.com/business-directory/category/where-to-stay' },
            { label: 'Visit York', link: 'https://www.visityork.org/business-directory/category/stay' }
        ]
    },
    {
        title: 'Availability Search Components',
        description: 'A modular Vue.js component library designed for high reusability across DestinationCore sites. Built with Vite and extensively tested using Vitest.',
        tags: ['Vue 3', 'Vite', 'Vitest', 'Component Library'],
        links: [
            { label: 'View Live', link: 'https://www.visitpeakdistrict.com/experiences' }
        ]
    },
    {
        title: 'Visit Peak District Site Build',
        description: 'Led the development of fundamental site sections for Visit Peak District. Implemented complex layouts using Craft CMS, Tailwind CSS, and Algolia for search.',
        tags: ['Craft CMS', 'Tailwind CSS', 'Algolia'],
        links: [
            { label: 'Visit Peak District', link: 'https://www.visitpeakdistrict.com' }
        ]
    },
    {
        title: 'Jungle Servers',
        description: 'A high-traffic Garry\'s Mod server community that peaked at #8 globally. Developed custom scripts in Lua and managed a large team of volunteers.',
        tags: ['Lua', 'Community Management', 'Garry\'s Mod'],
        links: [
            { label: 'Garry\'s Mod', link: 'https://gmod.facepunch.com/' }
        ]
    }
]
</script>

