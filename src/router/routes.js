import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/UserProfile.vue'
import Timeline from '../views/Timeline.vue'
import AddExperience from '../views/AddExperience.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/user',
    name: 'user',
    component: UserProfile
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline
  },
  {
    path: '/experience',
    name: 'experience',
    component: AddExperience
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
