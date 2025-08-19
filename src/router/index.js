import { createRouter, createWebHistory } from 'vue-router'

// Components
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ContactPage from '../components/ContactPage.vue'
import MyUsers from '../components/MyUsers.vue'
import UserProfile from '../components/UserProfile.vue'
import UserSettings from '../components/UserSettings.vue'

// Routes
const routes = [
  { path: '/', component: HomePage },        // Home page
  { path: '/about', component: AboutPage },  // About page
  { path: '/contact', component: ContactPage },

  // Nested routes
  {
    path: '/users',
    component: MyUsers,  // Parent route
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'settings', component: UserSettings }
    ]
  }
]

// Router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
