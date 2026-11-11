<script setup>
import { ref } from "vue";
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.vue";

const copied = ref(false);
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    window.location.href = `mailto:${profile.email}`;
  }
}
</script>

<template>
  <!-- A big sheet of pink paper pasted across the bottom of the page -->
  <section id="contact" class="bg-pink/30">
    <div
      class="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center"
    >
      <div class="space-y-8">
        <SectionHeading kicker="Contact" title="Let's talk." tape="tape-pink" />

        <div class="scrap max-w-md rotate-1 hover:rotate-0">
          <span
            class="tape tape-mint -top-3 left-1/2 -translate-x-1/2 rotate-2"
          ></span>
          <p
            class="scrap-paper lined torn-b pb-6 pl-14 pr-6 pt-6 font-hand text-xl leading-8"
          >
            I'm looking for software developer roles. If you're hiring, or just
            want to chat about something I built, I'd love to hear from you.
          </p>
        </div>
      </div>

      <!-- Links as a pile of hand-cut paper tags -->
      <div class="flex flex-wrap items-center gap-5 lg:justify-end">
        <a
          :href="`mailto:${profile.email}`"
          class="paper-btn -rotate-2 bg-lemon break-all"
          >{{ profile.email }}</a
        >
        <button
          type="button"
          class="paper-btn rotate-1 bg-white"
          @click="copyEmail"
        >
          {{ copied ? "Copied" : "Copy email" }}
        </button>
        <a
          v-if="profile.links.linkedin"
          :href="profile.links.linkedin"
          target="_blank"
          rel="noopener"
          class="paper-btn -rotate-1 bg-mint/70"
          >LinkedIn</a
        >
        <a
          v-if="profile.links.github"
          :href="profile.links.github"
          target="_blank"
          rel="noopener"
          class="paper-btn rotate-2 bg-white"
          >GitHub</a
        >
        <a
          v-if="profile.links.resume"
          :href="profile.links.resume"
          target="_blank"
          rel="noopener"
          class="paper-btn -rotate-1 bg-kraft/80"
          >Résumé</a
        >
      </div>
      <p class="sr-only" aria-live="polite">
        {{ copied ? "Email copied to clipboard" : "" }}
      </p>
    </div>
  </section>
</template>
