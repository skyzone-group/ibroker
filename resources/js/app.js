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

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import VueAgile from 'vue-agile'

// Print
import VueHtmlToPaper from "../../public/js/vue-print/VueHtmlToPaper.js";


const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css',
        "public/css/custom.css"
    ],
    timeout: 1000, // default timeout before the print window appears
    autoClose: true, // if false, the window will not close after printing
    windowTitle: window.document.title, // override the window title
}

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
app.use(VueHtmlToPaper, options)
app.use(VueAgile)
app.mount('#app')


