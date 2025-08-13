import { createApp } from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'
import AppImage from './components/AppImage.vue' // Updated import

const app = createApp(App)

app.config.globalProperties.$appname = 'My Vue App'

app.component('MyButton', MyButton)
app.component('AppImage', AppImage) // Updated registration

app.mount('#app')
