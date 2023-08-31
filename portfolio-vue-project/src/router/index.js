import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import AppHeaderVue from '../components/AppHeader.vue'
import AppFooterVue from '../components/AppFooter.vue'
import ContactVue from '../views/Contact.vue'
import ExperienceVue from '../views/Experience.vue'
import PresentationVue from '../views/Presentation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path: '/skills',
      name: 'competences',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: () => import('../views/Presentation.vue')
    },
    {
      path: '/formation',
      name: 'formation',
      component: () => import('../views/Formation.vue')
    }
  ]
})

export default router
