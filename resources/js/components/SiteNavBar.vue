<template>
    <header class="header__navbar">
        <div class="nabvar">
            <div class="header__nav-container">
                <!-- hamburger menu icon -->
                <div id="navigation-icon" v-if="mobileView" class="hamburger_block d-flex align-items-center">
                    <button @click="showNav = !showNav" class="hamburger_block-btn">
                        <i class="feather icon-menu"></i>
                    </button>
                </div>
                <!-- hamburger menu icon -->
                
                <a href="#!" class="nabvar__block-logo">
                    LOGO
                </a>
                <!-- Menu View start -->
                    <nav v-if="!mobileView">
                        <ul class="mb-0 navbar-ul">
                            <li class="navbar-ul-li">
                                <router-link to="/rent">Аренда</router-link>
                            </li>
                            <li class="navbar-ul-li">
                                <router-link to="/sell">Продажа</router-link>
                            </li>
                            <li class="navbar-ul-li">
                                <router-link to="/test">Новостройки</router-link>
                            </li>
                            <li class="navbar-ul-li">
                                <router-link to="/tdwdwest">Коммерческая</router-link>
                            </li>
                            <li class="navbar-ul-li">
                                <router-link to="/dwdw">Ипотека</router-link>
                            </li>
                        </ul>
                    </nav>
                <!-- Menu View end -->
                
                <!-- Mobile menu start -->
                    <div  class="header_mobile_menu" :class="{'header_mobile_menu-active' : showNav}">
                        <div class="header_mobile_menu_wrapper" :class="{'header_mobile_menu_wrapper-active' : showNav}">
                            <button @click="showNav = !showNav" class="btn_close"></button>
                            <nav class="header_mobile_menu-nav">
                                <ul class="m-0 p-0 list-unstyled">
                                    <li v-if="loggedIn === false" class="header_mobile_menu-nav-ul__li">
                                        <a @click="showNav = !showNav" data-toggle="modal" data-target="#animation" href="#!" class="logout">
                                            <div class="enter_icon"></div>
                                            Войти
                                        </a>
                                    </li>
                                    <li  v-else class="header_mobile_menu-nav-ul__li">
                                        <a href="#!" class="logout align-items-center">
                                            <div class="avatar_mob mr-2">
                                                <img src="../../../public/images/avatar.jpg" alt="">
                                            </div>
                                            <div class="avatar_name_id">
                                                <p class="mb-0">Javohir Toirov</p>
                                                <span style="font-size: 14px; color: grey;">ID 12345678</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header_mobile_menu-nav-ul__li">
                                        <ul class="services m-0 p-0 list-unstyled">
                                            <li class="service_item">
                                                <a href="#!">
                                                    <span class="service_item-back">
                                                        <img src="../../../public/images/icons/search.svg" alt="">
                                                    </span>
                                                    Новый поиск
                                                </a>
                                            </li>
                                            <li class="service_item">
                                                <a href="#!">
                                                    <span class="service_item-back">
                                                        <img src="../../../public/images/icons/plus-add.svg" alt="">
                                                    </span>
                                                    Разместить объявление
                                                </a>
                                            </li>
                                            <li class="service_item">
                                                <a href="#!">
                                                    <span class="service_item-back">
                                                        <img src="../../../public/images/icons/saved.svg" alt="">
                                                    </span>
                                                    Избранное
                                                </a>
                                            </li>
                                            <li class="service_item">
                                                <a href="#!">
                                                    <span class="service_item-back">
                                                        <img src="../../../public/images/icons/sapravochniy-center.svg" alt="">
                                                    </span>
                                                    Справочный центр
                                                </a>
                                            </li>
                                            <li class="service_item">
                                                <a href="#!">
                                                    <span class="service_item-back">
                                                        <img src="../../../public/images/icons/danger.svg" alt="">
                                                    </span>
                                                    Сообщить об ошибке
                                                </a>
                                            </li>
                                            <li class="service_item">
                                                <a href="#!">
                                                    <span class="service_item-back">
                                                        <img src="../../../public/images/icons/buy-rent.svg" alt="">
                                                    </span>
                                                    Куплю / Сниму
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="header_mobile_menu-nav-ul__li">
                                        <ul class="rubrics m-0 p-0 list-unstyled">
                                            <li v-for="item in rubricsMenu" :key="item.id" class="rubric_item">
                                                <router-link :to="item.link">
                                                    {{ item.title }}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="header_mobile_menu-nav-ul__li">
                                        <div class="logout">
                                            <div class="logout_icon"></div>
                                            Выйти
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                <!-- Mobile menu end -->
                <div class="header-right-block">
                    <div class="btn-icons">
                        <div class="utilities d-flex position-relative">
                            <a href="http://" class="utilities-link d-lg-block d-md-block d-sm-block d-none">
                                <svg class="icon_svg" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4h14V2H1v2Zm0 5h10V7H1v2Zm7 5H1v-2h7v2Zm4 2v-2h-2v-2h2v-2h2v2h2v2h-2v2h-2Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="http://" class="utilities-link">
                                <svg class="icon_svg" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m2.696 11.401.03-.494-.202-.45a6 6 0 1 1 3.02 3.02l-.452-.204-.493.031-2.03.127.127-2.03Zm-1.134 4.097.881-.055 2.28-.143A8 8 0 1 0 .7 11.276l-.142 2.281-.055.88-.07 1.132 1.13-.07Zm2.73-8.205a1 1 0 1 1 1.415 1.414 1 1 0 0 1-1.414-1.414Zm3 1.414a1 1 0 1 0 1.415-1.414 1 1 0 0 0-1.414 1.414Zm3 0a1 1 0 1 0 1.415-1.414 1 1 0 0 0-1.414 1.414Z" fill="currentColor"></path></svg>
                            </a>
                            <div class="utilities-saved">
                                <a href="http://" class="utilities-link">
                                    <svg class="icon_svg" aria-hidden="true" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.93 3A2.92 2.92 0 0 0 2 5.908c0 2.14 1.476 4.161 3.181 5.748A20.008 20.008 0 0 0 8 13.829a20.008 20.008 0 0 0 2.819-2.174C12.524 10.07 14 8.05 14 5.909A2.92 2.92 0 0 0 11.07 3a2.93 2.93 0 0 0-2.29 1.095L8 5.064l-.78-.969A2.93 2.93 0 0 0 4.93 3ZM8 15l-.49.871h-.001l-.002-.001-.006-.003-.019-.011a20.384 20.384 0 0 1-1.14-.726 22.016 22.016 0 0 1-2.523-2.01C2.024 11.45 0 8.924 0 5.908 0 3.192 2.212 1 4.93 1 6.09 1 7.158 1.4 8 2.068A4.925 4.925 0 0 1 11.07 1C13.788 1 16 3.192 16 5.908c0 3.016-2.024 5.541-3.819 7.212a22.022 22.022 0 0 1-3.596 2.697l-.067.039-.019.01-.006.004-.002.001L8 15Zm0 0 .49.872-.49.275-.49-.275L8 15Zm-.49-.871Z" fill="currentColor"></path></svg>
                                </a>
                            </div>
                            <a href="http://" class="utilities-link">
                                <svg class="icon_svg" aria-hidden="true" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.731 2.045C6.406 1.453 5.801 1 5 1c-.707 0-1.25.48-1.5.96C3.25 1.48 2.706 1 2 1 .766 1 0 2.073 0 3.072c0 .975.795 1.92 1.627 2.64l.1.084c.625.526 1.254.919 1.568 1.098.122.069.196.106.205.106.052 0 2.452-1.322 3.247-2.937l.027-.057a2.211 2.211 0 0 0 .224-1.028 2.168 2.168 0 0 0-.267-.933ZM1.037 7.799a6.5 6.5 0 0 0 10.807 5.537l2.885 2.59 1.336-1.487-2.955-2.654a6.502 6.502 0 0 0-4.223-9.636c.075.31.113.621.113.923 0 .402-.063.78-.166 1.129A4.502 4.502 0 0 1 7.5 13a4.5 4.5 0 0 1-4.479-4.058l-.02-.005H3a2.04 2.04 0 0 1-.448-.173 5.217 5.217 0 0 1-.196-.104 13.689 13.689 0 0 1-1.318-.861Z" fill="currentColor"></path></svg>
                            </a>
                            <a href="http://" class="utilities-link d-lg-block d-md-block d-sm-block d-none">
                                <svg class="icon_svg" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#BellStroke16a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.238 0 3.25 2.426 3.25 5.23v.847c0 .013-.001.016-.003.02v.001a.511.511 0 0 1-.076.113 3.33 3.33 0 0 1-.254.27l-.172.167-.021.02c-.062.06-.129.124-.198.193l-.046.038C1.935 7.357 1 8.143 1 9.462c0 .988.466 1.737 1.117 2.251.614.486 1.391.768 2.115.942C5.67 13 7.265 13 7.977 13h.046c.712 0 2.307 0 3.745-.345.724-.174 1.5-.456 2.115-.942C14.533 11.2 15 10.45 15 9.462c0-1.32-.935-2.105-1.48-2.563l-.046-.038-.198-.193-.02-.02a20.63 20.63 0 0 1-.172-.166 3.128 3.128 0 0 1-.255-.271.515.515 0 0 1-.076-.113c-.002-.005-.003-.008-.003-.021V5.23C12.75 2.426 10.762 0 8 0ZM5.25 5.23C5.25 3.298 6.562 2 8 2s2.75 1.297 2.75 3.23v.847c0 .595.242 1.043.521 1.389.18.223.427.46.64.665l.187.18.027.028.03.024c.67.568.845.787.845 1.099 0 .28-.105.483-.358.683-.287.228-.743.422-1.341.565-1.19.286-2.576.29-3.301.29-.725 0-2.11-.004-3.301-.29-.598-.143-1.053-.337-1.341-.565-.253-.2-.358-.403-.358-.683 0-.312.175-.53.846-1.099l.03-.024.027-.027c.056-.056.12-.117.185-.18.214-.206.461-.443.64-.666.28-.346.522-.794.522-1.39v-.845Zm-.148 8.578a3.001 3.001 0 0 0 5.78 0 21.283 21.283 0 0 1-2.89.192c-.601 0-1.705-.024-2.89-.192Z" fill="currentColor"></path></g><defs><clipPath id="BellStroke16a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>
                            </a>
                        </div>
                    </div>
                    <div class="btn-add-object">
                        <router-link :to="{name: 'newObject'}" class="btn-add">
                            <span class="_25d45facb5--text--rH6sj">+ Разместить объявление</span>
                        </router-link>
                    </div>
                    
                    <div v-if="loggedIn === false" class="avatar_log">
                        <a class="btn-login" rel="noopener" href="#!" data-toggle="modal" data-target="#animation">
                            <span>Войти</span>
                        </a>
                    </div>
                    
                    <div v-else class="dropdown-avatar avatar_log">
                        <a class="dropdown-toggle nav-link dropdown-user-link avatar_drop" href="#" data-toggle="dropdown">
                            <img class="round" src="../../../public/images/avatar.jpg" width="100%" alt="avatar">
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="avatar-inform">
                                <a href="http://" class="user_name">
                                    Javohir Toirov
                                </a>
                                <a href="http://" class="mb-0 user_id">
                                    ID 12345678
                                </a>
                            </div>
                            <a class="dropdown-item" href="account/summary">
                                Личный кабинет
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="auth-login.html">
                                Разместить объявление
                            </a>
                            <div class="dropdown-divider"></div>
                            <a  class="dropdown-item" href="#!">
                                Exit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script>
import Button from 'primevue/button';

export default {
    components: {
    },
    data() {
        return {
            mobileView: false,
            mobileNav: false,
            showNav: false,
            rubricsMenu: [
                {id: 1,title: "Аренда", link: "/"},
                {id: 2,title: "Продажа", link: "/"},
                {id: 3,title: "Новостройки", link: "/"},
                {id: 4,title: "Коммерческая", link: "/"},
                {id: 5,title: "Ипотека", link: "/"},
            ]
        }
    },
    props: {
        loggedIn: {
            type: Boolean,
        }
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.mobileView = true;
                return;
            }
            this.mobileView = false;
            this.showNav = false;
            return;
        },
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
}
</script>


<style lang="scss">
    .header__navbar{
        position: relative;
        
        .nabvar{
            border-bottom: 1px solid var(--gray10_100);
            background: var(--white_100);
            
            .nabvar__block-logo{
                // background-size: 100%;
                // width: 110px;
                // height: 67px;
                // background-position: 0 6px;
                flex-shrink: 0;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                font-weight: 700;
                // background: url('../../../public/images/logo.svg')no-repeat center;
            }
            
            nav{
                flex: 1 1;
                overflow: hidden;
                display: flex;
                
                .navbar-ul{
                    flex-shrink: 0;
                    margin: 0;
                    padding: 0 0 0 40px;
                    list-style: none;
                    display: flex;
                    
                    li{
                        
                        a{
                            display: flex;
                            position: relative;
                            align-items: center;
                            cursor: pointer;
                            padding: 0 8px;
                            height: 100%;
                            color: var(--black_100);
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 20px;
                            text-decoration: none;
                        }
                    }
                }
            }
            
            .header-right-block{
                align-items: center;
                margin-left: auto;
                flex-shrink: 0;
                display: flex;
                position: relative;
                
                @media (min-width: 1024px) {
                    .btn-icons{
                        margin-right: 23px;
                    }
                }
                
                .utilities-link{
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    border: none;
                    background: none;
                    padding: 11px;
                    color: var(--gray60_100);
                    text-decoration: none;
                    
                    .icon_svg{
                        color: currentColor;
                    }
                }
                
                .btn-add-object{
                    margin-right: 16px;
                    
                    .btn-add {
                        background-color: var(--primary_100);
                        color: var(--white_100);
                        display: inline-flex;
                        text-decoration: none;
                        padding: 3px 11px;
                        height: 28px;
                        position: relative;
                        cursor: pointer;
                        outline: none;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        white-space: nowrap;
                        align-items: center;
                        
                        span {
                            font-size: 14px;
                            line-height: 20px;
                            font-style: normal;
                            font-weight: 700;
                        }
                    }
                }
                
                .btn-login{
                    background-color: var(--secondary_button_10);
                    color: var(--primary_100);
                    display: inline-flex;
                    text-decoration: none;
                    padding: 3px 11px;
                    height: 28px;
                    position: relative;
                    cursor: pointer;
                    outline: none;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    white-space: nowrap;
                    align-items: center;
                    
                    span{
                        font-size: 14px;
                        line-height: 20px;
                        font-style: normal;
                        font-weight: 700;
                    }
                }
                
                .dropdown-avatar{
                    .nav-link{
                        width: 44px;
                        height: 44px;
                        cursor: pointer;
                        border-radius: 50%;
                        overflow: hidden;
                        padding: 0 !important;
                        
                    }
                    
                    .dropdown-menu{
                        -webkit-box-shadow: 0 8px 16px var(--superblack_40);
                        border: 1px solid #e8e9ec;
                        border-radius: 4px;
                        background: #fff;
                        padding: 18px 16px 20px;
                        width: 253px;
                    }
                    
                    .dropdown-menu.show{
                        top: 8px !important;
                    }
                    
                    .avatar-inform{
                        display: flex;
                        flex-direction: column;
                        cursor: pointer;
                        margin-bottom: 16px;
                        
                        .user_name{
                            margin-bottom: 4px;
                            color: var(--black_100);
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 22px;
                            transition: .3s;
                            
                            &:hover{
                                color: var(--primary_100);
                                text-decoration: none;
                            }
                        }
                        
                        .user_id{
                            mix-blend-mode: normal;
                            cursor: pointer;
                            color: var(--gray60_100);
                            font-size: 12px;
                            line-height: 18px;
                            transition: .3s;
                            
                            &:hover{
                                color: var(--primary_100);
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
            
           
        }
    }
    
    .header_mobile_menu{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        visibility: hidden;
        width: 100%;
        height: 100%;
        transition: 1s tranform cubic-bezier(0,.12,.14,1);
    }
    
    .header_mobile_menu-active{
        visibility: visible;
    }
    
    .header_mobile_menu::before{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        transition: opacity .3s ease-in-out;
        cursor: pointer;
        background-color: rgba(24,41,48,.8);
        width: 100%;
        height: 100%;
        content: "";
    }
    
    .header_mobile_menu_wrapper{
        display: flex;
        position: relative;
        flex-direction: column;
        transform: translateX(-100%);
        transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out,-moz-transform .3s ease-in-out,-o-transform .3s ease-in-out;
        cursor: auto;
        background: #fff;
        height: 100%;
    }
    .header_mobile_menu_wrapper-active{
        transform: translateX(0);
        transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out,-moz-transform .3s ease-in-out,-o-transform .3s ease-in-out;
    }
    .btn_close{
        display: flex;
        flex: 0 0 auto;
        cursor: pointer !important;
        border: none;
        background: url('../../../public/images/icons/btn-exit.svg') no-repeat;
        background-position: 14px 16px;
        background-size: 20px;
        padding: 0;
        width: 100%;
        height: 50px;
        color: var(--black_100);
    }
    
    .header_mobile_menu-nav{
        position: relative !important;
        height: 100% !important;
        overflow-y: auto !important;
        display: block !important;
    }
    
    .header_mobile_menu-nav-ul__li::before{
        display: block;
        background-clip: content-box;
        background-color: #e8e9ec;
        padding: 14px 16px;
        height: 30px;
        content: "";
    }
    
    .rubric_item a{
        display: block;
        cursor: pointer;
        padding: 14px 16px;
        color: var(--black_100);
        font-size: 16px;
        line-height: 22px;
        text-decoration: none;
    }
    
    .hamburger_block-btn{
        cursor: pointer;
        margin-right: 12px;
        margin-left: -10px;
        border: none;
        background: none;
        padding: 8px;
        color: var(--gray60_100);
        background: transparent;
        outline: none;
    }
    
    .hamburger_block-btn i{
        font-size: 24px;
    }
    
    .logout{
        display: flex;
        cursor: pointer;
        padding: 14px 16px;
        color: var(--black_100);
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-decoration: none;
    }
    
    .logout_icon{
        margin-right: 18px;
        background-image: url('../../../public/images/icons/logout_icon.svg');
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
    }
    
    .enter_icon{
        margin-right: 18px;
        background-image: url('../../../public/images/icons/btn-enter.svg');
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
    }
    
    .service_item a{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 14px 16px;
        color: var(--black_100);
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-decoration: none;
    }
    
    .service_item-back{
        margin-right: 18px;
        width: 24px;
        height: 24px;
    }
    // *****************************************
    @media (min-width: 640px){
        .header_mobile_menu_wrapper {
            max-width: 320px;
        }
        
    }
    @media (max-width: 660px){
        
        .btn-add-object,
        .avatar_log{
            display: none;
        }
        
        .avatar_mob{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .avatar_mob img{
            width: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    
    
</style>