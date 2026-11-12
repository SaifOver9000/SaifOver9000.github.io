<script setup>
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.vue";

// Skill groups are sticky notes in rotating colours
const noteColors = [
  "bg-lemon",
  "bg-mint/70",
  "bg-pink/45",
  "bg-white",
  "bg-kraft/70",
];
const aboutImage = `${import.meta.env.BASE_URL}Picture.jpg`;
</script>

<template>
  <section id="about" class="border-b-2 border-dashed border-pencil/25">
    <div
      class="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.2fr_1fr]"
    >
      <div class="space-y-10">
        <SectionHeading
          kicker="About"
          title="A bit about me"
          tape="tape-mint"
        />

        <!-- The story, written out on notebook paper -->
        <div class="scrap -rotate-[0.6deg] hover:rotate-0">
          <span class="tape -top-3 left-10 -rotate-6"></span>
          <span class="tape tape-pink -top-3 right-12 rotate-6"></span>
          <div
            class="scrap-paper lined torn-a pb-8 pl-14 pr-6 pt-6 font-hand text-xl leading-8"
          >
            <p
              v-for="para in profile.about"
              :key="para"
              class="mt-8 first:mt-0"
            >
              {{ para }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-10">
        <!-- Instant photo, taped in at an angle -->
        <figure
          class="scrap mx-auto max-w-xs -rotate-2 bg-white p-3 pb-2 hover:rotate-0 sm:p-4 sm:pb-3"
        >
          <span class="tape tape-pink -top-3 -left-5 -rotate-[30deg]"></span>
          <span class="tape -right-5 -top-3 rotate-[30deg]"></span>
          <img
            :src="aboutImage"
            alt="Saif giving a thumbs up at a museum exhibit"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="pt-2 text-center font-scribble text-xl">
            museum day, thumbs up
          </figcaption>
        </figure>

        <div class="space-y-8">
          <h3 class="font-scribble text-3xl font-bold">
            <span class="highlight">What I work with</span>
          </h3>
          <div
            v-for="(group, i) in profile.skills"
            :key="group.group"
            class="scrap p-5 pt-6 hover:rotate-0"
            :class="[
              noteColors[i % noteColors.length],
              i % 2 ? 'rotate-1' : '-rotate-1',
            ]"
          >
            <span
              class="tape -top-3 -rotate-3"
              :class="i % 2 ? 'right-8' : 'left-8'"
            ></span>
            <p class="font-hand text-sm uppercase tracking-widest">
              {{ group.group }}
            </p>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li v-for="skill in group.items" :key="skill" class="tag">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
