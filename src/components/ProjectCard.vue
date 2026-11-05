<script setup>
import { computed } from "vue";

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
});

// Full class names so Tailwind can find them at build time.
const accents = {
  pink: { band: "bg-pink text-ink", chip: "bg-pink/20" },
  lemon: { band: "bg-lemon text-ink", chip: "bg-lemon/40" },
  mint: { band: "bg-mint text-ink", chip: "bg-mint/30" },
  cobalt: { band: "bg-cobalt text-white", chip: "bg-cobalt/15" },
};
const statuses = {
  live: { label: "Live", dot: "bg-mint" },
  "in-progress": { label: "In progress", dot: "bg-pink" },
  coursework: { label: "Coursework", dot: "bg-lemon" },
};

const accent = computed(() => accents[props.project.accent] ?? accents.lemon);
const status = computed(() => statuses[props.project.status] ?? statuses.live);
const links = computed(() =>
  [
    { label: "Live site", href: props.project.links?.live },
    { label: "Code", href: props.project.links?.code },
    { label: "Case study", href: props.project.links?.caseStudy },
  ].filter((l) => l.href),
);
</script>

<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-ink bg-white shadow-hard"
    :class="featured ? 'lg:flex-row' : ''"
  >
    <div
      class="flex flex-col justify-between gap-6 border-b-[3px] border-ink p-6"
      :class="[
        accent.band,
        featured ? 'lg:w-2/5 lg:border-b-0 lg:border-r-[3px] lg:p-8' : '',
      ]"
    >
      <div>
        <p
          class="font-mono text-xs font-semibold uppercase tracking-widest opacity-80"
        >
          {{ project.kicker }}
        </p>
        <h3
          class="mt-2 font-display font-extrabold leading-tight"
          :class="featured ? 'text-3xl sm:text-4xl' : 'text-2xl'"
        >
          {{ project.title }}
        </h3>
      </div>
      <span
        class="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-semibold text-ink"
      >
        <span
          class="h-2.5 w-2.5 rounded-full border border-ink"
          :class="status.dot"
        ></span>
        {{ status.label
        }}<template v-if="project.statusNote">
          · {{ project.statusNote }}</template
        >
      </span>
    </div>

    <div
      class="flex flex-1 flex-col gap-5 p-6"
      :class="featured ? 'lg:p-8' : ''"
    >
      <p class="leading-relaxed" :class="featured ? 'text-lg' : ''">
        {{ project.summary }}
      </p>

      <ul class="space-y-2">
        <li
          v-for="item in project.highlights"
          :key="item"
          class="flex gap-3 text-[15px] leading-snug"
        >
          <span
            aria-hidden="true"
            class="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-ink"
          ></span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <ul class="flex flex-wrap gap-2" aria-label="Tech stack">
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="rounded-md border-2 border-ink px-2 py-0.5 font-mono text-xs font-semibold"
          :class="accent.chip"
        >
          {{ tech }}
        </li>
      </ul>

      <div class="mt-auto flex flex-wrap gap-3 pt-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="btn bg-paper px-4 py-2 text-sm shadow-hard-sm"
          >{{ link.label }} ↗</a
        >
        <span v-if="!links.length" class="font-mono text-sm text-ink/60"
          >Links coming soon</span
        >
      </div>
    </div>
  </article>
</template>
