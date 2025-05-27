<template>
  <footer class="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-12 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Seward Richard Mupereri</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Automation Engineer | Software Engineer | Junior Solutions Consultant</p>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Based in Pretoria, South Africa</p>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
          <div class="flex space-x-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
               class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
              <linkedin-icon class="h-5 w-5" />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
               class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
              <github-icon class="h-5 w-5" />
              <span class="sr-only">GitHub</span>
            </a>
            <a href="mailto:sewardrichardmupereri@gmail.com"
               class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
              <mail-icon class="h-5 w-5" />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <nav class="flex flex-col space-y-2">
            <router-link v-for="item in navItems" :key="item.name" :to="item.to"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              {{ item.name }}
            </router-link>
            <a href="#" @click.prevent="downloadResume" 
               class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Resume
            </a>
          </nav>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="text-gray-500 dark:text-gray-400 text-sm text-center">
          &copy; {{ new Date().getFullYear() }} Seward Richard Mupereri. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-vue-next';

const navItems = [
  { name: 'About', to: '/#about' },
  { name: 'Experience', to: '/experience' },
  { name: 'Projects', to: '/projects' },
  { name: 'Education', to: '/education' },
  { name: 'Contact', to: '/contact' }
];

const downloadResume = () => {
  // In production, link to actual resume file
  const resumeUrl = '/resume.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', 'Seward_Richard_Mupereri_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
