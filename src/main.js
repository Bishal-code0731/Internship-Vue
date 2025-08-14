import {createApp} from 'vue'
import App from './App.vue'
import MyGlobalComponent from './components/MyGlobalComponent.vue'

const app = createApp(App)

app.component('my-global-component', MyGlobalComponent)

app.mount('#app')