<template>
  <section id="experience" class="space-y-12">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">Career Journey</h2>
      <p class="text-zinc-400 max-w-2xl">A timeline of my professional experience and growth as a software engineer.</p>
    </div>

    <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
      <div v-for="(item, index) in experience" :key="index" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <!-- Icon -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 group-[.is-active]:text-emerald-400 group-[.is-active]:border-emerald-500/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500">
          <svg class="w-3 h-3 fill-current transition-transform duration-500 md:group-even:-rotate-180" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <!-- Content -->
        <div class="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-colors shadow-sm">
          <div class="flex items-center justify-between space-x-2 mb-4">
            <div class="font-bold text-zinc-100 text-lg">{{ item.company }}</div>
            <time class="font-title text-emerald-400 text-sm whitespace-nowrap">{{ item.period }}</time>
          </div>
          
          <div v-for="(role, rIndex) in item.roles" :key="rIndex" :class="{'mt-6 pt-6 border-t border-zinc-800/50': rIndex > 0}">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div class="text-emerald-400 font-medium">{{ role.title }}</div>
              <time v-if="role.period" class="text-zinc-500 text-xs italic">{{ role.period }}</time>
            </div>
            <ul class="text-zinc-400 text-sm space-y-2">
              <li v-for="(bullet, bIndex) in role.bullets" :key="bIndex" class="flex gap-2">
                <span class="text-emerald-500 mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shrink-0"></span>
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    company: 'CAVU',
    period: 'Feb 2025 - Present',
    roles: [
      {
        title: 'PHP Engineer',
        bullets: [
          'Led detailed engineering breakdown for new features, defining and coordinating technical tasks.',
          'Managed cross-team communication and planning for service owners.',
          'Extended multiple existing services with new functionality, integrating SQL and Elasticsearch.',
          'Ensured safe rollout of new functionality using feature flags.'
        ]
      }
    ]
  },
  {
    company: 'Payment Assist LTD',
    period: 'Feb 2024 - Jan 2025',
    roles: [
      {
        title: 'Software Developer',
        bullets: [
          'Reworked frontend assets to use build processes, reducing bundle size via minification.',
          'Updated models to work with EAV rather than JSON SQL fields.',
          'Improved test coverage in a large critical code base by 10%.',
          'Started re-writing auth solutions to support modern standards like passkeys.'
        ]
      }
    ]
  },
  {
    company: 'DestinationCore',
    period: 'Jan 2022 - Jan 2024',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Mar 2023 - Jan 2024',
        bullets: [
          'Rebuilt business login Craft CMS plugin for hundreds of individual businesses.',
          'Maintained Laravel serverless Availability Search Engine on AWS Lambda.',
          'Supported outsourced development resources with infrastructure problems.'
        ]
      },
      {
        title: 'Junior Full-Stack Developer',
        period: 'Jan 2022 - Mar 2023',
        bullets: [
          'Created and maintained multiple Craft CMS websites (Visit Peak District, Visit York).',
          'Improved performance by 20% through query investigation and eager loading.',
          'Developed front end for in-house availability search and coached junior developers.'
        ]
      }
    ]
  },
  {
    company: 'Netmatters',
    period: 'Mar 2021 - Jan 2022',
    roles: [
      {
        title: 'Trainee Web Developer',
        bullets: [
          'Completed intensive training program under senior developers.',
          'Studied front-end and back-end development, UI/UX, and OOP.',
          'Created company portal in Laravel with employee assignment functionality.'
        ]
      }
    ]
  },
  {
    company: 'Jungle Servers',
    period: 'Feb 2018 - Dec 2020',
    roles: [
      {
        title: 'Founder/Developer',
        bullets: [
          'Led a team of volunteers responsible for moderating and supporting users.',
          'Developed and monetized a production product in Garry\'s Mod (Lua).',
          'Managed server operations and communicated updates to the community.'
        ]
      }
    ]
  }
]
</script>
