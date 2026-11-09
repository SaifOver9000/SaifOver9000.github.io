<script setup>
import { profile } from "../data/profile.js";

const profileImage = `${import.meta.env.BASE_URL}Profile.JPG`;
</script>

<template>
  <section
    id="top"
    class="paper-sheet relative overflow-hidden border-b-2 border-dashed border-pencil/25"
  >
    <div
      class="relative mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr]"
    >
      <!-- Left: the words, cut out and pasted down -->
      <div class="space-y-8">
        <!-- Little kraft-paper label -->
        <div class="scrap inline-block -rotate-2">
          <span class="tape tape-mint -left-6 top-1 w-16 -rotate-12"></span>
          <p
            class="scrap-paper torn-b bg-kraft px-5 py-2 font-hand text-lg tracking-wide"
          >
            {{ profile.role }} · {{ profile.location }}
          </p>
        </div>

        <!-- Headline on a torn strip of white paper -->
        <div class="scrap rotate-1 hover:rotate-0">
          <span class="tape -top-3 left-8 -rotate-6"></span>
          <span class="tape tape-pink -top-2 right-10 rotate-3"></span>
          <h1
            class="scrap-paper torn-a px-6 pb-6 pt-8 font-scribble text-6xl font-bold leading-[1] sm:px-10 sm:text-7xl lg:text-8xl"
          >
            Hi, I'm <span class="highlight">{{ profile.name }}.</span>
          </h1>
        </div>

        <!-- Tagline on a scrap of notebook paper -->
        <div class="scrap max-w-xl -rotate-1 hover:rotate-0 sm:ml-8">
          <span class="tape -top-3 left-1/2 -translate-x-1/2 rotate-2"></span>
          <p
            class="scrap-paper lined torn-b py-6 pl-14 pr-6 font-hand text-xl sm:text-2xl"
          >
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Buttons as hand-cut paper tags -->
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#projects" class="paper-btn -rotate-2 bg-lemon"
            >See my projects →</a
          >
          <a href="#contact" class="paper-btn rotate-1 bg-white"
            >Get in touch</a
          >
          <a
            v-if="profile.links.github"
            :href="profile.links.github"
            target="_blank"
            rel="noopener"
            class="paper-btn -rotate-1 bg-mint/70"
            >GitHub</a
          >
        </div>
      </div>

      <!-- Right: photo and sticky note -->
      <div class="space-y-12">
        <figure
          class="scrap mx-auto max-w-md rotate-3 bg-white p-3 pb-2 hover:rotate-1 sm:p-4 sm:pb-3"
        >
          <span class="tape -top-3 -left-5 -rotate-[30deg]"></span>
          <span class="tape -right-5 -top-3 rotate-[30deg]"></span>
          <img
            :src="profileImage"
            :alt="`${profile.name} speaking at a podium with a microphone`"
            class="aspect-[4/3] w-full object-cover object-[50%_35%]"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption class="pt-2 text-center font-scribble text-xl">
            that's me!
          </figcaption>
        </figure>

        <!-- "Currently building" as a sticky note -->
        <a
          v-if="profile.currentlyBuilding"
          :href="profile.currentlyBuilding.href"
          class="scrap group mx-auto block max-w-sm -rotate-2 bg-lemon p-6 hover:rotate-0"
        >
          <span
            class="tape tape-pink -top-3 left-1/2 -translate-x-1/2 -rotate-3"
          ></span>
          <p class="font-hand text-sm uppercase tracking-widest">
            <span
              class="mr-1 inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-pink motion-reduce:animate-none"
            ></span>
            Currently building
          </p>
          <h2 class="mt-3 font-scribble text-2xl font-bold">
            {{ profile.currentlyBuilding.title }}
          </h2>
          <p class="mt-2 font-hand text-lg leading-snug">
            {{ profile.currentlyBuilding.blurb }}
          </p>
          <p class="mt-4 font-hand text-lg underline decoration-wavy">
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
