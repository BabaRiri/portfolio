<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-white dark:bg-gray-900 py-20 mt-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-fadeIn">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Seward Richard Mupereri
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Automation Engineer | Software Engineer | Junior Solutions Consultant
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Early-career Software Engineer skilled in full-stack Python development, cloud infrastructure, and AI-driven automation. Blend hands-on coding with research-oriented problem solving to turn complex, data-intensive workflows into reliable, production-ready systems.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="downloadResume" 
                class="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors">
                Download Resume
              </button>
              <router-link to="/projects" 
                class="border border-input hover:bg-accent hover:text-accent-foreground text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg text-center transition-colors">
                View Projects
              </router-link>
            </div>
          </div>
          <div class="flex justify-center animate-fadeIn animate-delay-300">
            <div class="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg animate-float">
              <!-- Replace with your actual image when available -->
              <img 
                src="/profile-placeholder.png" 
                alt="Seward Richard Mupereri" 
                class="w-full h-full object-cover"
                onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Crect width=\'400\' height=\'400\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'200\' y=\'200\' font-size=\'20\' text-anchor=\'middle\' alignment-baseline=\'middle\' font-family=\'sans-serif\' fill=\'%239ca3af\'%3E400 x 400%3C/text%3E%3C/svg%3E';"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            <FolderIcon class="inline-block mr-3 h-8 w-8 text-primary" />Featured Projects
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Highlighted work showcasing my skills and impact
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Cards -->
          <div 
            v-for="(project, index) in featuredProjects" 
            :key="project.id"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl overflow-hidden group hover:scale-120 transform transition-all duration-300 animate-fadeIn border border-gray-100 dark:border-gray-800"
            :style="{ animationDelay: index * 100 + 'ms' }"
          >
            <div class="relative h-56 bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover object-center transition-all duration-300"
                onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1200\' height=\'675\' viewBox=\'0 0 1200 675\'%3E%3Crect width=\'1200\' height=\'675\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'600\' y=\'337.5\' font-size=\'36\' text-anchor=\'middle\' alignment-baseline=\'middle\' font-family=\'sans-serif\' fill=\'%239ca3af\'%3E1200 x 675%3C/text%3E%3C/svg%3E';"
              />
              
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
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
              
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
              
              <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{{ project.description }}</p>
              
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
        </div>
        
        <div class="mt-12 text-center">
          <router-link to="/projects" 
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
            View All Projects
            <ArrowRightIcon class="ml-2 h-5 w-5" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Additional content can be added here if needed -->


    <!-- Call To Action Section -->
    <section class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in Working Together?</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm actively seeking new opportunities in software engineering and automation. Let's discuss how my skills can benefit your organization.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/contact" 
              class="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors">
              Get in Touch
            </router-link>
            <router-link to="/projects" 
              class="border border-input hover:bg-accent hover:text-accent-foreground text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg text-center transition-colors">
              Explore My Work
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { UserCircleIcon, CheckCircleIcon } from 'lucide-vue-next';
import { 
  CodeIcon, 
  DatabaseIcon, 
  ServerIcon, 
  BriefcaseIcon, 
  GlobeIcon, 
  TerminalIcon, 
  CloudIcon, 
  CpuIcon, 
  LayoutIcon,
  Folder as FolderIcon,
  Play as PlayIcon,
  Github as GithubIcon,
  ArrowRight as ArrowRightIcon,
  Shield as ShieldIcon
} from 'lucide-vue-next';

const skills = [
  { name: 'Python', icon: CodeIcon, iconColor: 'text-blue-500' },
  { name: 'JavaScript', icon: CodeIcon, iconColor: 'text-yellow-500' },
  { name: 'React', icon: LayoutIcon, iconColor: 'text-blue-400' },
  { name: 'FastAPI', icon: ServerIcon, iconColor: 'text-green-500' },
  { name: 'Pandas', icon: DatabaseIcon, iconColor: 'text-purple-500' },
  { name: 'NumPy', icon: TerminalIcon, iconColor: 'text-blue-600' },
  { name: 'AWS', icon: CloudIcon, iconColor: 'text-orange-500' },
  { name: 'Git', icon: BriefcaseIcon, iconColor: 'text-red-500' },
  { name: 'SQL', icon: DatabaseIcon, iconColor: 'text-blue-700' },
  { name: 'LLMs', icon: CpuIcon, iconColor: 'text-indigo-500' },
  { name: 'Linux', icon: TerminalIcon, iconColor: 'text-gray-700 dark:text-gray-300' },
  { name: 'REST APIs', icon: GlobeIcon, iconColor: 'text-teal-500' }
];

const certifications = [
  { 
    name: 'AWS Certified Cloud Practitioner', 
    icon: CloudIcon, 
    iconColor: 'text-orange-500',
    status: 'In Progress'
  },
  { 
    name: 'Certified in Cybersecurity (CC)', 
    icon: ShieldIcon, 
    iconColor: 'text-blue-500',
    status: 'In Progress'
  },
  { 
    name: 'AWS AI Practitioner', 
    icon: CpuIcon, 
    iconColor: 'text-green-500',
    status: 'In Progress'
  }
];

// Featured Projects data

// Featured Projects data
const featuredProjects = [
  {
    id: 1,
    title: "UniExplorer – SA University Program Recommender",
    description: "A semantic search system that enables students to find suitable university programs based on their results and interests.",
    image: "/projects/uniexplorer.jpg",
    technologies: ["Streamlit", "FAISS", "Python"],
    tags: ["Data", "Python"],
    demoUrl: "#",
    codeUrl: "https://github.com/yourusername/uniexplorer"
  },
  {
    id: 2,
    title: "Working Paper Automation Suite",
    description: "Comprehensive audit process automation tool that generates working papers, validates data, and streamlines Excel reconciliation.",
    image: "/projects/working-paper.jpg",
    technologies: ["Python", "Pandas", "NumPy"],
    tags: ["Automation", "Python"],
    demoUrl: "",
    codeUrl: "https://github.com/yourusername/working-paper-automation"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Vue.js, Tailwind CSS, and shadcn-inspired components.",
    image: "/projects/portfolio.jpg",
    technologies: ["Vue.js", "Tailwind CSS", "Vite"],
    tags: ["Frontend"],
    demoUrl: "#",
    codeUrl: "https://github.com/yourusername/portfolio"
  }
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
