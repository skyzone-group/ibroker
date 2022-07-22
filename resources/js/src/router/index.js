import {createRouter, createWebHistory} from 'vue-router'

// Main Views
import Main from '../../src/layouts/Main.vue'

// Web Pages
import IndexPage from '../../src/views/HomeIndex.vue'


// User Account Pages
import UserDashboard  from '../views/account/UsersDashboard.vue'
import MainView from '../views/account/UserMainView.vue'
import UserAccount from '../views/account/UserAccount.vue'

const routes = [
    {
        path: '/',
        name: 'siteIndex',
        component: Main,
        redirect: '/index',
        children: [
            {
                path: '/index',
                components: {
                    main: IndexPage,
                },
            },
            {
                path: '/account/',
                components: {
                    main: UserDashboard,
                },
                children: [
                    {
                        path: 'summary',
                        name: 'summary',
                        components: {
                            content: MainView,
                        }
                    },
                    {
                        path: 'profile',
                        name: 'myaccount',
                        components: {
                            content: UserAccount,
                        }
                    },
                ]
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router