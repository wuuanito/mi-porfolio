<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <!-- About Section -->
    <section class="bg-gray-800 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-gray-100 text-center mb-12">Acerca de mí</h2>
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Text Section -->
          <div class="md:w-1/2 text-gray-300 leading-relaxed">
            <p class="mb-6">
              Profesional en el ámbito tecnológico, actualmente trabajando como desarrollador en Rioja Nature Pharma. Mi enfoque principal está en la gestión de ERP y la digitalización.
            </p>
            <p class="mb-6">
              Con una sólida formación en diversas áreas de la informática y una pasión por la tecnología, siempre estoy en busca de nuevos desafíos para seguir creciendo en mi carrera.
            </p>
            <p>
              Mi compromiso con el aprendizaje continuo y mi determinación para alcanzar mis metas me posicionan para lograr grandes éxitos en el campo de la tecnología de la información y la ingeniería de software.
            </p>
          </div>
          <!-- Image Section -->
          <div class="md:w-1/2">
            <img src="https://via.placeholder.com/400x300" alt="Juan Frauca" class="rounded-lg shadow-lg w-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
<section class="bg-gray-800 py-16">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-100 text-center mb-8">Habilidades</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div class="bg-white rounded shadow p-6 hover:bg-gray-100 transition">
        <img src="../assets/Node.svg" alt="Node.js" class="w-25 h-16 mx-auto mb-4" />    
        <h3 class="text-xl font-bold mb-2 text-gray-800">Node.js</h3>
        <p class="text-gray-600">Desarrollo de aplicaciones backend escalables y de alto rendimiento con Node.js y Express.</p>
      </div>
      <div class="bg-white rounded shadow p-6 hover:bg-gray-100 transition">
        <img src="../assets/angular.png" alt="Angular" class="w-16 h-16 mx-auto mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-800">Angular</h3>
        <p class="text-gray-600">Creación de SPAs robustas y dinámicas utilizando Angular y TypeScript.</p>
      </div>
      <div class="bg-white rounded shadow p-6 hover:bg-gray-100 transition">
        <img src="../assets/bootstrap.svg" alt="Bootstrap" class="w-16 h-16 mx-auto mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-800">Bootstrap</h3>
        <p class="text-gray-600">Diseño de interfaces responsivas y atractivas con Bootstrap 5 y Sass.</p>
      </div>
      <div class="bg-white rounded shadow p-6 hover:bg-gray-100 transition">
        <img src="../assets/java.png" alt="Java" class="w-30 h-16 mx-auto mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-800">Java</h3>
        <p class="text-gray-600">Desarrollo de aplicaciones empresariales robustas con Java .</p>
      </div>
      <div class="bg-white rounded shadow p-6 hover:bg-gray-100 transition">
        <img src="../assets/mysql.png" alt="MySQL" class="w-30 h-16 mx-auto mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-800">MySQL</h3>
        <p class="text-gray-600">Diseño e implementación de bases de datos relacionales eficientes con MySQL.</p>
      </div>
      <div class="bg-white rounded shadow p-6 hover:bg-gray-100 transition">
        <img src="../assets/postgres.webp" alt="PostgreSQL" class="w-30 h-16 mx-auto mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-800">PostgreSQL</h3>
        <p class="text-gray-600">Gestión de bases de datos avanzadas y optimización de consultas con PostgreSQL.</p>
      </div>
      <!-- Agrega más habilidades aquí -->
    </div>
  </div>
</section>
<section class="bg-gray-800 py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-gray-100 text-center mb-12">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Proyecto 1 -->
          <div class="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
    <img src="../assets/FuncionamientoTaskTracker.png" alt="Proyecto 1" class="w-full h-48 object-cover">
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Task Tracker CLI</h3>
        <p class="text-gray-300 mb-4">
            Task tracker es un proyecto utilizado para rastrear y gestionar tus tareas.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-blue-600 text-xs font-semibold px-2 py-1 rounded">Node.js</span>
        </div>
        <a href="https://replit.com/@juancore97/Task-tracker" target="_blank" class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Ver Demo
        </a>
        <a href="https://github.com/wuuanito/Task-Tracker.git" target="_blank" class="text-blue-400 hover:text-blue-300 font-medium">
            <span class="flex items-center">
                <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                GitHub
            </span>
        </a>
    </div>
</div>

          
          <!-- Proyecto 2 -->
         
        </div>
        
        <!-- Enlace para ver todos los proyectos -->
        <div class="text-center mt-12">
          <router-link to="/projects" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Ver todos los proyectos
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-700 py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-gray-100 text-center mb-12">Contáctame</h2>
        <div class="bg-gray-800 shadow-lg rounded-lg p-8 space-y-8">
          <!-- Contact Item -->
          <div class="flex items-center">
            <svg class="h-8 w-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C6.477 3 2 7.477 2 13s4.477 10 10 10 10-4.477 10-10S17.523 3 12 3zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <p class="text-gray-300 text-lg font-medium">
              <strong>Email:</strong> <a href="mailto:juanfrauca@outlook.com" class="text-blue-400 hover:underline">juanfrauca@outlook.com</a>
            </p>
          </div>
          <!-- Contact Item -->
          <div class="flex items-center">
            <svg class="h-8 w-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
            <p class="text-gray-300 text-lg font-medium">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/juan-frauca-sesma-48bba9264" target="_blank" class="text-blue-400 hover:underline">LinkedIn</a>
            </p>
          </div>
          <!-- Contact Item -->
          <div class="flex items-center">
            <svg class="h-8 w-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <p class="text-gray-300 text-lg font-medium">
              <strong>GitHub:</strong> <a href="https://github.com/wuuanito" target="_blank" class="text-blue-400 hover:underline">GitHub</a>
            </p>
          </div>
          <!-- Contact Item -->
          <div class="flex items-center">
            <svg class="h-8 w-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.23V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8.23c-1.11.32-2 1.28-2 2.57V19c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-3.2c0-1.29-.89-2.25-2-2.57zM6 16.5V7h2v9.5H6zm10.5 0H12V7h4.5v9.5zm4.5 0h-2V7h2v9.5z"/>
            </svg>
            <p class="text-gray-300 text-lg font-medium">
              <strong>Teléfono:</strong> <a href="tel:+34 638756015" class="text-blue-400 hover:underline">+34 638756015</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Connect Section -->
    <footer class="bg-gray-900 text-gray-100 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <!-- Brand and About Section -->
          <div class="text-center md:text-left mb-4 md:mb-0">
            <h2 class="text-2xl font-semibold">Juan Frauca</h2>
            <p class="mt-1 text-gray-400 text-xs">Desarrollador Backend | Especializado en Node.js</p>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-700 pt-4 mt-4 text-center">
          <p class="text-gray-500 text-xs">© 2024 Juan Frauca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import roadmapImage from '@/assets/roadmap.jpg'
export default {
  name: 'HomeView',
  data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        roadmapImage
  
      }
    },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío del formulario
      console.log('Formulario enviado:', this.form);
      // Limpiar el formulario
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>
