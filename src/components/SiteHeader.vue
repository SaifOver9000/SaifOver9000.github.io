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
  <header
    class="sticky top-0 z-40 border-b-[3px] border-ink bg-paper/95 backdrop-blur"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
      <a
        href="#top"
        class="flex items-center gap-2 font-display text-lg font-extrabold"
      >
        <span
          class="grid h-9 w-9 place-items-center rounded-lg border-[3px] border-ink bg-lemon shadow-hard-sm"
          >S</span
        >
        {{ profile.name }}
      </a>

      <nav class="hidden items-center gap-1 sm:flex" aria-label="Main">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-3 py-2 font-semibold hover:bg-lemon"
          >{{ item.label }}</a
        >
        <a
          v-if="profile.links.resume"
          :href="profile.links.resume"
          target="_blank"
          rel="noopener"
          class="btn ml-2 bg-pink px-4 py-2 text-sm shadow-hard-sm"
          >Résumé</a
        >
      </nav>

      <button
        class="rounded-lg border-[3px] border-ink bg-lemon px-3 py-1.5 font-semibold sm:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        {{ open ? "Close" : "Menu" }}
      </button>
    </div>

    <nav
      v-if="open"
      id="mobile-nav"
      class="border-t-[3px] border-ink sm:hidden"
      aria-label="Mobile"
    >
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        class="block border-b-2 border-ink/10 px-5 py-3 font-semibold"
        @click="open = false"
        >{{ item.label }}</a
      >
      <a
        v-if="profile.links.resume"
        :href="profile.links.resume"
        target="_blank"
        rel="noopener"
        class="block px-5 py-3 font-semibold text-pink"
        >Résumé</a
      >
    </nav>
  </header>
</template>
