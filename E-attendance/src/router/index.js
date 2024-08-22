import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/views/Lecturer/SignIn.vue'
import SignUp from '@/views/Admin/SignUp.vue'
import Home from '../views/Home.vue'
import OtpPage from '@/components/OTP/OtpPage.vue'

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
    { path: '/getotp', component: OtpPage,},
  ]
})

export default router
