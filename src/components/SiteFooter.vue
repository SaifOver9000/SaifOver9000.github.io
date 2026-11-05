<script setup>
import { profile } from '../data/profile.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-[3px] border-ink bg-ink text-white">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 font-mono text-sm">
      <p>© {{ year }} {{ profile.name }}</p>
      <p class="text-white/70">Built with Vue 3, Vite and Tailwind CSS</p>
    </div>
  </footer>
</template>
