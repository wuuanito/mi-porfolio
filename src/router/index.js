import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import '../assets/tailwind.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router