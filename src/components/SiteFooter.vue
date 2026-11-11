<script setup>
import { profile } from "../data/profile.js";
const year = new Date().getFullYear();
</script>

<template>
  <!-- Kraft paper strip along the bottom edge -->
  <footer class="border-t-2 border-dashed border-pencil/30 bg-kraft">
    <div
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 font-hand text-lg"
    >
      <p>© {{ year }} {{ profile.name }}</p>
      <p class="text-pencil/75">
        Cut, pasted and taped together with Vue 3, Vite and Tailwind CSS
      </p>
    </div>
  </footer>
</template>
