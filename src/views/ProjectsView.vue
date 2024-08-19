<template>
  <div class="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-extrabold text-gray-100 text-center mb-12">Mis Proyectos</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover object-center">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-100 mb-2">{{ project.title }}</h2>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap mb-4">
              <span v-for="tech in project.technologies" :key="tech" class="bg-blue-900 text-blue-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{{ tech }}</span>
            </div>
            <div class="mb-4">
              <span class="bg-purple-900 text-purple-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                Dificultad: {{ project.dificultad }}
              </span>
            </div>

            <div class="flex justify-between items-center">
              <a :href="project.github" target="_blank" class="text-blue-400 hover:text-blue-300 font-medium">
                <span class="flex items-center">
                  <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                  GitHub
                </span>
              </a>
              <a :href="project.demo" target="_blank" class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskTrackerImage from '@/assets/FuncionamientoTaskTracker.png'
import GitHubActivityImage from '@/assets/github.png'
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Task Tracker CLI',
          description: 'Task tracker es un proyecto utilizado para rastrear y gestionar tus tareas.',
          image: TaskTrackerImage,
          technologies: ['Node.js'],
          github: 'https://github.com/wuuanito/Task-Tracker.git',
          demo: 'https://replit.com/@juancore97/Task-tracker',
          dificultad: 'Facil'  // Puedes ajustar el valor según corresponda
        },
        {
          id: 2,
          title: 'GitHub Activity CLI',
          description: 'es una herramienta de línea de comandos (CLI) que permite obtener y visualizar la actividad reciente de cualquier usuario en GitHub directamente desde la terminal. Utilizando la API pública de GitHub.',
          image: GitHubActivityImage,
          technologies: ['Node.js'],
          github: 'https://github.com/wuuanito/GitHub-User-Activity.git',
          demo: 'https://replit.com/@juancore97/GitHub-User-Activity',
          dificultad: 'Facil'  // Puedes ajustar el valor según corresponda
        },
        // Añade más proyectos según sea necesario
      ]
    }
  }
}
</script>
