<template>
  <main class="pt-32 pb-20 space-y-20">
    <!-- Hero Section -->
    <section id="home" class="flex flex-col md:flex-row items-center justify-between gap-12">
      <div class="flex-1 space-y-6">
        <div class="space-y-2">
          <h2 class="font-title text-emerald-400 text-2xl">Hello, I'm</h2>
          <h1 class="text-6xl md:text-8xl font-bold tracking-tight">Trafford Fewster</h1>
          <p class="text-2xl md:text-3xl text-zinc-400 font-light">
            Software Engineer specializing in PHP & Laravel
          </p>
        </div>
        
        <p class="text-zinc-400 max-w-xl text-lg leading-relaxed">
          Currently working at <a href="https://ca.vu/" target="_blank" class="text-zinc-100 hover:text-emerald-400 underline decoration-emerald-400 underline-offset-4 transition-colors">CAVU</a>.
          I build robust, scalable web applications with a focus on clean code and performance.
        </p>

        <div class="flex items-center gap-6 pt-4">
          <a href="https://www.linkedin.com/in/trafford-fewster" target="_blank" class="text-zinc-400 hover:text-white transition-colors">
            <svg viewBox="0 0 128 128" class="w-8 h-8 fill-current">
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" class="fill-zinc-950"></path>
            </svg>
          </a>
          <a href="https://github.com/TraffordFewster" target="_blank" class="text-zinc-400 hover:text-white transition-colors">
            <svg viewBox="0 0 128 128" class="w-8 h-8 fill-current">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
            </svg>
          </a>
          <a href="/resume.pdf" target="_blank" class="px-6 py-2 bg-zinc-100 text-zinc-950 font-medium rounded-full hover:bg-white transition-colors">
            Download Resume
          </a>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img class="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-2 border-zinc-800" src="/img/portrait.webp" alt="Trafford Fewster" />
      </div>
    </section>

    <hr class="border-zinc-800" />

    <Experience />

    <hr class="border-zinc-800" />

    <Skills />

    <hr class="border-zinc-800" />

    <Projects />

    <hr class="border-zinc-800" />

    <Contact />
  </main>
</template>