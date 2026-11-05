<script setup>
import { computed } from "vue";
import { profile } from "../data/profile.js";

const experience = computed(() => profile.experience.filter((e) => !e.draft));
const chipColors = ["bg-lemon", "bg-mint", "bg-pink"];
</script>

<template>
  <section id="about" class="border-y-[3px] border-ink bg-white">
    <div
      class="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr]"
    >
      <div>
        <p
          class="font-mono text-sm font-semibold uppercase tracking-widest text-cobalt"
        >
          About me
        </p>
        <h2 class="mt-2 font-display text-4xl font-extrabold sm:text-5xl">
          A bit about me
        </h2>
        <div class="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed">
          <p v-for="para in profile.about" :key="para">{{ para }}</p>
        </div>

        <div
          v-if="experience.length || !profile.education.draft"
          class="mt-10 space-y-4"
        >
          <h3 class="font-display text-xl font-extrabold">
            Experience & education
          </h3>
          <ol class="space-y-4">
            <li
              v-for="item in experience"
              :key="item.role + item.org"
              class="rounded-xl border-[3px] border-ink bg-paper p-4"
            >
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <p class="font-semibold">{{ item.role }} · {{ item.org }}</p>
                <p class="font-mono text-xs">{{ item.period }}</p>
              </div>
              <p class="mt-1 text-ink/80">{{ item.summary }}</p>
            </li>
            <li
              v-if="!profile.education.draft"
              class="rounded-xl border-[3px] border-ink bg-paper p-4"
            >
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <p class="font-semibold">
                  {{ profile.education.degree }} ·
                  {{ profile.education.school }}
                </p>
                <p class="font-mono text-xs">{{ profile.education.year }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="font-display text-xl font-extrabold">What I work with</h3>
        <div
          v-for="(group, i) in profile.skills"
          :key="group.group"
          class="rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-hard-sm"
        >
          <p class="font-mono text-xs font-semibold uppercase tracking-widest">
            {{ group.group }}
          </p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li
              v-for="skill in group.items"
              :key="skill"
              class="rounded-lg border-2 border-ink px-3 py-1 font-semibold"
              :class="chipColors[i % chipColors.length]"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
