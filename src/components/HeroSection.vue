<script setup>
import { profile } from "../data/profile.js";

const profileImage = `${import.meta.env.BASE_URL}Profile.JPG`;
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden border-b-[3px] border-ink bg-cobalt text-white"
  >
    <!-- decorative shapes -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[3px] border-ink bg-pink"
    ></div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-10 left-[38%] h-24 w-24 rotate-12 rounded-2xl border-[3px] border-ink bg-mint"
    ></div>

    <div
      class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.5fr_1fr]"
    >
      <div>
        <p
          class="font-mono text-sm font-semibold uppercase tracking-widest text-lemon"
        >
          {{ profile.role }} · {{ profile.location }}
        </p>
        <h1
          class="mt-5 font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl"
        >
          Hi, I'm <span class="text-lemon">{{ profile.name }}.</span>
        </h1>
        <p
          class="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
        >
          {{ profile.tagline }}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#projects" class="btn bg-lemon">See my projects</a>
          <a href="#contact" class="btn bg-white">Get in touch</a>
          <a
            v-if="profile.links.github"
            :href="profile.links.github"
            target="_blank"
            rel="noopener"
            class="btn bg-mint"
            >GitHub</a
          >
        </div>
      </div>

      <div class="space-y-8">
        <figure
          class="mx-auto max-w-md rotate-2 rounded-sm border-[3px] border-ink bg-pink p-3 shadow-hard transition-transform duration-200 hover:rotate-0 motion-reduce:transition-none sm:p-4"
        >
          <div class="border-2 border-ink bg-white p-3 sm:p-4">
            <img
              :src="profileImage"
              :alt="`${profile.name} speaking at a podium with a microphone`"
              class="aspect-[4/3] w-full border-2 border-ink object-cover object-[50%_35%]"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </figure>

        <a
          v-if="profile.currentlyBuilding"
          :href="profile.currentlyBuilding.href"
          class="group block -rotate-2 rounded-2xl border-[3px] border-ink bg-lemon p-6 text-ink shadow-hard transition-transform hover:rotate-0 motion-reduce:transition-none"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <span
              class="h-2.5 w-2.5 animate-pulse rounded-full bg-pink motion-reduce:animate-none"
            ></span>
            Currently building
          </span>
          <h2 class="mt-4 font-display text-2xl font-extrabold">
            {{ profile.currentlyBuilding.title }}
          </h2>
          <p class="mt-2 leading-relaxed">
            {{ profile.currentlyBuilding.blurb }}
          </p>
          <p class="mt-4 font-mono text-sm font-semibold">
            {{ profile.currentlyBuilding.target }}
            <span
              class="inline-block transition-transform group-hover:translate-x-1"
              >→</span
            >
          </p>
        </a>
      </div>
    </div>
  </section>
</template>
