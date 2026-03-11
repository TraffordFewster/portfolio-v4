<template>
  <footer id="contact" class="pt-12 pb-24">
    <div class="flex flex-col items-center gap-8">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold text-zinc-100">Let's Connect</h2>
        <p class="text-zinc-400 max-w-md mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <a href="mailto:contact@trafford.dev" class="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all group">
          <svg class="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-zinc-300 group-hover:text-zinc-100 transition-colors">contact@trafford.dev</span>
        </a>
        
        <a href="tel:07473077246" class="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all group">
          <svg class="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="text-zinc-300 group-hover:text-zinc-100 transition-colors">07473 077246</span>
        </a>
      </div>

      <div class="text-center space-y-2">
        <p class="text-zinc-500 text-sm">© {{ new Date().getFullYear() }} Trafford Fewster. Built with Nuxt & Tailwind.</p>
        <p class="text-zinc-600 text-xs">
          Phone calls may be <a class="underline" target="_blank" href="https://support.google.com/phoneapp/answer/9118387?hl=en">screened by Google</a>.
        </p>
      </div>
    </div>
  </footer>
</template>