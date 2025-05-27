<template>
  <div class="pt-16">
    <!-- Contact Header -->
    <header class="bg-white dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white text-center">Get In Touch</h1>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
          Ready to discuss opportunities, collaborations, or just want to say hello? Let's connect!
        </p>
      </div>
    </header>

    <!-- Contact Main Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 animate-fadeIn">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="name" class="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input 
                    id="name" 
                    v-model="form.name" 
                    type="text" 
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div class="space-y-2">
                  <label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input 
                    id="email" 
                    v-model="form.email" 
                    type="email" 
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div class="space-y-2">
                <label for="subject" class="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input 
                  id="subject" 
                  v-model="form.subject" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div class="space-y-2">
                <label for="message" class="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md transition-colors flex items-center justify-center"
                  :disabled="isSubmitting"
                >
                  <loader-2-icon v-if="isSubmitting" class="animate-spin h-5 w-5 mr-2" />
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
              
              <!-- Success/Error Message -->
              <div v-if="formStatus" :class="[
                'p-4 rounded-md text-sm flex items-start',
                formStatus.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
              ]">
                <component 
                  :is="formStatus.type === 'success' ? CheckCircleIcon : AlertCircleIcon"
                  class="h-5 w-5 mr-2 flex-shrink-0"
                  :class="formStatus.type === 'success' ? 'text-green-500' : 'text-red-500'"
                />
                <span>{{ formStatus.message }}</span>
              </div>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div class="flex flex-col">
            <!-- Contact Card -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 mb-8 animate-fadeIn animate-delay-200">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <mail-icon class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                    <a href="mailto:sewardrichardmupereri@gmail.com" class="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                      sewardrichardmupereri@gmail.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <phone-icon class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                    <a href="tel:+27696372803" class="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                      +27 69 637 2803
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <map-pin-icon class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                    <p class="text-lg font-medium text-gray-900 dark:text-white">
                      Pretoria, South Africa
                    </p>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Open to Remote / Hybrid</p>
                  </div>
                </div>
              </div>
              
              <!-- Social Links -->
              <div class="mt-8">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connect With Me</h3>
                <div class="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <linkedin-icon class="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <github-icon class="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <twitter-icon class="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Availability Card -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 animate-fadeIn animate-delay-400">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Availability</h2>
              
              <div class="space-y-4">
                <div class="flex items-center">
                  <check-circle-icon class="h-5 w-5 text-green-500 mr-3" />
                  <span class="text-gray-700 dark:text-gray-300">Open to full-time opportunities</span>
                </div>
                <div class="flex items-center">
                  <check-circle-icon class="h-5 w-5 text-green-500 mr-3" />
                  <span class="text-gray-700 dark:text-gray-300">Available for freelance projects</span>
                </div>
                <div class="flex items-center">
                  <check-circle-icon class="h-5 w-5 text-green-500 mr-3" />
                  <span class="text-gray-700 dark:text-gray-300">Interested in remote/hybrid roles</span>
                </div>
                <div class="flex items-center">
                  <clock-icon class="h-5 w-5 text-primary mr-3" />
                  <span class="text-gray-700 dark:text-gray-300">Response time: Within 24 hours</span>
                </div>
              </div>
              
              <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                <div class="flex items-start">
                  <calendar-icon class="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    <span class="font-medium">Currently job searching:</span> I'm actively looking for new opportunities in software engineering and automation. Let's connect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
  Loader2Icon,
  AlertCircleIcon
} from 'lucide-vue-next';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formStatus = ref(null);

const handleSubmit = async () => {
  // In a real implementation, this would send the form data to a backend service
  // For now, we'll simulate the API call with a timeout
  isSubmitting.value = true;
  formStatus.value = null;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success response
    formStatus.value = {
      type: 'success',
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
    };
    
    // Reset form
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  } catch (error) {
    // Error response
    formStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
