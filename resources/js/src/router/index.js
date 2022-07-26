import {createRouter, createWebHistory} from 'vue-router'

// Main Views
import Main from '../../src/layouts/Main.vue'

// Web Pages
import IndexPage from '../../src/views/HomeIndex.vue'


// User Account Pages
import UserDashboard  from '../views/account/UsersDashboard.vue'
import MainView from '../views/account/UserMainView.vue'
import UserAccount from '../views/account/UserAccount.vue'
import UserFavorites from '../views/account/UserFavorites.vue'
import UserComplaints from '../views/account/UserComplaints.vue'
import UserAnnouncements from '../views/account/UserAnnouncements.vue'

// Objects Pages
import ObjectMain from '../views/objects/ObjectList.vue'
import Objects from '../views/objects/Objects.vue'
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
                    {
                        path: 'user/favorites',
                        name: 'userfavorites',
                        components: {
                            content: UserFavorites,
                        }
                    },
                    {
                        path: 'user/list/',
                        name: 'userannouncement',
                        //redirect: 'user/list/objects',
                        components: {
                            content: ObjectMain,
                        },
                        children: [
                            {
                                path: 'objects',
                                name: 'objects',
                                components: {
                                    objects: Objects,
                                },
                            },
                            {
                                path: 'objects/sales',
                                name: 'sales',
                                components: {
                                    objects: MainView,
                                },
                            },
                            {
                                path: 'objects/rent',
                                name: 'rent',
                                components: {
                                    objects: MainView,
                                },
                            },
                        ]
                    },
                    {
                        path: 'my-complaints',
                        name: 'mycomplaints',
                        components: {
                            content: UserComplaints,
                        }
                    },
                    
                ]
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router