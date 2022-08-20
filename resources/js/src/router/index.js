import {createRouter, createWebHistory} from 'vue-router'

// Main Views
import Main from '../../src/layouts/Main.vue'

// Web Pages
import IndexPage from '../../src/views/HomeIndex.vue'
import CommercialPage from '../../src/views/Commercial.vue'
import RentPage from '../../src/views/Rent.vue'
import AgentInfo from '../../src/views/AgentInfoPage.vue'
import PartnersInfo from '../../src/views/PartnersPage.vue'
import AgentSingle from '../../src/views/AgentSingle.vue'

// User Account Pages
import UserDashboard  from '../views/account/UsersDashboard.vue'
import MainView from '../views/account/UserMainView.vue'
import UserAccount from '../views/account/UserAccount.vue'
import UserFavorites from '../views/account/UserFavorites.vue'
import UserComplaints from '../views/account/UserComplaints.vue'
import UserAnnouncements from '../views/account/UserAnnouncements.vue'


// Partners Page
import Agents from '../views/partners/AgentsList.vue'
import Realtors from '../views/partners/RealtorsList.vue'
import Zastroyshiki from '../views/partners/DeveloperList.vue'
// Objects Pages
import ObjectMain from '../views/objects/ObjectList.vue'
import Objects from '../views/objects/Objects.vue'

// New Object Pages
import NewObjectMain from '../views/add_new_object/NewObjectMain.vue'

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
                path: '/commercial',
                name: 'siteCommercial',
                components: {
                    main: CommercialPage,
                }
            },
            {
                path: 'snyat/',
                name: 'siteRent',
                components: {
                    main: RentPage,
                }
            },
            {
                path: '/account/',
                redirect: '/index',
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
                    // {
                    //     path: '/razmestit-obyavlenie/',
                    //     name: 'newObject',
                    //     components: {
                    //         main: NewObjectMain
                    //     }
                    // }
                    
                ]
            },
            {
                path: 'razmestit-obyavlenie',
                name: 'newObject',
                components: {
                    main: NewObjectMain,
                },
            },
            {
                path: 'object',
                name: 'objectsinglepage',
                components: {
                    main: ObjectSinglePage,
                },
            },
            {
                path: '/agent-info',
                name: 'agentInfo',
                components: {
                    main: AgentInfo,
                },
            },
            {
                path: '/agent-single',
                name: 'agentSingle',
                components: {
                    main: AgentSingle,
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
            }
            
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router