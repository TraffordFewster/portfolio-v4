<template>
    <section id="projects" class="container flex flex-col mt-4 bg-white/90">
        <h2 class="mt-4 text-3xl text-center">
            Projects
        </h2>

        <div class="flex flex-col gap-2 px-2 py-4 md:flex-row">
            <article class="flex-1 p-4 bg-white/50" id="current-project">
                <h3 class="mt-2 text-2xl font-bold text-center">{{ selectedProject.title }}</h3>

                <p v-html="selectedProject.description" class="my-4">
                </p>

                <ul v-if="selectedProject.links" class="flex flex-wrap gap-2">
                    <li v-for="link in selectedProject.links">
                        <a 
                            :href="link.link"
                            :target="link.target || '_blank'"
                            class="border-b border-black border-solid hover:border-b-2"
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>

                <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title" class="mt-4">

            </article>

            <div class="flex-1">
                <ul class="flex flex-col gap-2">
                    <li v-for="project in projects" class="flex flex-col gap-2 p-2 bg-white/50">
                        <p class="text-xl text-center">{{ project.title }}</p>

                        <button class="p-2 text-center bg-white shadow hover:underline" @click="selectedProject=project">
                            Read About It!
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        title: 'DestinationCore Business Login',
        description: 'While working at DestinationCore, I was tasked with remaking our business login solution. This was a CraftCMS plugin that was used to allow businesses to login to their website and manage their content.<br><br> There were many challenges along the way as the documentation for making Craft Plugins is not the best and required alot of reverse engineering to get it working.<br><br> The end result was an upgraded plugin that was alot more suitable for the business needs and was alot more user friendly.',
        links: [
            {
                label: 'DestinationCore',
                link: 'https://destinationcore.com'
            },
            {
                label: 'CraftCMS',
                link: 'https://craftcms.com'
            }
        ]
    },
    {
        title: 'Availability Search Engine',
        description: 'While working at DestinationCore, I was tasked with maintaining and adding many features to the Availability Search Engine. This was a Laravel Project running on AWS Lambda which would reach out to many linked providers to get availability of properties and experiences for one of their sites such as Visit Peak District.<br><br> One of my first tasks on the project was to add property grouping, this was a feature that would allow properties to be grouped together so that they could be displayed as one property on the site. This was a very challenging task as it required me to learn how the system worked and modify the output to make properties sometimes from multiple providers look like they all was under one property.<br><br> I also added many other features such as policies to more connections and improved the performance with some agressive eagerloading.',
        links: [
            {
                label: 'Visit Peak District Accommodation Search',
                link: 'https://www.visitpeakdistrict.com/business-directory/category/where-to-stay'
            },
            {
                label: 'Visit Peak District Experiences',
                link: 'https://www.visitpeakdistrict.com/experiences'
            },
            {
                label: 'Visit York Accommodation Search',
                link: 'https://www.visityork.org/business-directory/category/stay'
            }
        ]
    },
    {
        title: 'Availability Search Components',
        description: 'While working at DestinationCore, I was tasked with creating a Vue Component Library that would be used to display the availability search results on the site. This was built using Vue & Vite along with multiple unit tests using Vitest.<br><br> The components are now used across all DestinationCore sites that use the Availability Search Engine for their accommodation and/or experiences.',
        links: [
            {
                label: 'Visit Peak District Accommodation Search',
                link: 'https://www.visitpeakdistrict.com/business-directory/category/where-to-stay'
            },
            {
                label: 'Visit Peak District Experiences',
                link: 'https://www.visitpeakdistrict.com/experiences'
            },
            {
                label: 'Visit York Accommodation Search',
                link: 'https://www.visityork.org/business-directory/category/stay'
            }
        ]
    },
    {
        title: 'Visit Peak District Site Build',
        description: 'While working at DestinationCore, I was tasked with building the Visit Peak District site along side 2 other developers as we had a very short deadline. We planned ahead early however splitting up tasks so we could all work at the same time with very little conflicts.<br><br> The site was built using primarily Craft CMS and Tailwind with some Vue components for more interactive parts. The site was built with a mobile first approach and was designed to be very easy to use for the end user.<br><br> I developed some of the fundamental parts of the site such as the card sections, the homepage hero and the search results powered by Algolia.',
        links: [
            {
                label: 'Visit Peak District',
                link: 'https://www.visitpeakdistrict.com'
            }
        ],
        image: '/img/projects/visit-peak-district.png'
    }
]
let selectedProject = ref(projects[0])
watch(selectedProject, () => {
    document.getElementById('current-project').scrollIntoView({ behavior: 'smooth' })
})
</script>
