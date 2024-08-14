<template>
    <nav class="bg-gray-800">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <router-link to="/" class="text-white font-bold text-2xl hover:text-gray-300 transition duration-200">Juan Frauca</router-link>
        <div class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md text-lg font-medium">Inicio</router-link>
          <router-link to="/projects" class="text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md text-lg font-medium">Proyectos</router-link>
          <!-- Más enlaces aquí -->
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path :class="menuOpen ? 'hidden' : 'block'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path :class="menuOpen ? 'block' : 'hidden'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div :class="menuOpen ? 'block' : 'hidden'" class="md:hidden">
        <router-link to="/" class="block text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-medium">Inicio</router-link>
        <router-link to="/projects" class="block text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-medium">Proyectos</router-link>
        <!-- Más enlaces aquí -->
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  }
  </script>
  
  <style>
  /* Aquí puedes agregar estilos personalizados adicionales si es necesario */
  </style>
  