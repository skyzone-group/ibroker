import {createRouter, createWebHistory} from 'vue-router'

// Main Views
import Main from '../../src/layouts/Main.vue'
import Admin from '../../src/layouts/Admin.vue'
import Agent from '../../src/layouts/Agent.vue'
// Web Pages
import IndexPage from '../../src/views/HomeIndex.vue'
import CommercialPage from '../../src/views/Commercial.vue'
import RentPage from '../../src/views/Rent.vue'
import PartnersInfo from '../../src/views/PartnersPage.vue'
import RieltorInfo from '../../src/views/RieltorInfo.vue'
import Edit from '../../src/views/edit.vue'

// User Account Pages
import UserDashboard  from '../views/account/UsersDashboard.vue'
import MainView from '../views/account/UserMainView.vue'
import UserAccount from '../views/account/UserAccount.vue'
import UserFavorites from '../views/account/UserFavorites.vue'
import UserComplaints from '../views/account/UserComplaints.vue'
import UserNotifications from '../views/account/UserNotifications.vue'
import UserAnnouncements from '../views/account/UserAnnouncements.vue'
import TestUpload from '../../components/TestUpload.vue'

// Partners Page
import Agents from '../views/partners/AgentsList.vue'
import Realtors from '../views/partners/RealtorsList.vue'
import Zastroyshiki from '../views/partners/DeveloperList.vue'


// Agent Pages
import HomePage from '../views/agent/HomePage.vue'
import ShowObjectAgent from '../views/agent/ShowObject.vue'

// Objects Pages
import ObjectMain from '../views/account/UserObjects.vue'

// New Object Pages
import AddObject from '../views/object/AddObject.vue'
import UpdateObject from '../views/object/UpdateObject.vue'
import ShowObject from '../views/object/ShowObject.vue'
import SearchObject from '../views/object/SearchObject.vue'
import UserObjects from '../views/object/UserObjects.vue'
// 
import AddUser from '../views/account/UserFriends.vue'

// Object Single Page Details
import ObjectSinglePage from '../views/ObjectSinglePage.vue'

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
                path: '/edit',
                components: {
                    main: Edit,
                },
            },
            {
                path: '/commercial',
                name: 'siteCommercial',
                components: {
                    main: CommercialPage,
                }
            },
            {
                path: '/snyat',
                name: 'siteRent',
                components: {
                    main: RentPage,
                }
            },
            {
                path: '/razmestit-obyavlenie',
                name: 'newObject',
                components: {
                    main: AddObject,
                },
                meta: {
                    reload: true,
                },
            },
            {
                path: '/adding/object/edit/:id',
                name: 'editObject',
                components: {
                    main: UpdateObject,
                },
                meta: {
                    reload: true,
                },
            },
            {
                path: '/show/object/:type_deal/:type/:id',
                name: 'showObject',
                components: {
                    main: ShowObject,
                },
                meta: (router) => ({ title: 'Team Member' + router.params.type_deal}) 
            },
            {
                path: '/agent/:id',
                name: 'userObjects',
                components: {
                    main: UserObjects,
                }
            },
            {
                path: '/search',
                name: 'SearchObject',
                components: {
                    main: SearchObject,
                },
            },
            {
                path: '/object',
                name: 'objectsinglepage',
                components: {
                    main: ObjectSinglePage,
                },
            },
            {
                path: '/agent-info',
                name: 'agentInfo',
                components: {
                    main: RieltorInfo,
                },
            },
            {
                path: '/partners',
                name: 'partnersInfo',
                components: {
                    main: PartnersInfo,
                },
                children: [
                    {
                        path: 'agents',
                        name: 'agents',
                        components: {
                            partners: Agents
                        }
                    },
                    {
                        path: 'realtors',
                        name: 'realtors',
                        components: {
                            partners: Realtors
                        }
                    },
                    {
                        path: 'zastroyshiki',
                        name: 'zastroyshiki',
                        components: {
                            partners: Zastroyshiki
                        }
                    }
                ]
            },
            
        ]
    },
    {
        path: '/account/',
        name: 'siteAdmin',
        component: Admin,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'summary',
                name: 'summary',
                components: {
                    content: MainView,
                },
            },
            {
                path: 'profile',
                name: 'myaccount',
                components: {
                    content: UserAccount,
                },
                meta: { title: 'Профиль' }
            },
            {
                path: 'user/favorites',
                name: 'userfavorites',
                components: {
                    content: UserFavorites,
                },
                meta: { title: 'Избранное' }
            },
            {
                path: 'user/list/objects',
                name: 'myObjects',
                components: {
                    content: ObjectMain,
                },
                meta: { 
                    title: 'Мои объявления',
                    metaTags: [
                        {
                        name: 'description',
                        content: 'The home page of our example app.'
                        },
                        {
                        property: 'og:description',
                        content: 'The home page of our example app.'
                        }
                    ]
                }
            },
            {
                path: 'my-complaints',
                name: 'mycomplaints',
                components: {
                    content: UserComplaints,
                }
            },
            {
                path: 'notifications',
                name: 'notifications',
                components: {
                    content: UserNotifications,
                },
                meta: { title: 'Уведомления' }
            },
            {
                path: 'users',
                name: 'friends',
                components: {
                    content: AddUser,
                },
                meta: { title: 'Мои друзъя' }
            },
        ]
    },
    // {
    //     path: '/agent/',
    //     name: 'agentIndex',
    //     component: Agent,
    //     children: [
    //         {
    //             path: 'index',
    //             name: 'agentHome',
    //             components: {
    //                 agent: HomePage,
    //             },
    //         },
    //     ]
    // },
    {
        path: '/rieltor/:id',
        name: 'agentHome',
        component: HomePage,
    },
    {
        path: '/rieltor/:id/show/:type_deal/:type/:object_id',
        name: 'agentObject',
        component: ShowObjectAgent,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise((resolve)=>{
            setTimeout(() => resolve({top: 0}), 300);
        })
    },
})

// router.afterEach((to, from) => {

//     document.title = to.meta && to.meta.title ? to.meta.title : 'iBroker - Умный поиск недвижимость в Ташкенте'; // You can add a default here

//     Array.from(document.querySelectorAll('[data-vue-meta]')).map(el => el.parentNode.removeChild(el));

//     if (to.meta && to.meta.metaTags) {
//         to.meta.metaTags.map(tagDef => {
//             let tag = document.createElement('meta');

//             Object.keys(tagDef).forEach(key => tag.setAttribute(key, tagDef[key]));

//             tag.setAttribute('data-vue-meta', '');

//             return tag;
//         }).forEach(tag => document.head.appendChild(tag));
//     }
// });


export default router