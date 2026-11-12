<script setup>
import { computed, ref } from "vue";
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.vue";

// Entries with draft: true stay hidden until they're filled in.
const experience = computed(() => profile.experience.filter((e) => !e.draft));
const imageUrl = (src) => `${import.meta.env.BASE_URL}${src}`;

// Lightbox: click a photo to see it full size. Native <dialog> handles
// Escape, focus trapping and the backdrop for us.
const lightbox = ref(null);
const current = ref(null);
function openImage(img) {
  current.value = img;
  lightbox.value?.showModal();
}
function closeImage() {
  lightbox.value?.close();
}
// Clicking the dimmed backdrop (outside the figure) closes it
function onBackdropClick(e) {
  if (e.target === lightbox.value) closeImage();
}
</script>

<template>
  <section
    v-if="experience.length"
    id="experience"
    class="border-b-2 border-dashed border-pencil/25"
  >
    <div class="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Where I've been"
        title="Experience"
        tape="tape-mint"
      />

      <ol class="mt-16 grid gap-10 md:grid-cols-2">
        <li
          v-for="(item, i) in experience"
          :key="item.role + item.org"
          class="scrap hover:rotate-0"
          :class="i % 2 ? 'rotate-1' : '-rotate-1'"
        >
          <span
            class="tape -top-3 left-6 -rotate-3"
            :class="i % 2 ? 'tape-mint' : ''"
          ></span>
          <div
            class="scrap-paper h-full px-6 pb-5 pt-6"
            :class="i % 2 ? 'torn-b' : 'torn-a'"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <p class="font-scribble text-xl font-bold">
                {{ item.role }} · {{ item.org }}
              </p>
              <p class="font-hand text-base text-pencil/70">
                {{ item.period }}
              </p>
            </div>
            <p class="mt-1 font-hand text-lg">{{ item.summary }}</p>

            <!-- Photos taped in under the note -->
            <div v-if="item.images?.length" class="mt-6 flex flex-wrap gap-5">
              <figure
                v-for="(img, j) in item.images"
                :key="img.src"
                class="scrap w-40 bg-white p-2 pb-1 hover:rotate-0 sm:w-44"
                :class="j % 2 ? 'rotate-2' : '-rotate-2'"
              >
                <span
                  class="tape -top-3 left-1/2 -translate-x-1/2"
                  :class="j % 2 ? 'tape-pink rotate-3' : 'tape-mint -rotate-3'"
                ></span>
                <button
                  type="button"
                  class="block w-full cursor-zoom-in"
                  :aria-label="`View larger: ${img.alt}`"
                  @click="openImage(img)"
                >
                  <img
                    :src="imageUrl(img.src)"
                    :alt="img.alt"
                    class="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
                <figcaption
                  v-if="img.caption"
                  class="pt-1 text-center font-scribble text-base"
                >
                  {{ img.caption }}
                </figcaption>
              </figure>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <!-- Full-size photo, pinned on top of a dimmed page -->
    <dialog
      ref="lightbox"
      class="m-auto max-h-none max-w-none overflow-visible bg-transparent p-5 backdrop:bg-pencil/80 backdrop:backdrop-blur-sm"
      @click="onBackdropClick"
      @close="current = null"
    >
      <figure v-if="current" class="scrap bg-white p-3 pb-2 sm:p-4 sm:pb-3">
        <span class="tape tape-mint -left-6 -top-3 -rotate-[30deg]"></span>
        <span class="tape tape-pink -right-6 -top-3 rotate-[30deg]"></span>
        <img
          :src="imageUrl(current.src)"
          :alt="current.alt"
          class="max-h-[80vh] max-w-[90vw] object-contain"
        />
        <figcaption
          class="flex items-center justify-between gap-6 pt-2 font-scribble text-xl"
        >
          <span>{{ current.caption || current.alt }}</span>
          <button
            type="button"
            class="paper-btn rotate-1 bg-lemon px-3 py-0.5 text-base"
            @click="closeImage"
          >
            Close
          </button>
        </figcaption>
      </figure>
    </dialog>
  </section>
</template>
