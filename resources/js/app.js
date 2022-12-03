require('./bootstrap');

import { createApp } from 'vue'
import router from './src/router'
import store from './store'
import App from './App.vue'
import PrimeVue from 'primevue/config';

// PrimeVue css
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css' //icons
import 'primevue/resources/primevue.min.css'  
// PrimeVue css

// PrimeVue
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice';
import VueScrollTo from 'vue-scrollto'
// Number format
import VueNumberFormat from 'vue-number-format'
// Vue Share with social networks
import VueSocialSharing from 'vue-social-sharing'


import VueHtmlToPaper from "../../public/js/vue-print/VueHtmlToPaper.js";
import VueCountdown from '@chenfengyuan/vue-countdown';
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
import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';

import VueEasyLightbox from 'vue-easy-lightbox'
// you need to import css yourself
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

// router.beforeEach( (to, from, next) => {
//     window.scrollTo(0,0);
//     next(true);
// });


function isLoggedIn(){
    return localStorage.getItem('token');
}

router.beforeEach((to, from, next) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(!isLoggedIn()){
            next({
                path: '/',
            })
        } else{
            next();
        }
    }else{
        next();
    }
})

const app = createApp(App)
//app.config.globalProperties.$IsLoggedIn = localStorage.getItem('token') ? true : false;
app.use(router)
app.use(store)
app.use(PrimeVue)
app.use(VueScrollTo, {
    container: "body",
    duration: 1000,
    easing: "linear",
})
app.component(VueCountdown.name, VueCountdown);
app.directive('tooltip', Tooltip)
app.use(VueHtmlToPaper, options)
app.use(DropZone)
app.use(VueEasyLightbox)
app.use(ToastService)
app.use(VueNumberFormat, {precision: '', nullValue: '', prefix: '$', decimal: ',', thousand: ' '})
app.use(VueSocialSharing)
app.mount('#app')


