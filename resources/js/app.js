require('./bootstrap');

import { createApp } from 'vue'
import router from './src/router'
import App from './App.vue'
import PrimeVue from 'primevue/config';

// PrimeVue css
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css' //icons
// PrimeVue css

// PrimeVue
import Tooltip from 'primevue/tooltip';

//Global variables


const app = createApp(App)

//app.config.globalProperties.$IsLoggedIn = localStorage.getItem('token') ? true : false;

app.use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.mount('#app')


