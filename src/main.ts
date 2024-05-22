import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

/* add icons to the library */
library.add(faPersonSwimming)

// Create App
const app = createApp(App)

// App use
app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
