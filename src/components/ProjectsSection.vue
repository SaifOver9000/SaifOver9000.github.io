<script setup>
import { computed } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'

const visible = computed(() => projects.filter((p) => !p.draft))
const featured = computed(() => visible.value.find((p) => p.featured))
const rest = computed(() => visible.value.filter((p) => p !== featured.value))
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl px-5 py-20">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="font-mono text-sm font-semibold uppercase tracking-widest text-cobalt">Selected work</p>
        <h2 class="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Projects</h2>
      </div>
      <p class="max-w-md text-ink/75">
        Things I've designed, built and shipped. Each one started with a real problem.
      </p>
    </div>

    <div class="mt-10 grid gap-8">
      <ProjectCard v-if="featured" :project="featured" featured />
      <div class="grid gap-8 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
        <ProjectCard v-for="p in rest" :key="p.title" :project="p" />
      </div>
    </div>
  </section>
</template>
