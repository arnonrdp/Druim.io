import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar)
app.use(router)

app.mount('#app')
