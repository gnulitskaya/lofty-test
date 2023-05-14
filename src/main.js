import './assets/main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'

const app = createApp(App);

// регистрация UI компонентов
Object.values(components).forEach(component => {
    app.component(component.name, component)
})

app.use(VueAxios, axios);
app.mount('#app');
