<template>
  <div class="pt-16">
    <!-- Projects Header -->
    <header class="bg-white dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Projects Portfolio
        </h1>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
          A showcase of my development work with measurable business impact
        </p>
      </div>
    </header>

    <!-- Project Filters -->
    <section class="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3">
          <button 
            v-for="category in ['All', 'Python', 'Frontend', 'Data', 'Automation']" 
            :key="category"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              filterCategory === (category === 'All' ? null : category.toLowerCase())
                ? 'bg-primary text-primary-foreground'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
            @click="filterCategory = category === 'All' ? null : category.toLowerCase()"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Cards -->
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 animate-fadeIn"
            :style="{ animationDelay: index * 100 + 'ms' }"
          >
            <div class="relative h-56 bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1200\' height=\'675\' viewBox=\'0 0 1200 675\'%3E%3Crect width=\'1200\' height=\'675\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'600\' y=\'337.5\' font-size=\'36\' text-anchor=\'middle\' alignment-baseline=\'middle\' font-family=\'sans-serif\' fill=\'%239ca3af\'%3E1200 x 675%3C/text%3E%3C/svg%3E';"
              >
              
              <!-- Project Categories -->
              <div class="absolute top-3 right-3 flex flex-wrap gap-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-2 py-1 bg-black/70 text-white text-xs rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h3>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
              
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                {{ project.description }}
              </p>
              
              <!-- Business Impact Metrics -->
              <div
                v-if="project.metrics"
                class="mb-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-100 dark:border-green-800"
              >
                <h4 class="text-sm font-semibold text-green-800 dark:text-green-400 mb-2 flex items-center">
                  <ChartIcon class="h-4 w-4 mr-1" /> Business Impact
                </h4>
                <ul class="space-y-1">
                  <li
                    v-for="metric in project.metrics"
                    :key="metric"
                    class="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <ArrowUpRightIcon class="h-4 w-4 text-green-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span>{{ metric }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex space-x-3">
                <a 
                  v-if="project.demoUrl"
                  :href="project.demoUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex justify-center items-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  <PlayIcon class="h-4 w-4 mr-1" /> Live Demo
                </a>
                <a 
                  v-if="project.codeUrl"
                  :href="project.codeUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex justify-center items-center py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <GithubIcon class="h-4 w-4 mr-1" /> Code
                </a>
              </div>
            </div>
          </div>
          
          <!-- Empty State -->
          <div
            v-if="filteredProjects.length === 0"
            class="col-span-3 py-12 text-center"
          >
            <FolderXIcon class="h-16 w-16 mx-auto text-gray-400" />
            <h3 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              No projects found
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              No projects match the selected filter criteria.
            </p>
            <button 
              class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" 
              @click="filterCategory = null"
            >
              Show All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call To Action -->
    <section class="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Working Together?
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRightIcon class="ml-2 h-5 w-5" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onErrorCaptured } from 'vue';
// Import icons individually for better reliability
import { 
  ArrowUpRight as ArrowUpRightIcon,
  ArrowRight as ArrowRightIcon,
  BarChart4 as ChartIcon,
  Play as PlayIcon,
  Github as GithubIcon,
  FolderX as FolderXIcon
} from 'lucide-vue-next';

// Debugging - Log component mounting for troubleshooting
onMounted(() => {
  console.log('ProjectsView component mounted');
  console.log('Projects data:', projects);

});

// Capture any rendering errors
const error = ref(null);
onErrorCaptured((err) => {
  console.error('Error in ProjectsView:', err);
  error.value = err;
  return false; // Don't propagate to parent
});

// Filter state
const filterCategory = ref(null);

// Project data with business impact metrics
const projects = [
  {
    id: 1,
    title: "UniExplorer – SA University Program Recommender",
    description: "A semantic search system that enables students to find suitable university programs based on their results and interests.",
    image: "/projects/uniexplorer.jpg",
    technologies: ["Streamlit", "FAISS", "Python"],
    tags: ["Data", "Python"],
    metrics: [
      "Parsed SA university prospectus PDFs into a vector database for instant semantic search",
      "Enables students to enter results and view qualifying programs with application links",
      "Led a 4-member cross-functional team; groundwork laid for pilot with partner schools"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/yourusername/uniexplorer"
  },
  {
    id: 2,
    title: "Working Paper Automation Suite",
    description: "Comprehensive audit process automation tool that generates working papers, validates data, and streamlines Excel reconciliation.",
    image: "/projects/working-paper.jpg",
    technologies: ["Python", "Pandas", "NumPy", "OpenPyXL", "Tkinter"],
    tags: ["Automation", "Python", "Data"],
    metrics: [
      "Automated > 60% of audit working-paper prep, reducing turnaround from days to < 8 hours",
      "Integrated data cleaning, validation, and PDF export with Tkinter GUI for non-technical users",
      "Live demo convinced management to adopt across business unit and clinch a new external client"
    ],
    demoUrl: "",
    codeUrl: "https://github.com/yourusername/working-paper-automation"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Vue.js, Tailwind CSS, and shadcn-inspired components.",
    image: "/projects/portfolio.jpg",
    technologies: ["Vue.js", "Tailwind CSS", "Vite", "GSAP"],
    tags: ["Frontend"],
    metrics: [
      "Optimized for performance with 90+ Lighthouse score",
      "Implemented responsive design with modern UI/UX principles",
      "Designed for job hunting and freelancing opportunities"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/yourusername/portfolio"
  }
];

// Filtered projects based on selected category
const filteredProjects = computed(() => {
  if (!filterCategory.value) return projects;
  return projects.filter(project => 
    project.tags.some(tag => tag.toLowerCase() === filterCategory.value)
  );
});
</script>
