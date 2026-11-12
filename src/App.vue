<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <a
    href="#projects"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-lemon focus:px-4 focus:py-2 focus:font-semibold"
  >
    Skip to projects
  </a>
  <SiteHeader />
  <main>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
