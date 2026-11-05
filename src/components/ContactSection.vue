<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile.js'

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <section id="contact" class="bg-pink">
    <div class="mx-auto max-w-6xl px-5 py-20">
      <p class="font-mono text-sm font-semibold uppercase tracking-widest">Contact</p>
      <h2 class="mt-2 font-display text-5xl font-extrabold leading-none sm:text-7xl">Let's talk.</h2>
      <p class="mt-6 max-w-xl text-lg leading-relaxed">
        I'm looking for software developer roles. If you're hiring, or just want to chat about something I built, I'd love to hear from you.
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a :href="`mailto:${profile.email}`" class="btn bg-lemon break-all">{{ profile.email }}</a>
        <button type="button" class="btn bg-white" @click="copyEmail">
          {{ copied ? 'Copied' : 'Copy email' }}
        </button>
        <a v-if="profile.links.linkedin" :href="profile.links.linkedin" target="_blank" rel="noopener" class="btn bg-mint">LinkedIn</a>
        <a v-if="profile.links.github" :href="profile.links.github" target="_blank" rel="noopener" class="btn bg-white">GitHub</a>
        <a v-if="profile.links.resume" :href="profile.links.resume" target="_blank" rel="noopener" class="btn bg-white">Résumé</a>
      </div>
      <p class="sr-only" aria-live="polite">{{ copied ? 'Email copied to clipboard' : '' }}</p>
    </div>
  </section>
</template>
