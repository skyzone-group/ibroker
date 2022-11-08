import { createApp } from 'vue'
import Vuex from 'vuex'
import App from '../App.vue'
// modules
import UserInfo from './modules/userInfo'
import Object from './modules/object'
const app = createApp(App)
app.use(Vuex)

export default new Vuex.Store({
    modules: {
        UserInfo,
        Object
    }
})