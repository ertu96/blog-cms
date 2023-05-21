import { library } from '@fortawesome/fontawesome-svg-core'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast, { PluginOptions } from 'vue-toastification'

import App from './App.vue'
import router from './router'

import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-toastification/dist/index.css'
import './style.css'

library.add(faRightToBracket)
library.add(faUserPlus)

const app = createApp(App)

const options: PluginOptions = {}

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(Toast, options)
app.use(router)

app.mount('#app')
