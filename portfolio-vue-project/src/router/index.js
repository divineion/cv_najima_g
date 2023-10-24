import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import AppHeaderVue from '../components/AppHeader.vue'
import AppFooterVue from '../components/AppFooter.vue'
import ContactVue from '../views/Contact.vue'
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
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/Skills',
      name: 'competences',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/Presentation',
      name: 'presentation',
      component: () => import('../views/Presentation.vue')
    },
    {
      path: '/Parcours',
      name: 'parcours',
      component: () => import('../views/Parcours.vue')
    }
  ]
})

export default router
