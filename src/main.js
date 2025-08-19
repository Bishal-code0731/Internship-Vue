import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const app = createApp(App)

app.use(router)  // this enables router
app.use(store)   // this enables vuex store

app.mount('#app')