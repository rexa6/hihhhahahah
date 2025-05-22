import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'
import AboutMe from '@/components/pages/Aboutme.vue'
import Projects from '@/components/pages/Projects.vue'
import AdminPanel from '@/components/pages/AdminPanel.vue'
import { isLoggedIn } from '@/utils/auth.js'

const routes = [
  { path: '/', component: Home },
  { path: '/aboutme', component: AboutMe },
  { path: '/projects', component: Projects },
  {
    path: '/admin',
    component: AdminPanel,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn.value) {
        next()
      } else {
        next('/')
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
