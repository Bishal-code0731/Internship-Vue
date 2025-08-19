import { createRouter, createWebHistory} from 'vue-router'

// coponents import 
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ContactPage from '../components/ContactPage.vue'
import MyUsers     from '../components/MyUsers.vue'
import UserProfile from '../components/UserProfile.vue'
import UserSettings from '../components/UserSettings.vue'


//defining routes
const routes = [
    { path: '/', component: HomePage},
    { path: '/', component: AboutPage},
    {path: '/contact', component: ContactPage},
    
    // nested routes
    {
          path: '/users',
          component: MyUsers, // parent route
          children:[
            {path: 'profile', component: UserProfile},
            {path: 'settings', component: UserSettings}
          ]

    }

]
   // router instances 
   const router = createRouter({
    history: createWebHistory(),
    routes
   })

   export default router  