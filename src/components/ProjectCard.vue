<script setup>
import { computed } from "vue";

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
  // Position in the grid; used to alternate the tilt and torn edge.
  index: { type: Number, default: 0 },
});

// Full class names so Tailwind can find them at build time.
// Each accent is a sheet of coloured paper pasted onto the top of the card,
// with matching tape and tags.
const accents = {
  pink: { band: "bg-pink/25", tape: "tape-pink", tag: "tag-pink" },
  lemon: { band: "bg-lemon/70", tape: "tape-lemon", tag: "tag-lemon" },
  mint: { band: "bg-mint/45", tape: "tape-mint", tag: "tag-mint" },
  cobalt: { band: "bg-cobalt/15", tape: "tape-cobalt", tag: "tag-cobalt" },
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

const odd = computed(() => props.index % 2 === 1);
const tilt = computed(() => {
  if (props.featured) return "-rotate-[0.6deg]";
  return odd.value ? "rotate-1" : "-rotate-1";
});
const torn = computed(() => (odd.value ? "torn-b" : "torn-a"));
</script>

<template>
  <article class="scrap h-full hover:rotate-0" :class="tilt">
    <span class="tape -top-3 left-8 -rotate-6" :class="accent.tape"></span>
    <span
      v-if="featured"
      class="tape -top-2 right-10 rotate-3"
      :class="accent.tape"
    ></span>

    <div
      class="scrap-paper flex h-full flex-col"
      :class="[torn, featured ? 'lg:flex-row' : '']"
    >
      <!-- Coloured paper pasted on top: kicker, title and status -->
      <div
        class="flex flex-col justify-between gap-6 border-b-2 border-dashed border-pencil/25 p-6 pt-7"
        :class="[
          accent.band,
          featured ? 'lg:w-2/5 lg:border-b-0 lg:border-r-2 lg:p-8' : '',
        ]"
      >
        <div>
          <p class="font-hand text-sm uppercase tracking-widest text-pencil/70">
            {{ project.kicker }}
          </p>
          <h3
            class="mt-2 font-scribble font-bold leading-tight"
            :class="featured ? 'text-4xl sm:text-5xl' : 'text-3xl'"
          >
            {{ project.title }}
          </h3>
        </div>
        <span
          class="wobbly inline-flex w-fit items-center gap-2 bg-white/80 px-3 py-0.5 font-hand text-base"
        >
          <span
            class="h-2.5 w-2.5 rounded-full border border-pencil"
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
        <p
          class="font-hand leading-relaxed"
          :class="featured ? 'text-xl' : 'text-lg'"
        >
          {{ project.summary }}
        </p>

        <ul class="space-y-2">
          <li
            v-for="item in project.highlights"
            :key="item"
            class="flex gap-3 font-hand text-lg leading-snug"
          >
            <span
              aria-hidden="true"
              class="shrink-0 font-scribble text-xl font-bold leading-none text-pink"
              >✓</span
            >
            <span>{{ item }}</span>
          </li>
        </ul>

        <ul class="flex flex-wrap gap-2" aria-label="Tech stack">
          <li
            v-for="tech in project.stack"
            :key="tech"
            class="tag"
            :class="accent.tag"
          >
            {{ tech }}
          </li>
        </ul>

        <div class="mt-auto flex flex-wrap gap-4 pt-2">
          <a
            v-for="(link, i) in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="paper-btn px-4 py-1 text-lg"
            :class="i % 2 ? 'rotate-1 bg-white' : '-rotate-1 bg-lemon'"
            >{{ link.label }} ↗</a
          >
          <span v-if="!links.length" class="font-hand text-lg text-pencil/60"
            >Links coming soon</span
          >
        </div>
      </div>
    </div>
  </article>
</template>
