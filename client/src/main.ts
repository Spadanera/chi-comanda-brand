import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { it } from 'vuetify/locale'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
    locale: {
      locale: 'it',
      messages: {
        it
      }
    }
  })

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)

app.mount('#app')
