<script setup>
const activeSection = ref('home')

onMounted(() => {
  const sections = ['home', 'experience', 'skills', 'projects', 'contact']
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger near center screen
    threshold: 0
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, observerOptions)

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <header class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
    <nav class="backdrop-blur-md bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/20 rounded-full px-2 py-2 shadow-2xl transition-all shadow-emerald-500/5">
      <ul class="flex items-center justify-between">
        <NavLink to="/#home" title="Home" :isActive="activeSection === 'home'" />
        <NavLink to="/#experience" title="Experience" :isActive="activeSection === 'experience'" />
        <NavLink to="/#skills" title="Skills" :isActive="activeSection === 'skills'" />
        <NavLink to="/#projects" title="Projects" :isActive="activeSection === 'projects'" />
        <NavLink to="/#contact" title="Contact" :isActive="activeSection === 'contact'" />
      </ul>
    </nav>
  </header>
</template>