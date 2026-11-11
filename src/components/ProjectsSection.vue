<script setup>
import { computed } from "vue";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.vue";
import SectionHeading from "./SectionHeading.vue";

const visible = computed(() => projects.filter((p) => !p.draft));
const featured = computed(() => visible.value.find((p) => p.featured));
const rest = computed(() => visible.value.filter((p) => p !== featured.value));
</script>

<template>
  <section id="projects" class="border-b-2 border-dashed border-pencil/25">
    <div class="mx-auto max-w-6xl px-5 py-20">
      <div class="flex flex-wrap items-end justify-between gap-10">
        <SectionHeading
          kicker="Selected work"
          title="Projects"
          tape="tape-pink"
        />

        <!-- Intro on a mint sticky note -->
        <div class="scrap max-w-xs rotate-2 bg-mint/70 p-5 hover:rotate-0">
          <span class="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2"></span>
          <p class="font-hand text-xl leading-snug">
            Things I've designed, built and shipped. Each one started with a
            real problem.
          </p>
        </div>
      </div>

      <div class="mt-16 grid gap-12">
        <ProjectCard v-if="featured" :project="featured" featured />
        <div
          class="grid gap-12 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2"
        >
          <ProjectCard
            v-for="(p, i) in rest"
            :key="p.title"
            :project="p"
            :index="i"
          />
        </div>
      </div>
    </div>
  </section>
</template>
