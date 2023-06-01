import { library } from '@fortawesome/fontawesome-svg-core'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast from 'vue-toastification'

import App from './App.vue'
import router from './router'

import {
  faImage,
  faMoon,
  faPenToSquare,
  faPlus,
  faRightToBracket,
  faSun,
  faTrash,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-toastification/dist/index.css'
import './style.css'

library.add(faRightToBracket)
library.add(faUserPlus)
library.add(faMoon)
library.add(faSun)
library.add(faPlus)
library.add(faTrash)
library.add(faPenToSquare)
library.add(faImage)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(VueQueryPlugin)
app.use(Toast)
app.use(router)

app.mount('#app')
