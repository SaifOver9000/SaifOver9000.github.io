<script setup>
import { computed } from "vue";
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.vue";

const experience = computed(() => profile.experience.filter((e) => !e.draft));
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

        <div
          v-if="experience.length || !profile.education.draft"
          class="space-y-6"
        >
          <h3 class="font-scribble text-3xl font-bold">
            <span class="highlight">Experience & education</span>
          </h3>
          <ol class="space-y-6">
            <li
              v-for="(item, i) in experience"
              :key="item.role + item.org"
              class="scrap hover:rotate-0"
              :class="i % 2 ? 'rotate-1' : '-rotate-1'"
            >
              <span
                class="tape -top-3 left-6 -rotate-3"
                :class="i % 2 ? 'tape-mint' : ''"
              ></span>
              <div
                class="scrap-paper px-6 pb-5 pt-6"
                :class="i % 2 ? 'torn-b' : 'torn-a'"
              >
                <div
                  class="flex flex-wrap items-baseline justify-between gap-2"
                >
                  <p class="font-scribble text-xl font-bold">
                    {{ item.role }} · {{ item.org }}
                  </p>
                  <p class="font-hand text-base text-pencil/70">
                    {{ item.period }}
                  </p>
                </div>
                <p class="mt-1 font-hand text-lg">{{ item.summary }}</p>
              </div>
            </li>
            <li
              v-if="!profile.education.draft"
              class="scrap rotate-1 hover:rotate-0"
            >
              <span class="tape tape-pink -top-3 left-6 -rotate-3"></span>
              <div class="scrap-paper torn-b bg-kraft/60 px-6 pb-5 pt-6">
                <div
                  class="flex flex-wrap items-baseline justify-between gap-2"
                >
                  <p class="font-scribble text-xl font-bold">
                    {{ profile.education.degree }} ·
                    {{ profile.education.school }}
                  </p>
                  <p class="font-hand text-base text-pencil/70">
                    {{ profile.education.year }}
                  </p>
                </div>
              </div>
            </li>
          </ol>
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
