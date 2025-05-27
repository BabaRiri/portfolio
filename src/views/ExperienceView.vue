<template>
  <div class="min-h-screen">
    <!-- Digital CV Header -->
    <header class="bg-white dark:bg-gray-900 py-12 mt-16 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center">
          <user-circle-icon class="h-20 w-20 text-primary mb-4" />
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white text-center">Seward Richard Mupereri</h1>
          <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Early-career Software Engineer skilled in full-stack development & AI-driven automation
          </p>
          <div class="mt-6 flex space-x-4">
            <a href="#experience" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200">
              <briefcase-icon class="-ml-1 mr-2 h-4 w-4" />
              Experience
            </a>
            <a href="#skills" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200">
              <cpu-icon class="-ml-1 mr-2 h-4 w-4" />
              Skills
            </a>
            <a href="#education" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200">
              <graduation-cap-icon class="-ml-1 mr-2 h-4 w-4" />
              Education
            </a>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Professional Summary Section -->
    <section id="summary" class="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center mb-12">
          <zap-icon class="h-10 w-10 text-primary mb-4" />
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center">Professional Summary</h2>
          <div class="mt-2 h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12 animate-fadeIn border-l-4 border-primary">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Early‑career Software Engineer skilled in full‑stack Python development, cloud infrastructure, and AI‑driven automation. Blend hands‑on coding with research‑oriented problem solving to turn complex, data‑intensive workflows into reliable, production‑ready systems. Recent projects include a working‑paper automation suite that cut manual audit effort by 60%, secured a new client contract, and on-boarded 16 auditors in one week. Passionate about integrating machine‑learning and large‑language‑model techniques into development pipelines to accelerate delivery, raise product quality, and unlock measurable ROI.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Key Achievements -->
          <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 animate-fadeIn animate-delay-100 h-full">
            <div class="flex items-center mb-6">
              <award-icon class="h-8 w-8 text-primary mr-3" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Key Achievements</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <check-circle-icon class="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span class="text-gray-900 dark:text-white font-medium">Productivity Boost 🚀</span>
                  <p class="text-gray-700 dark:text-gray-300">Automated 60% of audit working-paper prep, reducing turnaround from days to &lt; 8 hours</p>
                </div>
              </li>
              <li class="flex items-start">
                <check-circle-icon class="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span class="text-gray-900 dark:text-white font-medium">Client Acquisition 🤝</span>
                  <p class="text-gray-700 dark:text-gray-300">Helped secure new client contract through tech demos and solution presentations</p>
                </div>
              </li>
              <li class="flex items-start">
                <check-circle-icon class="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span class="text-gray-900 dark:text-white font-medium">Team Empowerment 👥</span>
                  <p class="text-gray-700 dark:text-gray-300">Trained & onboarded 16 auditors in one week; achieved 100% adoption across two audit teams</p>
                </div>
              </li>
              <li class="flex items-start">
                <check-circle-icon class="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span class="text-gray-900 dark:text-white font-medium">Event Growth 📈</span>
                  <p class="text-gray-700 dark:text-gray-300">Secured 12 event sponsors, boosting revenue and lifting event attendance by 20%</p>
                </div>
              </li>
            </ul>
          </div>
          
          <!-- Core Skills & Tools -->
          <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 animate-fadeIn animate-delay-200">
            <div class="flex items-center mb-6">
              <wrench-icon class="h-8 w-8 text-primary mr-3" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Core Skills & Tools</h3>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(skill, index) in skills" :key="skill.name" 
                   class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all">
                <component :is="skill.icon" class="h-8 w-8 mb-3" :class="skill.iconColor" />
                <span class="text-sm text-gray-700 dark:text-gray-300 font-medium text-center">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section id="experience" class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center mb-12">
          <briefcase-icon class="h-10 w-10 text-primary mb-4" />
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center">Professional Experience</h2>
          <div class="mt-2 h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-4 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded"></div>
          
          <!-- Timeline Items -->
          <div class="space-y-16">
            <!-- Job 1: Junior Software Engineer -->
            <div class="relative">
              <!-- Timeline Dot -->
              <div class="absolute left-4 md:left-16 transform -translate-x-1/2 -translate-y-4 w-10 h-10 rounded-full border-4 border-white dark:border-gray-800 bg-primary flex items-center justify-center z-10 shadow-lg">
                <code-icon class="h-5 w-5 text-white" />
              </div>
              
              <!-- Timeline Content -->
              <div class="ml-12 md:ml-32 mr-0 w-auto md:w-3/4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
                <div class="flex flex-col mb-4">
                  <div class="flex flex-col md:flex-row justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <span>Junior Software Engineer / IT Support</span>
                      <span class="ml-3 inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        Oct 2024 - Present
                      </span>
                    </h3>
                  </div>
                  <p class="text-gray-700 dark:text-gray-300 text-lg font-medium">RBR Group Pty Ltd • Pretoria</p>
                </div>
                
                <ul class="space-y-4 mt-6 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <rocket-icon class="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span class="">Invented and built the "WP2 – Working Paper Populator", a Python‑based system that generates working papers, shortcuts Excel reconciliation, and drives real‑time validation—boosting auditing productivity 60% and raising data accuracy.</span>
                  </li>
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <presentation-icon class="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Demoed the suite to prospects, helping leadership win a new client contract within the first quarter of deployment.</span>
                  </li>
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <users-icon class="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Trained & onboarded 16 auditors in one week; achieved 100% adoption across two audit teams.</span>
                  </li>
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <file-text-icon class="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Authored step‑by‑step SOPs and inline docstrings, ensuring reproducibility and smoother hand‑offs.</span>
                  </li>
                </ul>
                
                <div class="mt-6 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-xs">Python</span>
                  <span class="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-xs">FastAPI</span>
                  <span class="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-xs">Excel Automation</span>
                  <span class="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-xs">Data Validation</span>
                  <span class="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-xs">Technical Documentation</span>
                </div>
              </div>
            </div>
            
            <!-- Job 2: Business Development Intern -->
            <div class="relative">
              <!-- Timeline Dot -->
              <div class="absolute left-4 md:left-16 transform -translate-x-1/2 -translate-y-4 w-10 h-10 rounded-full border-4 border-white dark:border-gray-800 bg-secondary flex items-center justify-center z-10 shadow-lg">
                <line-chart-icon class="h-5 w-5 text-white" />
              </div>
              
              <!-- Timeline Content -->
              <div class="ml-12 md:ml-32 mr-0 w-auto md:w-3/4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
                <div class="flex flex-col mb-4">
                  <div class="flex flex-col md:flex-row justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <span>Business Development Intern</span>
                      <span class="ml-3 inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                        Jul 2024 - Sep 2024
                      </span>
                    </h3>
                  </div>
                  <p class="text-gray-700 dark:text-gray-300 text-lg font-medium">Bitcoin Events Ltd • Remote</p>
                </div>
                
                <ul class="space-y-4 mt-6 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <search-icon class="h-6 w-6 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Drove market research that surfaced five new partnership lanes within blockchain & crypto.</span>
                  </li>
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <users2-icon class="h-6 w-6 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Secured 12 event sponsors, boosting revenue and lifting event attendance by 20%.</span>
                  </li>
                  <li class="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                    <users-icon class="h-6 w-6 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Supported planning & execution of two 1,000+‑delegate conferences, liaising with cross‑functional teams.</span>
                  </li>
                </ul>
                
                <div class="mt-6 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-secondary/10 text-secondary font-medium rounded-full text-xs">Market Research</span>
                  <span class="px-3 py-1 bg-secondary/10 text-secondary font-medium rounded-full text-xs">Business Development</span>
                  <span class="px-3 py-1 bg-secondary/10 text-secondary font-medium rounded-full text-xs">Event Planning</span>
                  <span class="px-3 py-1 bg-secondary/10 text-secondary font-medium rounded-full text-xs">Blockchain & Crypto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Education Main Section -->
    <section id="education" class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Formal Education -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <graduation-cap-icon class="mr-3 h-7 w-7 text-primary" />
            Formal Education
          </h2>
          
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden animate-fadeIn">
            <div class="flex flex-col md:flex-row">
              <!-- University Logo/Image -->
              <div class="w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center">
                <div class="h-40 w-40 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src="/education/university-logo.jpg" 
                    alt="European University of Lefke" 
                    class="max-h-full"
                    onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'100\' y=\'100\' font-size=\'18\' text-anchor=\'middle\' alignment-baseline=\'middle\' font-family=\'sans-serif\' fill=\'%239ca3af\'%3EUNIVERSITY%3C/text%3E%3C/svg%3E';"
                  />
                </div>
              </div>
              
              <!-- Education Details -->
              <div class="w-full md:w-2/3 p-8">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">BSc Computer Engineering</h3>
                    <p class="text-lg text-gray-700 dark:text-gray-300">European University of Lefke</p>
                  </div>
                  <div class="mt-2 md:mt-0 text-right">
                    <span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      Sep 2020 - Jun 2024
                    </span>
                  </div>
                </div>
                
                <div class="mb-6">
                  <h4 class="text-md font-semibold text-gray-900 dark:text-white mb-2">Key Focus Areas:</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div class="flex items-center">
                      <check-circle-icon class="h-5 w-5 text-green-500 mr-2" />
                      <span class="text-gray-700 dark:text-gray-300 text-sm">Software Engineering</span>
                    </div>
                    <div class="flex items-center">
                      <check-circle-icon class="h-5 w-5 text-green-500 mr-2" />
                      <span class="text-gray-700 dark:text-gray-300 text-sm">Data Structures & Algorithms</span>
                    </div>
                    <div class="flex items-center">
                      <check-circle-icon class="h-5 w-5 text-green-500 mr-2" />
                      <span class="text-gray-700 dark:text-gray-300 text-sm">Computer Networks</span>
                    </div>
                    <div class="flex items-center">
                      <check-circle-icon class="h-5 w-5 text-green-500 mr-2" />
                      <span class="text-gray-700 dark:text-gray-300 text-sm">Embedded Systems</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="text-md font-semibold text-gray-900 dark:text-white mb-2">Leadership & Activities:</h4>
                  <div class="flex items-start">
                    <users-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <p class="text-gray-700 dark:text-gray-300 text-sm">
                      Vice President of the Mobile Application Club (2021/2022), where I led a team of 16 in hosting an campus AI event.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Certifications -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <award-icon class="mr-3 h-7 w-7 text-primary" />
            Professional Certifications
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Certification 1 -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeIn">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <cloud-icon class="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">AWS Certified Cloud Practitioner</h3>
                    <p class="text-sm text-primary">Amazon Web Services</p>
                  </div>
                </div>
                <div class="pl-16">
                  <div class="flex items-center mb-2">
                    <clock-icon class="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span class="text-sm text-gray-700 dark:text-gray-300">In Progress (Est. Completion: Aug 2025)</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Fundamental understanding of AWS Cloud services, architecture, security, and pricing.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Certification 2 -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeIn animate-delay-100">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                    <shield-icon class="h-6 w-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">Certified in Cybersecurity (CC)</h3>
                    <p class="text-sm text-primary">(ISC)²</p>
                  </div>
                </div>
                <div class="pl-16">
                  <div class="flex items-center mb-2">
                    <clock-icon class="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span class="text-sm text-gray-700 dark:text-gray-300">In Progress (Est. Completion: Sep 2025)</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Foundational cybersecurity principles, security best practices, and incident response.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Certification 3 -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeIn animate-delay-200">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <cpu-icon class="h-6 w-6 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">AWS AI Practitioner</h3>
                    <p class="text-sm text-primary">Amazon Web Services</p>
                  </div>
                </div>
                <div class="pl-16">
                  <div class="flex items-center mb-2">
                    <clock-icon class="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span class="text-sm text-gray-700 dark:text-gray-300">In Progress (Est. Completion: Oct 2025)</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Applied AI/ML techniques using AWS services for practical business applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Continuous Learning -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <book-open-icon class="mr-3 h-7 w-7 text-primary" />
            Continuous Learning
          </h2>
          
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 animate-fadeIn animate-delay-300">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Learning Category 1 -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <code-icon class="h-5 w-5 text-primary mr-2" />
                  Technical Skills
                </h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <chevron-right-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Advanced Python for Data Engineering</span>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Self-paced online course focusing on data pipelines and ETL processes</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <chevron-right-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Modern JavaScript & Frontend Frameworks</span>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Hands-on projects with React, Vue.js, and Next.js</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <chevron-right-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Cloud Architecture Patterns</span>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Building scalable, resilient systems on AWS</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <!-- Learning Category 2 -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <briefcase-icon class="h-5 w-5 text-primary mr-2" />
                  Professional Development
                </h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <chevron-right-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Technical Documentation & Communication</span>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Creating clear, accessible documentation for technical products</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <chevron-right-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Agile Project Management</span>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Implementing Scrum and Kanban methodologies in development teams</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <chevron-right-icon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Business Analysis for Developers</span>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Translating business requirements into technical specifications</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Spotlight Section -->
    <section id="skills" class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center mb-12">
          <cpu-icon class="h-10 w-10 text-primary mb-4" />
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center">Technical Skills</h2>
          <div class="mt-2 h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Development Skills -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <code-icon class="h-8 w-8 text-primary mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Development</h3>
            </div>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>Python & JavaScript</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>Full-Stack (FastAPI & React)</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>Pandas & NumPy</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>Streamlit & Tkinter</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>OpenPyXL</span>
              </li>
            </ul>
          </div>
          
          <!-- Infrastructure Skills -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <server-icon class="h-8 w-8 text-secondary mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Infrastructure</h3>
            </div>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span>AWS</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span>Git Version Control</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span>SQL Databases</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span>Linux</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span>Power Automate</span>
              </li>
            </ul>
          </div>
          
          <!-- AI & Advanced Skills -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <brain-icon class="h-8 w-8 text-purple-500 mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">AI & Advanced</h3>
            </div>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span>LangChain & LLMs</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span>Prompt Engineering</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span>Data Analysis</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span>Process Optimization</span>
              </li>
              <li class="flex items-center">
                <badge-check-icon class="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span>Technical Documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
          <div class="mb-6 md:mb-0">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Let's Connect</h2>
            <p class="text-gray-600 dark:text-gray-400 mt-2">Interested in discussing how my skills could benefit your team?</p>
          </div>
          <div class="flex space-x-4">
            <a href="/resume.pdf" download class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
              <download-icon class="h-5 w-5 mr-2" />
              Download CV
            </a>
            <router-link to="/contact" class="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-sm transition-colors flex items-center">
              <mail-icon class="h-5 w-5 mr-2" />
              Contact Me
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  // Basic icons
  BriefcaseIcon, 
  CheckCircleIcon, 
  CodeIcon, 
  UsersIcon, 
  TrendingUpIcon, 
  ChevronRightIcon, 
  UserCircleIcon, 
  ShieldIcon, 
  CpuIcon,
  BarChartIcon, 
  CloudIcon, 
  ServerIcon, 
  TableIcon, 
  BoxIcon, 
  GitBranchIcon, 
  DatabaseIcon,
  
  // New icons for enhanced UI
  ZapIcon,
  AwardIcon,
  WrenchIcon, // Replacing ToolIcon
  RocketIcon,
  PresentationIcon,
  FileTextIcon,
  LineChartIcon,
  SearchIcon,
  Users2Icon, // Replacing HandshakeIcon
  GraduationCapIcon,
  BadgeCheckIcon,
  BrainIcon,
  DownloadIcon,
  MailIcon,
  BookOpenIcon,
  ClockIcon
} from 'lucide-vue-next';

// Skills data
const skills = [
  { name: 'Python', icon: CodeIcon, iconColor: 'text-blue-500' },
  { name: 'JavaScript', icon: CodeIcon, iconColor: 'text-yellow-500' },
  { name: 'React', icon: CodeIcon, iconColor: 'text-blue-400' },
  { name: 'FastAPI', icon: ServerIcon, iconColor: 'text-red-500' },
  { name: 'Pandas/NumPy', icon: BarChartIcon, iconColor: 'text-green-500' },
  { name: 'AWS', icon: CloudIcon, iconColor: 'text-orange-400' },
  { name: 'SQL', icon: DatabaseIcon, iconColor: 'text-purple-500' },
  { name: 'Git', icon: GitBranchIcon, iconColor: 'text-orange-500' },
  { name: 'LangChain & LLMs', icon: BrainIcon, iconColor: 'text-purple-500' }
];
</script>
