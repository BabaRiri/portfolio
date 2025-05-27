<template>
  <div :class="{ 'dark': isDark }">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isDark = ref(false);

onMounted(() => {
  // Check for saved theme preference or respect OS setting
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  }
  
  // Make theme toggle available globally
  window.toggleTheme = toggleTheme;
});

watch(isDark, (newValue) => {
  // Update localStorage and class when isDark changes
  localStorage.theme = newValue ? 'dark' : 'light';
  if (newValue) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

// Expose toggleTheme method
defineExpose({ toggleTheme });
</script>
