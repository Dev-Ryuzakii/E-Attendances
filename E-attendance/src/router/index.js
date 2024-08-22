import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/components/Lecturer/SignIn.vue'
import SignUp from '@/components/Admin/SignUp.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/signup', component: SignUp, },
    { path: '/signin', component: SignIn, },

  ]
})

export default router
