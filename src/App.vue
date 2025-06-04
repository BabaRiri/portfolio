<template>
  <div class="min-h-screen flex flex-col">
    <ThemeProvider>
      <TheNavbar />
      <main class="flex-1">
        <router-view v-slot="{ Component }">
          <transition
            name="page"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <TheFooter />
    </ThemeProvider>
  </div>
</template>

<script setup>
import { ThemeProvider } from './components/ui/theme-provider';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
