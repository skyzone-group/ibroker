import {createRouter, createWebHistory} from 'vue-router'

// Main Views
import Main from '../../src/layouts/Main.vue'
import Admin from '../../src/layouts/Admin.vue'
// Web Pages
import IndexPage from '../../src/views/HomeIndex.vue'
import CommercialPage from '../../src/views/Commercial.vue'
import RentPage from '../../src/views/Rent.vue'
import PartnersInfo from '../../src/views/PartnersPage.vue'
import RieltorHome from '../../src/views/RieltorHome.vue'
import RieltorInfo from '../../src/views/RieltorInfo.vue'
import Edit from '../../src/views/edit.vue'

// User Account Pages
import UserDashboard  from '../views/account/UsersDashboard.vue'
import MainView from '../views/account/UserMainView.vue'
import UserAccount from '../views/account/UserAccount.vue'
import UserFavorites from '../views/account/UserFavorites.vue'
import UserComplaints from '../views/account/UserComplaints.vue'
import UserAnnouncements from '../views/account/UserAnnouncements.vue'
import TestUpload from '../../components/TestUpload.vue'

// Partners Page
import Agents from '../views/partners/AgentsList.vue'
import Realtors from '../views/partners/RealtorsList.vue'
import Zastroyshiki from '../views/partners/DeveloperList.vue'

// Objects Pages
import ObjectMain from '../views/account/UserObjects.vue'

// New Object Pages
import AddObject from '../views/object/AddObject.vue'
import UpdateObject from '../views/object/UpdateObject.vue'
import ShowObject from '../views/object/ShowObject.vue'
import SearchObject from '../views/object/SearchObject.vue'
// 
import AddUser from '../views/account/UserFriends.vue'

// Object Single Page Details
import ObjectSinglePage from '../views/ObjectSinglePage.vue'

// Notifications
import Notifications from '../../src/layouts/Notifications.vue'
import Friendship from '../views/notifications/Friendship.vue'

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
                meta: {
                    reload: true,
                },
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
                path: '/agent-single',
                name: 'agentSingle',
                components: {
                    main: RieltorHome,
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
                path: 'user/list/objects',
                name: 'objects',
                components: {
                    content: ObjectMain,
                },
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
                    content: Notifications,
                },
            },
            {
                path: 'users',
                name: 'friends',
                components: {
                    content: AddUser,
                },
            },
        ]
    },
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

export default router