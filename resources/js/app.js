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
import VueScrollTo from 'vue-scrollto'

// Image Galleria
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import VueAgile from 'vue-agile'


const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(VueScrollTo, {
    container: "body",
    duration: 1000,
    easing: "linear",
})
app.directive('tooltip', Tooltip)
app.use(VueViewer)
app.use(VueAgile)
app.mount('#app')


