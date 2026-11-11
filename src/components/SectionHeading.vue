<script setup>
// Section title pasted down the same way as the hero headline:
// a small kraft label for the kicker and a torn white strip for the title.
defineProps({
  title: { type: String, required: true },
  kicker: { type: String, default: "" },
  // Tape colour on the title strip: '', 'tape-pink', 'tape-mint', ...
  tape: { type: String, default: "" },
});
</script>

<template>
  <div class="flex flex-col items-start gap-5">
    <div v-if="kicker" class="scrap inline-block -rotate-2">
      <span class="tape tape-mint -left-6 top-0.5 w-14 -rotate-12"></span>
      <p
        class="scrap-paper torn-b bg-kraft px-5 py-1.5 font-hand text-base uppercase tracking-widest"
      >
        {{ kicker }}
      </p>
    </div>

    <div class="scrap inline-block rotate-1 hover:rotate-0">
      <span class="tape -top-3 left-6 -rotate-6" :class="tape"></span>
      <h2
        class="scrap-paper torn-a px-6 pb-4 pt-6 font-scribble text-5xl font-bold leading-none sm:px-8 sm:text-6xl"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>
