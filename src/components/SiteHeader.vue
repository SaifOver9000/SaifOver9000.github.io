<script setup>
import { ref } from "vue";
import { profile } from "../data/profile.js";

const open = ref(false);
const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <!-- A strip of kraft paper taped across the top of the page -->
  <header
    class="sticky top-0 z-40 border-b-2 border-dashed border-pencil/30 bg-kraft/95 backdrop-blur"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5"
    >
      <a
        href="#top"
        class="group flex items-center gap-3 font-scribble text-2xl font-bold"
      >
        <span
          class="scrap grid h-9 w-9 -rotate-6 place-items-center bg-lemon font-scribble text-xl font-bold group-hover:rotate-0"
          aria-hidden="true"
          >S</span
        >
        {{ profile.name }}
      </a>

      <nav class="hidden items-center gap-1 sm:flex" aria-label="Main">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="px-3 py-1 font-hand text-xl decoration-pink decoration-wavy underline-offset-4 hover:underline"
          >{{ item.label }}</a
        >
        <a
          v-if="profile.links.resume"
          :href="profile.links.resume"
          target="_blank"
          rel="noopener"
          class="paper-btn ml-2 rotate-1 bg-white px-4 py-1 text-lg"
          >Résumé</a
        >
      </nav>

      <button
        class="paper-btn -rotate-1 bg-lemon px-4 py-1 text-lg sm:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        {{ open ? "Close" : "Menu" }}
      </button>
    </div>

    <!-- Dropdown on a sheet of notebook paper -->
    <nav
      v-if="open"
      id="mobile-nav"
      class="lined border-t-2 border-dashed border-pencil/30 pb-2 pt-1 sm:hidden"
      aria-label="Mobile"
    >
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        class="block py-1 pl-14 pr-5 font-hand text-xl leading-8"
        @click="open = false"
        >{{ item.label }}</a
      >
      <a
        v-if="profile.links.resume"
        :href="profile.links.resume"
        target="_blank"
        rel="noopener"
        class="block py-1 pl-14 pr-5 font-hand text-xl leading-8 underline decoration-pink decoration-wavy underline-offset-4"
        >Résumé</a
      >
    </nav>
  </header>
</template>
