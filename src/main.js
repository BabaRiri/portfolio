import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Create the app instance
const app = createApp(App)

// Configure router with debug logs
router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.path} to ${to.path}`)
  next()
})

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err)
  console.error('Component:', vm)
  console.error('Error Info:', info)
}

// Install router
app.use(router)

// Mount the application
app.mount('#app')

// Fix for navigation issues
window.addEventListener('click', (event) => {
  // Log navigation clicks for debugging
  if (event.target.tagName === 'A' || 
      event.target.closest('a') || 
      event.target.closest('router-link') ||
      event.target.closest('button')) {
    console.log('Navigation element clicked:', event.target)
    
    // Enhanced debugging for About Me navigation
    const aboutLink = event.target.textContent?.trim() === 'About Me' || 
                      event.target.closest('a')?.textContent?.trim() === 'About Me' ||
                      event.target.closest('router-link')?.textContent?.trim() === 'About Me';
                      
    if (aboutLink) {
      console.log('About Me link detected!');
      // Force navigation via window.location as fallback
      setTimeout(() => {
        if (window.location.pathname !== '/experience') {
          console.log('Forcing direct navigation to /experience');
          window.location.href = '/experience';
        }
      }, 100);
    }
  }
})

// Add global navigation helper for debugging
window.navigateTo = (path) => {
  console.log(`Direct navigation request to: ${path}`);
  router.push(path).catch(err => {
    console.error('Router navigation failed:', err);
    window.location.href = path;
  });
}
