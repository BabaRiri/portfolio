<template>
  <nav class="bg-white dark:bg-gray-900 shadow-sm border-b fixed w-full top-0 z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
  <img src="/seward_logo_century_gothic.svg" alt="Seward Portfolio Logo" class="h-8 w-auto block dark:hidden" />
  <img src="/srm_logo_century_gothic_white.svg" alt="Seward Portfolio Logo (white)" class="h-8 w-auto hidden dark:block" />
</router-link>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <div class="flex items-baseline space-x-8">
            <!-- Standard router-links -->
            <router-link v-for="item in navItems" :key="item.name" :to="item.to"
              class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors" 
              active-class="text-primary-500 font-medium"
              @click="item.name === 'About Me' ? navigateToAbout($event) : null"
              :id="item.id">
              {{ item.name }}
            </router-link>
            
            
          </div>
          
          <button @click="toggleTheme" class="p-2 rounded-md focus:outline-none" aria-label="Toggle dark/light mode">
            <sun-icon v-if="isDarkMode" class="h-5 w-5 text-yellow-400" />
            <moon-icon v-else class="h-5 w-5 text-gray-700" />
          </button>
        </div>
        
        <div class="md:hidden flex items-center">
          <button @click="toggleTheme" class="p-2 mr-4 rounded-md focus:outline-none" aria-label="Toggle dark/light mode">
            <sun-icon v-if="isDarkMode" class="h-5 w-5 text-yellow-400" />
            <moon-icon v-else class="h-5 w-5 text-gray-700" />
          </button>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <menu-icon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <x-icon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    
    <div v-show="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link v-for="item in navItems" :key="item.name" :to="item.to"
          class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          active-class="text-primary-500 font-medium"
          @click="mobileMenuOpen = false">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const isDarkMode = ref(false);
const router = useRouter();

// Direct navigation function for About Me page
const navigateToAbout = (event) => {
  console.log('About Me link clicked');
  event.preventDefault(); // Prevent default to handle manually
  router.push('/experience').catch(err => {
    console.error('Navigation error:', err);
    // Fallback to direct URL navigation
    window.location.href = '/experience';
  });
};

// Universal direct navigation method
const directNavigate = (path) => {
  console.log(`Direct navigation to: ${path}`);
  try {
    if (window.navigateTo) {
      window.navigateTo(path);
    } else {
      router.push(path).catch(() => {
        window.location.href = path;
      });
    }
  } catch (error) {
    console.error('Navigation failed:', error);
    window.location.href = path;
  }
};

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'About Me', to: '/experience', id: 'about-link' },
  { name: 'Contact', to: '/contact' }
];

onMounted(() => {
  // Check current theme
  isDarkMode.value = document.documentElement.classList.contains('dark');
  
  // Listen for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        isDarkMode.value = document.documentElement.classList.contains('dark');
      }
    });
  });
  
  observer.observe(document.documentElement, { attributes: true });
});

const toggleTheme = () => {
  if (window.toggleTheme) {
    window.toggleTheme();
  }
};
</script>
